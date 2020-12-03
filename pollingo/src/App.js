import React from "react";
import './css/App.css';
import Header from './js/Header';
import PollBox from './js/PollBox';
import Console from './js/Console';

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
