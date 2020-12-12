import React from "react";
// import '../css/main.css';
import Header from './components/headerComponent';
import PollBox from './components/pollboxComponent';
import Console from './components/consoleComponent';
//import mongoose from 'mongoose';

// const express = require("express");
// const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
/*
mongoose.connect(
  `mongodb+srv://dbBergmank:${process.env.MONGO_ATLAS_PW}@cluster0.ssk8u.mongodb.net/<dbname>?retryWrites=true&w=majority`, 
{
  useMongoClient: true
});
*/

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
