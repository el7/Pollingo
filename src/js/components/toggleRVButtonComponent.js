import React from 'react';
import "../../css/main.css";

function ToggleRankedVoting() {

    function setColor() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log("color: " + randomColor);
    }

    return (
        <div className="">
            <button onClick={setColor}>Toggle RV</button>
        </div>
    )
}

export default ToggleRankedVoting
