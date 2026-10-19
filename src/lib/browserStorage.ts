export function readJSON<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : (JSON.parse(value) as T);
  } catch {
    return fallback;
  }
}

export function reportError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

// Preferences and the recoverable unsaved canvas only; never authentication.
export const browserStorage = {
  getItem(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      window.dispatchEvent(
        new CustomEvent('alco:error', {
          detail: 'Browser storage is full or unavailable. Export a backup of your unsaved work.',
        }),
      );
    }
  },
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      /* Preferences can be unavailable in private mode. */
    }
  },
};
