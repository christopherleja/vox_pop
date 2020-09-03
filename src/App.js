import React from 'react';
import Dashboard from './components/Dashboard';
import Store from './components/contexts/Store';


function App() {
  return (
    <>
      <Store>
        <Dashboard />
      </Store>
    </>
  );
}

export default App;
