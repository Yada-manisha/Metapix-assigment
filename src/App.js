import React from 'react';
import Navbar from './components/Navbar-compo/Navbar';
import './App.css';
import Maingrid from './components/Grid-box/Maingrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Maingrid/>
    </div>
  );
}

export default App;
