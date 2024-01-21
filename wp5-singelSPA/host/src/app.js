import React from 'react';

// Import the components from remote applications
const loadApp1 = () => {
  try {
    import('app1/App').then((module) => {
      console.log('Loaded app1:', module);
    });
  } catch (error) {
    console.error('Error loading app1:', error);
  }
};


function App() {
  return (
    <div>
      <h1>Hello, Single SPA with React!</h1>
      {loadApp1()}
    </div>
  );
}
export default App;
