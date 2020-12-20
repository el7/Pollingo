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
                <PollBox q="this is the question" a1="a1" a2="a2" a3="a3" a4="a4"/>
            </div>
            <div className="grid-item grid-main-item-footer">
                <Console />                
            </div>           
        </div>
    )
}

export default LayoutOne;

