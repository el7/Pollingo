import React from 'react';
import ToggleRankedVoting from './ToggleRankedVoting';
import "./Console.css";

function Console() {
    return (
        <div className="console">
            <h2 class="console-name">CONSOLE SHT</h2>
            <p class="console-desc">Welcome to the console yo.</p>
            <br></br>
            <ToggleRankedVoting />
        </div>
    )
}

export default Console
