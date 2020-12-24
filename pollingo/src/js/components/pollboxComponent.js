import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function PollBox(props) {

    // STATE DATA -----------------------------------
    const [tabSelected, setTabSelected] = useState();


    // FUNCTIONS -------------
    function showPanel(val) {
//        setTabSelected(1);
        var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
        var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");
       
        // ReactDOM.render("<h1>new</h1>", document.getElementsByClassName("console"));
        tabButtons.forEach(function(node, index){
            if (index == val) {
                node.style.color = "#ffffff";
                node.style.backgroundColor = "#5c0236";
            } else {
                 node.style.color = "#ddc5d3";
                 node.style.backgroundColor = "#30021c";
            }
        })
    }

    // JSX RETURN ------------------------
    return (
        <div className="pollbox-1 testC">
            <main>
                <span class="span-pollbox-question">{props.q}</span>
            </main>
            {/* <aside>
                ASIDE.
            </aside> */}
            <footer>
                <div className="tabContainer"> 
                    <div className="buttonContainer"> 
                        <button onClick={() => showPanel('0')}>IRV</button>
                        <button onClick={() => showPanel('1')}>Approval</button>
                        <button onClick={() => showPanel('2')}>RC</button>
                        <button onClick={() => showPanel('3')}>STAR</button>                                                
                    </div>
                    <div className="tabPanel tabPanel1">
                        Buttons IRV
                        <ol><li>
                        <span class="span-pollbox-answer">{props.a1} </span>
                        </li>
                        <li>
                        <span class="span-pollbox-answer">{props.a2} </span>
                        </li><li>
                        <span class="span-pollbox-answer">{props.a3} </span>
                        </li><li>
                        <span class="span-pollbox-answer">{props.a4} </span>
                        </li>
                        </ol>
                    </div>
                    <div className="tabPanel tabPanel2">Buttons Approval</div>
                    <div className="tabPanel tabPanel3">Buttons RC</div>
                    <div className="tabPanel tabPanel4">Buttons STAR</div>
                </div>                                                
            </footer>
        </div>
    )
}

export default PollBox
