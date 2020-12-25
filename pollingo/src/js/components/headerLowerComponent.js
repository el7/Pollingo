import React, {useState} from 'react';
import "../../css/main.css";

//const debouncer = require("lodash");

function HeaderLower(props) {

    const [headerColor, setColor] = useState("444444");
    const [screenWidth, setScreenWidth] = useState("200"); 

    return (
        <div className="header-lower-container" >
            <span>(sports)</span>
            <span>(politics)</span>
            <span>(food)</span>            
        </div>
    )
}

export default HeaderLower
