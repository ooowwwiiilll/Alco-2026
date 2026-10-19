/** Strips technical file extensions from user-facing component and page names. */
export function cleanComponentName(name?: string | null): string {
  if (!name) return '';
  return name.replace(/\.(tsx|jsx|ts|js)$/i, '').trim();
}

/** "PDP Personal 1.2" → "pdp-personal-1-2" */
export function slugifyName(name?: string | null): string {
  if (!name) return 'file';
  return (
    name
      .toLowerCase()
      .trim()
      .replace(/\.(tsx|jsx|ts|js)$/i, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'file'
  );
}

/** dd/mm/yyyy, as shown throughout the Indonesian UI. */
export function formatDate(value?: string): string {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const pad = (part: number) => String(part).padStart(2, '0');
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
}

/** dd/mm/yyyy hh:mm */
export function formatDateTime(value?: string): string {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const time = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  return `${formatDate(value)} ${time}`;
}

export function initials(name?: string | null): string {
  return (name ?? '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join('');
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
