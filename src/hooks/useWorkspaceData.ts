import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_PAGE_TEMPLATES } from '../data/pageTemplates';
import { DEFAULT_TEMPLATE_CATEGORIES } from '../domain/templates';
import { isLocalWorkspace } from '../lib/runtime';
import { loadLocalAssets } from '../persistence/assets';
import { subscribeDivisions, subscribeUsers } from '../services/accounts';
import {
  composeComponents,
  composePages,
  subscribeConfig,
  subscribeCustomComponents,
  subscribeOverrides,
  subscribePageTemplates,
} from '../services/library';
import { subscribeMedia, SYSTEM_MEDIA } from '../services/media';
import { subscribeReleases } from '../services/releases';
import { reportFailure } from '../services/store';
import type {
  AppConfig,
  AppUser,
  ComponentOverride,
  DbStatus,
  DivisionItem,
  MediaItem,
  PageTemplate,
  ReleaseItem,
  SectionTemplate,
} from '../types';

/** Live workspace collections for an approved user; every list stays in sync across sessions. */
export function useWorkspaceData(user: AppUser) {
  const [customs, setCustoms] = useState<SectionTemplate[]>([]);
  const [overrides, setOverrides] = useState<ComponentOverride[]>([]);
  const [pages, setPages] = useState<PageTemplate[]>([]);
  const [config, setConfig] = useState<AppConfig>({ id: 'global' });
  const [releases, setReleases] = useState<ReleaseItem[]>([]);
  const [users, setUsers] = useState<AppUser[]>([user]);
  const [divisions, setDivisions] = useState<DivisionItem[]>([]);
  const [media, setMedia] = useState<MediaItem[]>([...SYSTEM_MEDIA]);
  const [dbStatus, setDbStatus] = useState<DbStatus>('syncing');

  useEffect(() => {
    const offline = () => setDbStatus('offline');
    const stops = [
      subscribeCustomComponents(setCustoms),
      subscribeOverrides(setOverrides),
      subscribePageTemplates(setPages),
      subscribeConfig(setConfig),
      subscribeReleases((values) => {
        // Local images are blob URLs registered per browser session.
        loadLocalAssets()
          .then(() => {
            setReleases(values);
            if (isLocalWorkspace) setDbStatus('connected');
          })
          .catch(reportFailure);
      }, offline),
      subscribeUsers(setUsers, offline),
      subscribeDivisions(setDivisions, offline),
      subscribeMedia(setMedia),
    ];
    const connection = (event: Event) =>
      setDbStatus((event as CustomEvent<boolean>).detail ? 'connected' : 'offline');
    window.addEventListener('alco:connection', connection);
    window.addEventListener('offline', offline);
    return () => {
      stops.forEach((stop) => stop());
      window.removeEventListener('alco:connection', connection);
      window.removeEventListener('offline', offline);
    };
  }, [user.id]);

  const components = useMemo(
    () => composeComponents({ customs, overrides, pages, config }),
    [customs, overrides, pages, config],
  );
  const pageTemplates = useMemo(
    () => composePages({ customs, overrides, pages, config }),
    [customs, overrides, pages, config],
  );
  const templateCategories = config.templateCategories?.length
    ? config.templateCategories
    : [...DEFAULT_TEMPLATE_CATEGORIES];

  return {
    components,
    customComponents: customs,
    pageTemplates,
    builtInPageIds: DEFAULT_PAGE_TEMPLATES.map((page) => page.id),
    templateCategories,
    config,
    releases,
    users,
    divisions,
    media,
    dbStatus,
  };
}

export type WorkspaceData = ReturnType<typeof useWorkspaceData>;
