import React, {useState} from 'react';
import "../../css/main.css";

function Header({color}) {

//    const [color, setColor] = useState("");
    console.log("here: " + color);

    return (
        <div className="header" style={{backgroundColor: "#5efc46"}}>
            <header>
                <h2>Pollingo.</h2>
                <h5>tell me something</h5>      
            </header>
            <span>cc: {color}</span>
            
            <aside>
                User
            </aside>
        </div>
    )
}

export default Header
