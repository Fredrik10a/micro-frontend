import { registerApplication, start } from 'single-spa';
import { bootstrap, mount, unmount } from './src/root.component';

// Register host application
registerApplication({
  name: 'host',
  app: () => import('./src/root.component.js'),
  activeWhen: [(location) => location.pathname === "/"],
  customProps: { bootstrap, mount, unmount }
});

// Register remote applications
registerApplication({
  name: 'appOne',
  app: () => import('app1/App'),
  activeWhen: [(location) => location.pathname === "/"],
  customProps: { bootstrap, mount, unmount }
});

/*
registerApplication({
  name: 'app2',
  app: () => import('http://localhost:8082/remoteEntry.js').then((module) => module.app2),
  activeWhen: ['/app2'],
});
*/

// Start SingleSPA
start();
