import React, {useState} from 'react';
import "../../css/main.css";

//const debouncer = require("lodash");

function HeaderLower(props) {

    const [headerColor, setColor] = useState("444444");
    const [screenWidth, setScreenWidth] = useState("200"); 

    return (
        <div className="header-lower-container" >
            <span className="header-flex-item">{props.tag1}</span>
            <span className="header-flex-item">{props.tag2}</span>
            <span className="header-flex-item">{props.tag3}</span>            
            <button className="button-unselected">unselected</button>
            <button className="button-selected">selected</button>            
        </div>
    )
}

export default HeaderLower
