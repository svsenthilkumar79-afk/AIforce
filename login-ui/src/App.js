/*
 * Traced IDs: CMP-AUTH, FR-LOGIN-01, STORY-LOGIN-001
 * Purpose: Root App component — mounts the Login screen
 */
import React from 'react';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
