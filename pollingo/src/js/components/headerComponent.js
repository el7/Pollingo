import React, {useState} from 'react';
import "../../css/main.css";

function Header() {

    const [color, setColor] = useState("#444444");

    return (
        <div className="header" style={{backgroundColor: "#5efc46"}}>
            <header>
                <h2>Pollingo.</h2>
                <h5>tell me something</h5>      
            </header>
            <aside>
                User
            </aside>
        </div>
    )
}

export default Header
