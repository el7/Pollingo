import React, {useState} from "react";
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

  const [headerColor, setColor] = useState("444444");
  const [screenWidth, setScreenWidth] = useState(200);


  // function setColor() {
  //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
  //   console.log("color: " + randomColor);
  // }

// function setScreenWidth() {
//   const mediaMatch = window.matchMedia('(min-width: 500)');
//}






  return (
    <div className="App">
      <Header color={headerColor}/>
      <PollBox />
      <Console />
    </div>
  );
}

export default App;
