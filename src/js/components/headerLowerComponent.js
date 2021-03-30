import React, {useState} from 'react';
import "../../css/main.css";

//const debouncer = require("lodash");

function HeaderLower(props) {

    const [tagSelected, selectTag] = useState(0);

    return (
        <div className="header-lower-container" >
            <button className="button button-selected">New</button>
            <button className="button button-unselected">Hot</button>
            <button className="button button-unselected">Top</button>
            <span> | </span>
            <button className="button button-selected">All</button>
            <button className="button button-unselected">Sports</button>
            <button className="button button-unselected">Food</button>                        
            <button className="button button-unselected">Politics</button>            
        </div>
    )
}

export default HeaderLower
