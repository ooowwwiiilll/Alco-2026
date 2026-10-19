import type { ContentReference, ContentResolver } from '../domain/manifest';

// Use on a trusted server. Tokens must never be included in a Vite environment variable.
export class StrapiResolver implements ContentResolver {
  constructor(
    private baseUrl: string,
    private token: string,
    private contentType = 'pages',
    private request: typeof fetch = fetch,
  ) {
    if (!/^https?:\/\//.test(baseUrl) || !/^[a-z][a-z0-9-]*$/.test(contentType))
      throw new Error('Invalid Strapi configuration.');
  }
  async resolve(reference: ContentReference): Promise<string> {
    if (
      !/^[a-zA-Z0-9_-]+$/.test(reference.documentId) ||
      !/^[a-zA-Z][a-zA-Z0-9_]*$/.test(reference.field)
    )
      throw new Error('Invalid Strapi reference.');
    const url = new URL(
      `/api/${this.contentType}/${encodeURIComponent(reference.documentId)}`,
      this.baseUrl,
    );
    if (reference.locale) url.searchParams.set('locale', reference.locale);
    url.searchParams.set('status', 'published');
    if (reference.kind === 'asset') url.searchParams.set('populate', reference.field);
    const response = await this.request(url, {
      headers: { Authorization: `Bearer ${this.token}` },
      signal: AbortSignal.timeout(10000),
      redirect: 'error',
    });
    if (!response.ok) throw new Error(`Strapi returned ${response.status}; publication cancelled.`);
    const result = (await response.json()) as { data?: Record<string, unknown> };
    const value = result.data?.[reference.field];
    if (reference.kind === 'text' && typeof value === 'string') return value;
    if (
      reference.kind === 'asset' &&
      value &&
      typeof value === 'object' &&
      'url' in value &&
      typeof value.url === 'string'
    ) {
      const asset = new URL(value.url, this.baseUrl);
      if (!['https:', 'http:'].includes(asset.protocol)) throw new Error('Unsafe CMS asset URL.');
      return asset.href;
    }
    throw new Error(`CMS field ${reference.field} is unavailable or has the wrong type.`);
  }
}
