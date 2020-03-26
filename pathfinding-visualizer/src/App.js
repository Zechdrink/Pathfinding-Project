import React from 'react';
import NavBar from './visualizer/NavBar'
import PathFindingVisualizer from './visualizer/PathFindingVisualizer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PathFindingVisualizer/>
    </div>
  );
}

export default App;
