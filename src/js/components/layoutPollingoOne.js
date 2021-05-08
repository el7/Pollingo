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


    // todo:collect this from db
    const pollData = {
        question: "What is the best movie ever?",
        answer1: "The Matrix",
        answer2: "V For Vendetta",
        answer3: "The Big Lebowski",
        answer4: "Tron",
        value1: 123,
        value2: 234,        
        value3: 345,
        value4: 456,
    }

    const separator_text = "➽─────❥";

    return (
        <div className="layoutOne grid-main-container">
            <div className="grid-item grid-main-item-header">
                <Header/>
            </div>
            <div className="grid-item grid-main-item-main grid-main">
                <ResultBox pd={pollData} />
                <PollBox pd={pollData} />
                <Separator t={separator_text}/>
            </div>
            <div className="grid-item grid-main-item-footer">
                {/*<Console />*/}
            </div>
        </div>
    )
}

export default LayoutOne;

