import React from 'react';
import ToggleRankedVoting from './toggleRVButtonComponent';
import "../../css/main.css";

function Console() {
    return (
        <nav className="console">
            <h2 className="console-name">CONSOLE SHT</h2>
            <p className="console-desc">Welcome to the console yo.</p>
            <ToggleRankedVoting />
        </nav>
    )
}

export default Console

