/** Strict email format check used by login, registration and password reset. */
export const isValidEmailFormat = (email: string): boolean => {
  const clean = email.trim();
  if (!clean) return false;

  // Must not contain whitespace
  if (/\s/.test(clean)) return false;

  // Must have exactly one @
  const parts = clean.split('@');
  if (parts.length !== 2) return false;

  const [local, domain] = parts;
  if (!local || !domain) return false;

  // Local part checks: cannot start or end with a dot, cannot contain consecutive dots
  if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) return false;

  // Domain checks: cannot start or end with a dot or hyphen, cannot contain consecutive dots
  if (
    domain.startsWith('.') ||
    domain.endsWith('.') ||
    domain.startsWith('-') ||
    domain.endsWith('-') ||
    domain.includes('..')
  )
    return false;

  // Domain must contain at least one dot separating domain name and TLD
  const domainParts = domain.split('.');
  if (domainParts.length < 2) return false;

  // Each domain part must not be empty and must only contain alphanumeric or hyphen
  for (const part of domainParts) {
    if (!part || !/^[a-zA-Z0-9-]+$/.test(part) || part.startsWith('-') || part.endsWith('-')) {
      return false;
    }
  }

  // TLD (the last domain segment) must be at least 2 letters
  const tld = domainParts[domainParts.length - 1];
  if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;

  // Local part characters check
  const localRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
  if (!localRegex.test(local)) return false;

  return true;
};
