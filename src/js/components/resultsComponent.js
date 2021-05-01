import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function ResultBox() {
    return (
        <div className="resultbox-container">
        <div className="resultbox-graph-container">
            <p>This is where the results go for the currenly selected poll. </p>
            <p>React will change graph based on current state data.</p>
        </div></div>
    )
}

export default ResultBox;
