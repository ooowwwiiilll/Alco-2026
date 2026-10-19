import { Edit3, Lock } from 'lucide-react';
import { useState } from 'react';
import { browserStorage } from '../../../lib/browserStorage';

const DEFAULT_URL = 'https://www.pegadaian.co.id';
const STORAGE_KEY = 'alco:browser-mockup-url';

/** Editable URL shown in the desktop frame's mock browser chrome (a per-browser preference). */
export function BrowserAddressBar({ isLight }: { isLight: boolean }) {
  const [browserUrl, setBrowserUrl] = useState(
    () => browserStorage.getItem(STORAGE_KEY) || DEFAULT_URL,
  );
  const handleUrlChange = (url: string) => {
    setBrowserUrl(url);
    browserStorage.setItem(STORAGE_KEY, url);
  };
  return (
    <div className="flex justify-center">
      <div
        className={`w-[320px] px-3 py-1 rounded-[6px] flex items-center justify-between gap-2 transition-all ${
          isLight ? 'bg-white text-stone-900 border border-stone-200' : 'bg-[#353535] text-white'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <Lock
            className={`w-2.5 h-2.5 shrink-0 stroke-[1.5] ${isLight ? 'text-stone-500' : 'text-white'}`}
          />
          <input
            type="text"
            value={browserUrl}
            onChange={(e) => handleUrlChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                (e.target as HTMLInputElement).blur();
              }
            }}
            className={`w-full bg-transparent border-none outline-none font-season-sans text-[12px] font-normal focus:outline-none select-text cursor-text truncate ${
              isLight ? 'text-stone-900 placeholder-stone-400' : 'text-white placeholder-[#6E6E6E]'
            }`}
            placeholder="https://www.pegadaian.co.id"
            title="Click to edit browser URL"
            aria-label="Browser Address Bar URL"
          />
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => handleUrlChange(DEFAULT_URL)}
            title="Reset URL"
            className={`px-2 py-0.5 rounded-[4px] font-['Inter'] text-[11px] font-normal transition-colors cursor-pointer ${
              isLight
                ? 'text-stone-700 bg-stone-100 hover:bg-stone-200'
                : 'text-white bg-[#353535] hover:bg-[#2b2b2b]'
            }`}
          >
            Reset
          </button>
          <Edit3
            className={`w-3 h-3 ${isLight ? 'text-stone-400' : 'text-[#E5E7EB]'} stroke-[1.5]`}
          />
        </div>
      </div>
    </div>
  );
}
