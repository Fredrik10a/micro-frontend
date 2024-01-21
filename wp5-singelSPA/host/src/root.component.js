import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './app';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

console.log('The registered application has been loaded!');

export const { bootstrap, mount, unmount } = reactLifecycles;