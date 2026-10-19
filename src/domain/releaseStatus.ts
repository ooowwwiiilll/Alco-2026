import type { ReleaseStatus } from '../types';

export const RELEASE_STATUSES: readonly ReleaseStatus[] = [
  'draft',
  'in_review',
  'approved',
  'rejected',
];

export const RELEASE_STATUS_LABELS: Record<ReleaseStatus, string> = {
  draft: 'Draft',
  in_review: 'Dalam Review',
  approved: 'Approved',
  rejected: 'Rejected',
};

/** Statuses written by earlier prototypes, mapped onto the current workflow. */
const LEGACY_STATUSES: Record<string, ReleaseStatus> = {
  dalam_review: 'in_review',
  ready: 'in_review',
  published: 'approved',
};

export function normalizeReleaseStatus(value: unknown): ReleaseStatus {
  if (typeof value === 'string') {
    if ((RELEASE_STATUSES as readonly string[]).includes(value)) return value as ReleaseStatus;
    if (value in LEGACY_STATUSES) return LEGACY_STATUSES[value];
  }
  throw new Error('Invalid release status.');
}

/** Approved releases are frozen into immutable, shareable preview snapshots. */
export function isPublishedStatus(status: ReleaseStatus): boolean {
  return status === 'approved';
}
