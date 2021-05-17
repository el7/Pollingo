import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function ResultBox(props) {
    // trade current poll data here


/*
        this.state = {
            question: "This is the state question",
            answer1: "state answer 1",
            answer1_score: 123,
            answer2: "state answer 2",
            answer2_score: 234,
            answer3: "state answer 3",
            answer3_score: 345,
            answer4: "state answer 4",
            answer4_score: 456
        }
*/

    

    return (
        <div className="resultbox-container">
            <div className="resultbox-graph-container">
                <p><u>Question:</u></p>
                <p>{props.pd.question}</p>
                <p><u>Results</u></p>
                <p>{props.pd.answer1}: {props.pd.value1}</p>
                <p>{props.pd.answer2}: {props.pd.value2}</p>
                <p>{props.pd.answer3}: {props.pd.value3}</p>
                <p>{props.pd.answer4}: {props.pd.value4}</p>               
                <p>~~~~~~~~~</p>

            </div>
            <p>This is the outer-area, not sure what will go here.</p>
        </div>
    )
}

export default ResultBox;
