import React, {useState} from 'react';
import "../../css/main.css";

function Header(props) {

    const [headerColor, setColor] = useState("444444");
    const [screenWidth, setScreenWidth] = useState("200"); 

    function handleResize() {

      // makes random color hex value
      var randomColor = Math.floor(Math.random()*16777215).toString(16);

      // gets current width
//      var newWidth = window.innerWidth;
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight, 'c: ', randomColor);

      var windowSize = (window.innerWidth + window.innerHeight);
      
      console.log(windowSize);
     
      if (windowSize <= 500)
        setColor("smallcolor");
      else if (windowSize <= 1000)
        setColor("medcolor");
      else if (windowSize <= 1500)
        setColor("bigcolor");
      else if (windowSize <= 2000)
        setColor("largecolor");

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
        <div className="header" >
            <header>
                <h2>Pollingo.</h2>
                <h5>tell me something</h5>      
            </header>
            c: {props.mycolor}
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
