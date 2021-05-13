import React, {useState, useRef } from 'react';
import debounce from 'lodash';
import "../../css/main.css";
import {BrowserRouter as Router, Route } from "react-router-dom";

//const debouncer = require("lodash");

function Header(props) {


    const [headerColor, setColor] = useState("444444");
    const [screenWidth, setScreenWidth] = useState("200"); 
    
    function handleResize() {
      // makes random color hex value
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      // gets current width
      var windowCombinedSize = (window.innerWidth + window.innerHeight);
      
  }
  window.addEventListener('resize', handleResize);

//    console.log("here: " + props.mycolor);
//    console.log("here: " + width);
//    temp test
//    mycolor = "444444";
//    mycolor = '"#' + mycolor + '"';
//    mycolor = "backgroundColor: " + mycolor;

  var loc = window.location.pathname;
  var dir = loc.substring(0, loc.lastIndexOf('/'));
  console.log("dir: " + loc + dir);

  return (
      <Router>
        <div className="header-container">
            <div className="header-fb-item header-home">
                <h3 className="pollingoLogo pollingoLogoSmall">P</h3>
                <h3 className="pollingoLogo pollingoLogoMed">Pollingo</h3>
            </div>
            <div className="header-fb-item header-new">
            <h3>Create New</h3>                
            </div>            
            <div className="header-fb-item header-all">
                <h3>View All</h3>                
            </div>
        </div>
        </Router>
    )
}

export default Header
