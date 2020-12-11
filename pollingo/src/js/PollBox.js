import React, {useState, useEffect} from 'react';
import "../css/main.css";

function PollBox() {
    console.warn("help");

    const [tabSelected, setTabSelected] = useState(1);

    //    function showPanel() {    
    function showPanel() {
      
        setTabSelected(1);

        var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
        var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

        console.warn(tabButtons.length);    
        console.warn("pressed");
    
        tabButtons.forEach(function(node){
            switch (tabSelected) {
                case 1: 
                    node.style.backgroundColor = "red";
                    node.style.color = "white";                    
                    break;
                case 2: 
                    node.style.backgroundColor = "white";
                    node.style.color = "green";                    
                    break;               
                default:
                    break;
            }
        })
    }

    return (
        <div className="pollbox-1">
            <main>
                MAIN. Going to show the polling items and their results. {tabSelected}
            </main>
            <aside>
                ASIDE. Polling types go here. 
            </aside>
            <footer>
                <div className="tabContainer"> 
                    <div className="buttonContainer"> 
                        <button onClick={showPanel}>IRV</button>
                        <button onClick={showPanel}>Approval</button>
                        <button onClick={showPanel}>RC</button>
                        <button onClick={showPanel}>STAR</button>                                                
                    </div>
                    <div className="tabPanel">Content</div>
                    <div className="tabPanel">Content</div>
                    <div className="tabPanel">Content</div>
                    <div className="tabPanel">Content</div>
                </div>                                                
            </footer>
        </div>
    )
}

export default PollBox
