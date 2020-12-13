import React, {useState, setState, useEffect} from "react";
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

  const [screenWidth, setScreenWidth] = useState("200");  
  const [headerColor, setColor] = useState("444444");

  // function setColor() {
  //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
  //   console.log("color: " + randomColor);
  // }

// function setScreenWidth() {
//   const mediaMatch = window.matchMedia('(min-width: 500)');
// }

  React.useEffect(() => {
    function handleResize() {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      var newWidth = window.innerWidth;
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight, 'c: ', randomColor);
  
      // works but heavy
//      setColor(randomColor);
//      setScreenWidth(newWidth);

//      console.log("color: " + randomColor);
      
  }
    window.addEventListener('resize', handleResize);
  })




  return (
    <div className="App">
      <Header width={screenWidth} color={headerColor}/>
      <PollBox />
      <Console />
    </div>
  );
}

export default App;
