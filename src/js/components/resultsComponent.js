import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function ResultBox() {
    return (
        <div className="resultbox-container">
        <div className="resultbox-graph-container">
            <p>This is where the results go for the currenly selected poll. </p>
        </div>
            <p>This is the outer-area, not sure what will go here.</p>
        </div>
    )
}

export default ResultBox;
