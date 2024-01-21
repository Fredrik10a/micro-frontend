import * as React from 'react';
import App from './host/app';
import "./styles.css";

export default function MainApp() {
  return (
    <>
      <h3>I am the host</h3>
      <App />
    </>
  );
}