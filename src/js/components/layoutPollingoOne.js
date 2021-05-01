// React components
import React from 'react';
import Header from './headerComponent';
import PollBox from './pollboxComponent';
import Console from './consoleComponent';
import Separator from './separatorComponent';
import ResultBox from './resultsComponent';

// CSS
import "../../css/main.css";

function LayoutOne() {

    // function that generates polling questions    
    const q1 = "What is the best movie ever?";
    const q1_a1 = "The Matrix";
    const q1_a2 = "V For Vendetta";
    const q1_a3 = "The Big Lebowski";
    const q1_a4 = "Tron";

    const separator_text = "➽─────❥";

    return (
        <div className="layoutOne grid-main-container">
            <div className="grid-item grid-main-item-header">
                <Header/>
            </div>
            <div className="grid-item grid-main-item-main grid-main">
                <ResultBox />
                <PollBox q={q1} a1={q1_a1} a2={q1_a2} a3={q1_a3} a4={q1_a4}/>
                <Separator t={separator_text}/>
            </div>
            <div className="grid-item grid-main-item-footer">
                <Console />
            </div>
        </div>
    )
}

export default LayoutOne;

