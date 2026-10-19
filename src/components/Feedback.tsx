import { AlertTriangle, Check, Lock, X } from 'lucide-react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { reportError } from '../lib/browserStorage';

type Tone = 'success' | 'warning' | 'error';
interface Message {
  id: number;
  tone: Tone;
  text: string;
}
export interface Feedback {
  notify(text: string): void;
  warn(text: string): void;
  fail(error: unknown): void;
}

const FeedbackContext = createContext<Feedback | null>(null);

export function useFeedback(): Feedback {
  const feedback = useContext(FeedbackContext);
  if (!feedback) throw new Error('useFeedback must be used inside FeedbackProvider.');
  return feedback;
}

const DURATION: Record<Tone, number> = { success: 4000, warning: 5000, error: 8000 };
const ICONS: Record<Tone, { icon: typeof Check; background: string; color: string }> = {
  success: { icon: Check, background: '#00EBAF', color: 'text-black' },
  warning: { icon: Lock, background: '#F59E0B', color: 'text-stone-950' },
  error: { icon: AlertTriangle, background: '#F43F5E', color: 'text-white' },
};

/** One toast stack for success messages, governance warnings and failures. */
export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const dismiss = useCallback(
    (id: number) => setMessages((current) => current.filter((message) => message.id !== id)),
    [],
  );
  const push = useCallback(
    (tone: Tone, text: string) => {
      const id = Date.now() + Math.random();
      setMessages((current) =>
        [...current.filter((message) => message.text !== text), { id, tone, text }].slice(-3),
      );
      window.setTimeout(() => dismiss(id), DURATION[tone]);
    },
    [dismiss],
  );
  const feedback = useMemo<Feedback>(
    () => ({
      notify: (text) => push('success', text),
      warn: (text) => push('warning', text),
      fail: (error) => push('error', reportError(error)),
    }),
    [push],
  );
  useEffect(() => {
    const error = (event: Event) => feedback.fail((event as CustomEvent<string>).detail);
    const rejection = (event: PromiseRejectionEvent) => {
      feedback.fail(event.reason);
      event.preventDefault();
    };
    window.addEventListener('alco:error', error);
    window.addEventListener('unhandledrejection', rejection);
    return () => {
      window.removeEventListener('alco:error', error);
      window.removeEventListener('unhandledrejection', rejection);
    };
  }, [feedback]);
  return (
    <FeedbackContext.Provider value={feedback}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-[100001] flex flex-col items-end gap-2 select-none pointer-events-none"
      >
        {messages.map(({ id, tone, text }) => {
          const { icon: Icon, background, color } = ICONS[tone];
          return (
            <div
              key={id}
              role={tone === 'error' ? 'alert' : 'status'}
              className="pointer-events-auto max-w-lg inline-flex items-center justify-between gap-4 rounded-2xl bg-[#1A1A1A] px-5 py-3.5 outline outline-1 -outline-offset-1 outline-[#484848] shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded"
                  style={{ background }}
                >
                  <Icon className={`h-3.5 w-3.5 stroke-[3] ${color}`} />
                </span>
                <p className="min-w-0 break-words font-season-sans text-sm leading-5 text-white">
                  {text}
                </p>
              </div>
              <button
                type="button"
                onClick={() => dismiss(id)}
                className="flex h-5 w-5 shrink-0 items-center justify-center text-stone-400 transition-colors hover:text-white"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </FeedbackContext.Provider>
  );
}
