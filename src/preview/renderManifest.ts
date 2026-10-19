import { fromManifest, type ComponentRegistry, type PageManifest } from '../domain/manifest';
import type { DeviceMode } from '../types';
import { prepareSection } from './prepareSection';

/** Turns a page manifest into deliverable output; other renderers (e.g. Drupal) implement this. */
export interface RendererAdapter<T> {
  render(manifest: PageManifest, device: DeviceMode): T;
}

export class HtmlRenderer implements RendererAdapter<string> {
  constructor(
    private registry: ComponentRegistry,
    private placeholderImage?: string,
  ) {}
  render(manifest: PageManifest, device: DeviceMode): string {
    return fromManifest(manifest, this.registry)
      .map((section) =>
        prepareSection(section, {
          language: manifest.locale,
          mobile: device === 'mobile',
          placeholderImage: this.placeholderImage,
        }),
      )
      .join('\n');
  }
}
