import React, { lazy, Suspense } from 'react';

const FirstRemoteApp = lazy(() => import('firstApp/App'));
const SecondRemoteApp = lazy(() => import('secondApp/App'));

import './styles.css';

export default function App() {
  return (
    <div className="MicroApp">
      <Suspense fallback={<div>Loading FirstRemoteApp...</div>}>
        <FirstRemoteApp />
      </Suspense>
      <h1>---</h1>
      <Suspense fallback={<div>Loading SecondRemoteApp2...</div>}>
        <SecondRemoteApp />
      </Suspense>
    </div>
  );
}
