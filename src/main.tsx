import { MotionConfig } from 'motion/react';
import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { FeedbackProvider } from './components/Feedback';
import './index.css';

const App = lazy(() => import('./app/App'));
const ReadOnlyPreview = lazy(() => import('./preview/ReadOnlyPreview'));
const Screen = location.pathname.startsWith('/preview/') ? ReadOnlyPreview : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <FeedbackProvider>
        <Suspense fallback={<div className="h-dvh w-full bg-black" aria-busy="true" />}>
          <Screen />
        </Suspense>
      </FeedbackProvider>
    </MotionConfig>
  </StrictMode>,
);
