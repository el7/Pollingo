import React, {useState} from 'react';
import "../../css/main.css";

function Header(props) {

//    const [color, setColor] = useState("");
    console.log("here: " + props.mycolor);
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
            mycolor: {props.mycolor}
            <aside>
                User
            </aside>
        </div>
    )
}

export default Header
