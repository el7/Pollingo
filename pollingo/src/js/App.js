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


/***************************
 *       DATA CONNECTION
***************************/

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


  


