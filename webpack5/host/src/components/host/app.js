import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const FirstRemoteApp = lazy(() => import("APP1/App").catch(error => {
  console.error("First component Failed to load!", error);
  return { default: AppFallback };
}));
const SecondRemoteApp = lazy(() => import("APP2/App").catch(error => {
  console.error("Second component Failed to load!", error);
  return { default: AppFallback };
}));

const AppFallback = () => (
  <span style={{ color: 'red' }}>
    There was a problem importing your component. Check the console for error messages.
  </span>
);

export default function App() {
  return (
    <div className="MicroApp">
        <Suspense fallback={<div>Loading FirstRemoteApp...</div>}>
          <ErrorBoundary fallback={AppFallback}>
            <FirstRemoteApp />
          </ErrorBoundary>
        </Suspense>
      <h1>---</h1>
        <Suspense fallback={<div>Loading SecondRemoteApp...</div>}>
          <ErrorBoundary fallback={AppFallback}>
            <SecondRemoteApp />
          </ErrorBoundary>
        </Suspense>
    </div>
  );
}
