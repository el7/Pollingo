import React, {useState} from 'react';
import "../../css/main.css";

function Header({color, width}) {

//    const [color, setColor] = useState("");
    console.log("here: " + color);
    console.log("here: " + width);

    // temp test
    color = "444444";
    color = "#" + color;

    return (
        <div className="header" style={{backgroundColor: {color}}}>
            <header>
                <h2>Pollingo.</h2>
                <h5>tell me something</h5>      
            </header>
            <span>cc: {color}</span>
            <span>sw: {width}</span>
            <aside>
                User
            </aside>
        </div>
    )
}

export default Header
