import React, {useState, setState, useEffect} from "react";
// import '../css/main.css';
import LayoutOne from './components/layoutPollingoOne';
// ---
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//import mongoose from 'mongoose';
// const express = require("express");
// const app = express();


/*
mongoose.connect(
  `mongodb+srv://dbBergmank:${process.env.MONGO_ATLAS_PW}@cluster0.ssk8u.mongodb.net/<dbname>?retryWrites=true&w=majority`, 
{
  useMongoClient: true
});
*/


/***********************
 *     COMPONENT
 *********************/
function App() {

/********************************
 *     COMPONENT FUNCTIONS
 *******************************/

  // function setColor() {
  //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
  //   console.log("color: " + randomColor);
  // }

// function setScreenWidth() {
//   const mediaMatch = window.matchMedia('(min-width: 500)');
// }



/************************************
 *     COMPONENT JSX RETURN
 **********************************/
  return (
    <div className="App">
      <LayoutOne />
    </div>
  );
}

export default App;


  


