import type { ContentReference, PageManifest } from './domain/manifest';

/** Upper-case library grouping label, e.g. HERO, PRODUCTS, CONTENT. */
export type ComponentCategory = string;

export interface EditableField {
  id: string;
  label: string;
  defaultValue: string;
  type?: 'text' | 'number' | 'image' | 'color';
}

export interface SectionTemplate {
  revision?: number;
  id: string;
  name: string;
  category: ComponentCategory;
  description?: string;
  htmlContent: string;
  editableFields?: EditableField[];
  isCustom?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

/** Role Manager edits to a built-in library component. */
export interface ComponentOverride {
  revision?: number;
  id: string;
  name?: string;
  htmlContent?: string;
  updatedAt: string;
  updatedBy: string;
}

export interface PlacedSection {
  bindings?: Record<string, ContentReference>;
  instanceId: string;
  templateId: string;
  name: string;
  htmlContent: string;
  customValues: Record<string, string>;
  isEditing?: boolean;
  isOutOfScope?: boolean;
  /** Position and content locked by an admin; product users cannot edit or remove it. */
  isLocked?: boolean;
  /** Individual editable fields locked by an admin. */
  lockedFields?: Record<string, boolean>;
}

export type ViewportMode = 'mobile' | 'desktop' | 'both';
export type PreviewLanguage = 'id' | 'en';
export type AppTheme = 'dark' | 'light';
export type SidebarViewMode = 'components' | 'templates' | 'releases';
export type DeviceMode = 'desktop' | 'mobile';

export type UserRole = 'manager' | 'admin' | 'product';
export type UserApprovalStatus = 'pending' | 'approved' | 'rejected';

export interface AppUser {
  revision?: number;
  id: string;
  name: string;
  email: string;
  role: UserRole;
  division: string;
  avatar?: string;
  title?: string;
  status: UserApprovalStatus;
  createdAt: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectionReason?: string;
  canAccessComponents?: boolean;
}

export interface RegistrationInput {
  name: string;
  email: string;
  password: string;
  division: string;
  title?: string;
}

export type DivisionStatus = 'Active' | 'Inactive';

export interface DivisionItem {
  revision?: number;
  id: string;
  name: string;
  description?: string;
  status?: DivisionStatus;
  createdAt?: string;
  createdBy?: string;
}

export type ReleaseStatus = 'draft' | 'in_review' | 'approved' | 'rejected';

export interface ReleaseItem {
  revision?: number;
  manifest?: PageManifest;
  id: string;
  name: string;
  folder?: string;
  description?: string;
  version: string;
  status: ReleaseStatus;
  createdAt: string;
  updatedAt?: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  authorEmail?: string;
  division: string;
  sections: PlacedSection[];
  /** Increments only when the canvas content is saved; guards against stale editors. */
  contentRevision?: number;
  thumbnailBg?: string;
  thumbnail?: string;
  sourceTemplateId?: string;
  sourceTemplateName?: string;
}

export interface PageTemplate {
  revision?: number;
  manifest?: PageManifest;
  id: string;
  name: string;
  description?: string;
  category?: string;
  createdAt: string;
  updatedAt?: string;
  sections: PlacedSection[];
  /** Increments only when the canvas content is saved; guards against stale editors. */
  contentRevision?: number;
  thumbnailBg?: string;
  thumbnail?: string;
  isDefault?: boolean;
}

export interface ReleaseComment {
  revision?: number;
  id: string;
  releaseId: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  division?: string;
  avatar?: string;
  text: string;
  componentTag?: string;
  createdAt: string;
}

export type NotificationType =
  'comment' | 'mention' | 'review_request' | 'status_change' | 'account';

export interface AppNotification {
  revision?: number;
  id: string;
  recipientId: string;
  senderId: string;
  senderName: string;
  type: NotificationType;
  text: string;
  releaseId?: string;
  releaseName?: string;
  createdAt: string;
  read: boolean;
}

export type ActivityAction = 'create' | 'edit' | 'delete';

export interface ActivityLogEntry {
  revision?: number;
  id: string;
  actorId: string;
  actorName: string;
  action: ActivityAction;
  releaseId?: string;
  releaseName?: string;
  timestamp: string;
  /** Firestore TTL field: entries are retained for 30 days. */
  expireAt: string;
}

export interface MediaItem {
  revision?: number;
  id: string;
  name: string;
  url: string;
  uploadedBy: string;
  createdAt: string;
  size?: string;
  isSystemDefault?: boolean;
}

/** Workspace settings readable by approved users. */
export interface AppConfig {
  revision?: number;
  id: 'global';
  deletedTemplateIds?: string[];
  deletedPageIds?: string[];
  templateRenames?: Record<string, string>;
  templateCategories?: string[];
  homepageBackground?: string;
}

/** Settings readable before sign-in (landing page only). */
export interface PublicConfig {
  revision?: number;
  id: 'global';
  authBackground?: string;
}

export type DbStatus = 'syncing' | 'connected' | 'offline';
