import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";
import {polls} from "../../datastore/polls";

function PollList(props) {

    return (
        <div className="stock-container">
        {polls.map((data, key) => {
          return (
            <div key={key}>
              {data.question +
                " , " +
                data.choices[2].label}
            </div>
          );
        })}
      </div>
    )
}

export default PollList;
