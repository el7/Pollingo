import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function ResultBox(props) {

    // trade current poll data here
    

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
