import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function PollBox() {

    function log(message) {
        console.log("-----------> " + message);
    }

    log("begin");

    const number_of_tabs = 4;

    const [tabSelected, setTabSelected] = useState(() => {
        // gets random number mod num of tabs
        var tab = (Math.floor((Math.random()*10000))%number_of_tabs);
        return tab;
    });

    //// use tabSelected number to set tab panel
    // var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
    // var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");


//    tabButtons.item(tabSelected).style.backgroundColor = "blue";
//    tabButtons.item(tabSelected).style.color = "black";

    //    function showPanel() {     

    function showPanel() {
        setTabSelected(1);
        var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
        var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");
        log(tabButtons.length);
        log("pressed");

        var tab = (Math.floor((Math.random()*10000))%number_of_tabs);

        log("tab: " + tab);
        
        // ReactDOM.render("<h1>new</h1>", document.getElementsByClassName("console"));

        tabButtons.forEach(function(node, index){
            if (index == tab) {
                node.style.color = "blue";
                node.style.backgroundColor = "blue";
            } else {
                node.style.color = "red";
                node.style.backgroundColor = "red";
            }
        })
    }

    return (
        <div className="pollbox-1 testC">
            <main>
                MAIN. Going to show the polling items and their results. {tabSelected}
            </main>
            <aside>
                ASIDE.
            </aside>
            <footer>
                <div className="tabContainer"> 
                    <div className="buttonContainer"> 
                        <button onClick={showPanel}>IRV</button>
                        <button onClick={showPanel}>Approval</button>
                        <button onClick={showPanel}>RC</button>
                        <button onClick={showPanel}>STAR</button>                                                
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