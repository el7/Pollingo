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

//      setColor(randomColor);

//      setScreenWidth(newWidth);
//      console.log("color: " + randomColor);
      
  }
    window.addEventListener('resize', handleResize);

    //    console.log("here: " + props.mycolor);
//    console.log("here: " + width);

    // temp test
//    mycolor = "444444";
//    mycolor = '"#' + mycolor + '"';
//    mycolor = "backgroundColor: " + mycolor;

    return (
        <div className="header-container" >
            <header>
                <h2>Pollingo.</h2>
                <h5>tell me something</h5>      
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
