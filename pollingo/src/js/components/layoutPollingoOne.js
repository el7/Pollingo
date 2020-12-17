import React from 'react';
import Header from './headerComponent';
import PollBox from './pollboxComponent';
import Console from './consoleComponent';
import "../../css/main.css";

function LayoutOne() {
    return (
        <div className="layoutOne grid-main-container">

            <div className="grid-item grid-main-item-header">
                <Header/>
            </div>

            <div className="grid-item grid-main-item-main">
            {/* <PollBox />
            <Console /> */}
            </div>
            <div className="grid-item grid-main-item-footer">
            </div> 
          
        </div>
    )
}

export default LayoutOne;

