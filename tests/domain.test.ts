import test from 'node:test';
import assert from 'node:assert/strict';
import { COMPONENT_LIBRARY } from '../src/data/library';
import { DEFAULT_PAGE_TEMPLATES } from '../src/data/pageTemplates';
import { canCommentOnRelease, canEditReleaseContent } from '../src/domain/access';
import {
  applySectionUpdate,
  reorderSections,
  sectionsAfterClear,
} from '../src/domain/canvasPolicy';
import { fromManifest, toManifest } from '../src/domain/manifest';
import { normalizeReleaseStatus } from '../src/domain/releaseStatus';
import {
  commentNotifications,
  initialReleaseStatus,
  reviewRequestNotifications,
  statusAfterContentEdit,
} from '../src/domain/releaseWorkflow';
import { roleChangeError, roleOnApproval } from '../src/domain/userGovernance';
import { normalizeRelease, validateTemplate } from '../src/domain/validation';
import type { AppUser, PlacedSection, ReleaseItem } from '../src/types';

const registry = new Map(COMPONENT_LIBRARY.map((component) => [component.id, component]));
const user = (
  id: string,
  role: AppUser['role'],
  division = 'Cards',
  status: AppUser['status'] = 'approved',
): AppUser => ({
  id,
  name: id,
  email: `${id}@example.com`,
  role,
  division,
  status,
  createdAt: '2026-01-01T00:00:00Z',
});
const section = (id: string, extra: Partial<PlacedSection> = {}): PlacedSection => ({
  instanceId: id,
  templateId: 'image-section',
  name: id,
  htmlContent: '<p>x</p>',
  customValues: {},
  ...extra,
});
const release = (overrides: Partial<ReleaseItem> = {}): ReleaseItem => ({
  id: 'rel',
  name: 'Release',
  version: 'v1',
  status: 'in_review',
  createdAt: '2026-01-01T00:00:00Z',
  authorId: 'author',
  authorName: 'author',
  authorRole: 'product',
  division: 'Cards',
  sections: [],
  ...overrides,
});

test('library components are valid, uniquely identified and used by page templates', () => {
  assert.equal(registry.size, COMPONENT_LIBRARY.length);
  COMPONENT_LIBRARY.forEach((component) => validateTemplate(component));
  for (const page of DEFAULT_PAGE_TEMPLATES)
    for (const placed of page.sections)
      assert.ok(registry.has(placed.templateId), placed.templateId);
});

test('manifests round-trip library sections and keep edited markup as legacy HTML', () => {
  const sections = DEFAULT_PAGE_TEMPLATES[0]!.sections.map((item) => ({
    ...item,
    customValues: { a: 'b' },
  }));
  const edited = { ...sections[0]!, htmlContent: '<p>custom</p>' };
  const manifest = toManifest('page', 'Page', [edited, ...sections.slice(1)], registry);
  assert.equal(manifest.sections[0]!.legacy?.html, '<p>custom</p>');
  assert.equal(manifest.sections[1]!.legacy, undefined);
  assert.deepEqual(fromManifest(manifest, registry)[1], sections[1]);
});

test('legacy statuses and embedded comments from the prototype are normalized', () => {
  assert.equal(normalizeReleaseStatus('dalam_review'), 'in_review');
  assert.equal(normalizeReleaseStatus('published'), 'approved');
  assert.throws(() => normalizeReleaseStatus('unknown'));
  const value = normalizeRelease({ ...release(), status: 'dalam_review', comments: [], date: 'x' });
  assert.equal(value.status, 'in_review');
  assert.ok(!('comments' in value) && !('date' in value));
});

test('release workflow: editors publish, product goes to review, edits reopen review', () => {
  assert.equal(initialReleaseStatus(user('a', 'admin')), 'approved');
  assert.equal(initialReleaseStatus(user('p', 'product')), 'in_review');
  assert.equal(statusAfterContentEdit('approved'), 'in_review');
  assert.equal(statusAfterContentEdit('draft'), 'draft');
  const users = [
    user('admin1', 'admin'),
    user('admin2', 'admin', 'Other'),
    user('author', 'product'),
  ];
  assert.deepEqual(
    reviewRequestNotifications(release(), user('author', 'product'), users).map(
      (n) => n.recipientId,
    ),
    ['admin1'],
  );
});

test('only authors edit content; product users only discuss their own releases', () => {
  const rel = release();
  assert.ok(canEditReleaseContent(user('author', 'product'), rel));
  assert.ok(!canEditReleaseContent(user('admin1', 'admin'), rel));
  assert.ok(canCommentOnRelease(user('admin1', 'admin'), rel));
  assert.ok(!canCommentOnRelease(user('other', 'product'), rel));
});

test('comment notifications reach mentioned users and the author exactly once', () => {
  const users = [user('Budi', 'product'), user('author', 'product')];
  const notes = commentNotifications(
    release(),
    { text: 'hi @budi @author' },
    user('admin1', 'admin'),
    users,
    [],
  );
  assert.deepEqual(notes.map((n) => n.recipientId).sort(), ['Budi', 'author']);
});

test('division governance keeps one admin', () => {
  const first = user('new', 'product', 'Cards', 'pending');
  assert.equal(roleOnApproval(first, [first], 'product'), 'admin');
  const admin = user('admin1', 'admin');
  assert.equal(roleOnApproval(first, [admin, first], 'product'), 'product');
  assert.match(
    roleChangeError(admin, 'product', [admin, user('p', 'product')]) ?? '',
    /setidaknya satu Admin/,
  );
  assert.match(roleChangeError(user('m', 'manager'), 'admin', []) ?? '', /Role Manager/);
});

test('locks: product users cannot move, clear or edit locked content', () => {
  const locked = section('a', { isLocked: true });
  assert.equal(reorderSections([locked, section('b')], 0, 1), null);
  assert.deepEqual(sectionsAfterClear([locked, section('b')], user('p', 'product')), [locked]);
  const fieldLocked = section('c', {
    customValues: { title: 'Old' },
    lockedFields: { title: true },
  });
  const updated = applySectionUpdate(
    fieldLocked,
    user('p', 'product'),
    { title: 'New', body: 'ok' },
    undefined,
    {},
  );
  assert.equal(updated.customValues.title, 'Old');
  assert.equal(updated.customValues.body, 'ok');
  assert.deepEqual(updated.lockedFields, { title: true });
});
