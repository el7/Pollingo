import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function ResultBox() {

    /* Need code to get poll data from Mongodb 
        - question
        - selection text 1, 2, 3, 4
        - selection values 1, 2, 3, 4
    */



    return (
        <div className="resultbox-container">
            <div className="resultbox-graph-container">

                <p>~~~~~<br></br>This is where the results go for the currenly selected poll. </p>
            </div>
            <p>This is the outer-area, not sure what will go here.</p>
        </div>
    )
}

export default ResultBox;
