import React from 'react';
import "../css/main.css";

function ToggleRankedVoting() {

    function toggleRankedVotingFunc() {
        console.warn("pressed2");        
    }

    return (
        <div className="">
            <button onClick={toggleRankedVotingFunc()}>Toggle RV</button>
        </div>
    )
}

export default ToggleRankedVoting
