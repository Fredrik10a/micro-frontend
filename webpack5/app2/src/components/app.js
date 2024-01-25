import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import './../styles.css';

const NestedApp = lazy(() => import("NAPP1/App").catch(error => {
  console.error("Nested component Failed to load!", error);
  return { default: AppFallback };
}));

const AppFallback = () => (
  <span style={{ color: 'red' }}>
    There was a problem importing your component. Check the console for error messages.
  </span>
);

export default function App() {
  return(
    <Suspense fallback={<div>Loading NestedApp...</div>}>
      <ErrorBoundary FallbackComponent={AppFallback}>
        <NestedApp />
      </ErrorBoundary>
    </Suspense>
  );
}
