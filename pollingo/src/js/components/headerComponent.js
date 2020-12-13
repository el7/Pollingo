import React, {useState} from 'react';
import "../../css/main.css";

function Header({mycolor, width}) {

//    const [color, setColor] = useState("");
    console.log("here: " + mycolor);
    console.log("here: " + width);

    // temp test
    mycolor = "444444";
    mycolor = '"#' + mycolor + '"';
//    mycolor = "backgroundColor: " + mycolor;

    return (
        <div className="header" style={{backgroundColor: "#444"}}>
            <header>
                <h2>Pollingo.</h2>
                <h5>tell me something</h5>      
            </header>
            <span>cc: {mycolor}</span>
            <span>sw: {width}</span>
            <aside>
                User
            </aside>
        </div>
    )
}

export default Header
