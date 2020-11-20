import React from "react";
import './App.css';
import Header from './Header';
import PollBox from './PollBox';
import Console from './Console';

function App() {
  // BEM class naming convention
  return (
    <div className="App">

    <Header />

    <PollBox />

    <Console />


    </div>
  );
}

export default App;
