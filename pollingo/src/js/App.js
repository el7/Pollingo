import React from "react";
import '../css/App.css';
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
