import React, { lazy, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const FirstRemoteApp = lazy(() => import("a/App").catch(error => {
  console.error("First component Failed to load!", error);
  return { default: AppFallback };
}));
const SecondRemoteApp = lazy(() => import("b/App").catch(error => {
  console.error("Second component Failed to load!", error);
  return { default: AppFallback };
}));

const AppFallback = () => (
  <span style={{ color: 'red' }}>
    There was a problem importing your component. Check the console for error messages.
  </span>
);

export default function App() {
  const [showApp1, setShowApp1] = useState(false);
  const [showApp2, setShowApp2] = useState(false);
  return (
    <div className="MicroApp">
      {!showApp1 && <button onClick={() => setShowApp1(true)}>Load App 1</button>}
      {showApp1 && (
        <Suspense fallback={<div>Loading FirstRemoteApp...</div>}>
          <ErrorBoundary fallback={AppFallback}>
            <FirstRemoteApp />
          </ErrorBoundary>
        </Suspense>
      )}
      <h1>---</h1>
      {!showApp2 && <button onClick={() => setShowApp2(true)}>Load App 2</button>}
      {showApp2 && (
        <Suspense fallback={<div>Loading SecondRemoteApp...</div>}>
          <ErrorBoundary fallback={AppFallback}>
            <SecondRemoteApp />
          </ErrorBoundary>
        </Suspense>
      )}
    </div>
  );
}
