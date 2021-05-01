import React from 'react';
import ToggleRankedVoting from './toggleRVButtonComponent';
import "../../css/main.css";

function Console() {
    return (
        <nav className="console">
            <h2 className="console-name">CONSOLE</h2>
            <ToggleRankedVoting />
        </nav>
    )
}

export default Console
