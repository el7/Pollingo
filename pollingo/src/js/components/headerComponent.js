import React, {useState, useRef } from 'react';
import debounce from 'lodash';
import "../../css/main.css";

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
        <div className="header-container" >
            <header>
                {/* <img src="/Pollingo/pollingo/src/images/pollingo_logo_s.PNG" />               */}
                <h3 className="pollingoLogo pollingoLogoSmall">P.</h3>
                <h3 className="pollingoLogo pollingoLogoMed">Pollingo.</h3>
            </header>
            <main></main>
            <aside>
                <ul>
                    <li>User</li>
                    <li>Contact</li>
                    <li>Polls</li>
                </ul>
            </aside>
        </div>
    )
}

export default Header
