import React, {useState, setState, useEffect} from "react";
// import '../css/main.css';
import LayoutOne from './components/layoutPollingoOne';
import 'bootstrap/dist/css/bootstrap.min.css';
// router
import {BrowserRouter as Router, Route } from "react-router-dom";
// components
import PollList from "./components/pollListComponent";
import Navbar from "./components/navbarComponent";

// ---------------------------------

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
  return (
/*
    <div className="App">
      <LayoutOne />
    </div>
  );
 }
*/
<Router>
  <div className="container">
  <Navbar />
  <br/>
 <Route path="/" exact component={PollList} />
 </div>
</Router>
  );
}
export default App;


  


