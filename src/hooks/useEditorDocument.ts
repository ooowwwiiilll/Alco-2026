import { useCallback, useEffect, useReducer, useRef } from 'react';
import { validateSections } from '../domain/validation';
import { browserStorage, readJSON } from '../lib/browserStorage';
import { dataMode } from '../lib/runtime';
import type { PlacedSection } from '../types';

/** The page open on the canvas: a release, a page template, or an unsaved canvas. */
export interface EditorDocument {
  sections: PlacedSection[];
  /** Release or page template ID the canvas saves back to. */
  id: string | null;
  name: string | null;
  /** Revision the canvas was loaded at; saves are rejected if the stored page moved on. */
  revision: number;
}

interface State {
  document: EditorDocument;
  past: PlacedSection[][];
  future: PlacedSection[][];
  isDirty: boolean;
}

type Action =
  | { type: 'edit'; update: (sections: PlacedSection[]) => PlacedSection[] }
  | { type: 'load'; document: EditorDocument }
  | { type: 'saved'; changes: Partial<Omit<EditorDocument, 'sections'>> }
  | { type: 'undo' }
  | { type: 'redo' };

const EMPTY: EditorDocument = { sections: [], id: null, name: null, revision: 0 };
const HISTORY_LIMIT = 100;

function reducer(state: State, action: Action): State {
  const { document, past, future } = state;
  switch (action.type) {
    case 'edit': {
      const sections = action.update(document.sections);
      if (sections === document.sections) return state;
      return {
        document: { ...document, sections },
        past: [...past, document.sections].slice(-HISTORY_LIMIT),
        future: [],
        isDirty: true,
      };
    }
    case 'load':
      return { document: action.document, past: [], future: [], isDirty: false };
    case 'saved':
      return { ...state, document: { ...document, ...action.changes }, isDirty: false };
    case 'undo': {
      const previous = past.at(-1);
      if (!previous) return state;
      return {
        document: { ...document, sections: previous },
        past: past.slice(0, -1),
        future: [document.sections, ...future],
        isDirty: true,
      };
    }
    case 'redo': {
      const [next, ...rest] = future;
      if (!next) return state;
      return {
        document: { ...document, sections: next },
        past: [...past, document.sections],
        future: rest,
        isDirty: true,
      };
    }
  }
}

function readDraft(key: string): EditorDocument {
  const saved = readJSON<EditorDocument | null>(key, null);
  if (!saved) return EMPTY;
  try {
    validateSections(saved.sections);
    if (saved.id !== null && typeof saved.id !== 'string') throw new Error('Invalid draft ID.');
    if (saved.name !== null && typeof saved.name !== 'string')
      throw new Error('Invalid draft name.');
    if (!Number.isSafeInteger(saved.revision) || saved.revision < 0)
      throw new Error('Invalid draft revision.');
    return saved;
  } catch {
    return EMPTY;
  }
}

/**
 * Canvas document with undo/redo and per-account draft recovery. Unsaved work survives reloads
 * in this browser only; switching accounts never carries another user's canvas over.
 */
export function useEditorDocument(userId: string) {
  const key = `alco:draft:v2:${dataMode}:${encodeURIComponent(userId)}`;
  const [state, dispatch] = useReducer(reducer, key, (draftKey) => ({
    document: readDraft(draftKey),
    past: [],
    future: [],
    isDirty: false,
  }));
  const latest = useRef(state.document);
  latest.current = state.document;

  useEffect(() => {
    const timer = window.setTimeout(
      () => browserStorage.setItem(key, JSON.stringify(state.document)),
      350,
    );
    return () => clearTimeout(timer);
  }, [state.document, key]);
  useEffect(() => {
    const flush = () => browserStorage.setItem(key, JSON.stringify(latest.current));
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, [key]);

  /** A user edit: recorded for undo and marks the canvas as changed. */
  const updateSections = useCallback(
    (update: (sections: PlacedSection[]) => PlacedSection[]) => dispatch({ type: 'edit', update }),
    [],
  );
  /** Opens a page; history restarts and the canvas is clean. */
  const load = useCallback((document: EditorDocument) => dispatch({ type: 'load', document }), []);
  const markSaved = useCallback(
    (changes: Partial<Omit<EditorDocument, 'sections'>>) => dispatch({ type: 'saved', changes }),
    [],
  );
  const undo = useCallback(() => dispatch({ type: 'undo' }), []);
  const redo = useCallback(() => dispatch({ type: 'redo' }), []);

  return {
    ...state.document,
    isDirty: state.isDirty,
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0,
    updateSections,
    load,
    markSaved,
    undo,
    redo,
  };
}

export type EditorState = ReturnType<typeof useEditorDocument>;
