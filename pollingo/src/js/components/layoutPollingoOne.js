import React from 'react';
import Header from './headerComponent';
import PollBox from './pollboxComponent';
import Console from './consoleComponent';
import "../../css/main.css";

function LayoutOne() {
    return (
        <div className="layoutOne">
            <Header/>
            <PollBox />
            <Console />
        </div>
    )
}

export default LayoutOne;

