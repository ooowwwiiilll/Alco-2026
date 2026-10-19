import { useEffect, useState } from 'react';
import { SignIn } from '../app/SignIn';
import { isPublishedStatus } from '../domain/releaseStatus';
import { useIdentity } from '../hooks/useIdentity';
import { firebaseConfigurationError } from '../lib/firebase';
import { loadLocalAssets } from '../persistence/assets';
import { repository } from '../persistence/repository';
import { componentRegistry } from '../services/library';
import type { AppConfig, DeviceMode, PreviewLanguage, ReleaseItem } from '../types';
import { frameClass } from './prepareSection';
import { HtmlRenderer } from './renderManifest';

interface PreviewRoute {
  releaseId: string;
  /** Immutable approved snapshot; absent for the live (in-review) release. */
  revision?: string;
  device: DeviceMode;
  language: PreviewLanguage;
}

export function parsePreviewRoute(
  location: Pick<Location, 'pathname' | 'search'>,
  defaultDevice: DeviceMode = 'desktop',
): PreviewRoute {
  const match = location.pathname.match(/^\/preview\/([^/]+)(?:\/(\d+))?\/?$/);
  if (!match) throw new Error('Invalid preview link.');
  const params = new URLSearchParams(location.search);
  return {
    releaseId: decodeURIComponent(match[1]!),
    revision: match[2],
    device:
      params.get('device') === 'mobile' || params.get('device') === 'desktop'
        ? (params.get('device') as DeviceMode)
        : defaultDevice,
    language: params.get('lang') === 'en' ? 'en' : 'id',
  };
}

async function loadRelease({ releaseId, revision }: PreviewRoute): Promise<ReleaseItem> {
  const release = revision
    ? await repository.get<ReleaseItem>('publishedReleases', `${releaseId}--${revision}`)
    : await repository.get<ReleaseItem>('releases', releaseId);
  if (!release?.manifest || (revision && !isPublishedStatus(release.status)))
    throw new Error('This preview is unavailable or was removed.');
  return release;
}

/** Read-only page preview for reviewers and stakeholders with an approved account. */
export default function ReadOnlyPreview() {
  const { currentUser, resolved } = useIdentity();
  const [content, setContent] = useState<{ html: string; device: DeviceMode } | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (firebaseConfigurationError || !currentUser) return;
    let active = true;
    (async () => {
      const route = parsePreviewRoute(location, window.innerWidth < 768 ? 'mobile' : 'desktop');
      const [release, config] = await Promise.all([
        loadRelease(route),
        repository.get<AppConfig>('appConfig', 'global'),
      ]);
      await loadLocalAssets();
      const renderer = new HtmlRenderer(componentRegistry, config?.homepageBackground);
      const html = renderer.render({ ...release.manifest!, locale: route.language }, route.device);
      if (!active) return;
      document.title = `${release.name} · ALCO Preview`;
      setContent({ html, device: route.device });
    })().catch((failure: unknown) => {
      if (active) setError(failure instanceof Error ? failure.message : 'Preview unavailable.');
    });
    return () => {
      active = false;
    };
  }, [currentUser?.id]);

  if (firebaseConfigurationError)
    return (
      <p role="alert" className="p-6">
        {firebaseConfigurationError}
      </p>
    );
  if (!resolved) return <div className="h-dvh w-full bg-black" aria-busy="true" />;
  if (!currentUser) return <SignIn initialMode="login" />;
  if (error)
    return (
      <p role="alert" className="p-6 text-white">
        {error}
      </p>
    );
  if (!content) return <p className="p-6 text-white">Loading preview…</p>;
  const mobile = content.device === 'mobile';
  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-white">
      <div
        className={`${frameClass(mobile)} mx-auto ${mobile ? 'max-w-[375px]' : 'w-full'}`}
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </main>
  );
}
