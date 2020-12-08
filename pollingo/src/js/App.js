import React from "react";
import '../css/main.css';
import Header from './Header';
import PollBox from './PollBox';
import Console from './Console';

function App() {
  return (
    <div className="App">
      <Header />
      <PollBox />
      <Console />
    </div>
  );
}

export default App;
