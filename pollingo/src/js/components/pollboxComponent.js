import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function PollBox() {

    function log(message) {
        console.log("-----------> " + message);
    }

    const number_of_tabs = 4;

    const [tabSelected, setTabSelected] = useState(() => {
        // gets random number mod num of tabs

        var tab = (Math.floor((Math.random()*10000))%number_of_tabs);
        return tab;
    });

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

    return (
        <div className="pollbox-1 testC">
            <main>
                <span>This is one of the questions.</span>
                <span>1. Answer one{"/n"}</span>
                <span>2. Answer two{"/n"}</span>
                <span>3. Answer three{"/n"}</span>
                <span>4. Answer four{"/n"}</span>
                (tab selected: {tabSelected})
            </main>
            <aside>
                ASIDE.
            </aside>
            <footer>
                <div className="tabContainer"> 
                    <div className="buttonContainer"> 
                        <button onClick={() => showPanel('0')}>IRV</button>
                        <button onClick={() => showPanel('1')}>Approval</button>
                        <button onClick={() => showPanel('2')}>RC</button>
                        <button onClick={() => showPanel('3')}>STAR</button>                                                
                    </div>
                    <div className="tabPanel">Content1</div>
                    <div className="tabPanel">Content2</div>
                    <div className="tabPanel">Content3</div>
                    <div className="tabPanel">Content4</div>
                </div>                                                
            </footer>
        </div>
    )
}

export default PollBox
