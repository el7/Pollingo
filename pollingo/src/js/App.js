//const express = require("express");
//const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://dbBergmank:${process.env.MONGO_ATLAS_PW}@cluster0.ssk8u.mongodb.net/<dbname>?retryWrites=true&w=majority`);

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
