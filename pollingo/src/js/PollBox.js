import React, {useState, useEffect} from 'react';
import "../css/main.css";

function PollBox() {
    console.warn("help");


    const [tabSelected, setTabSelected] = useState(() => {

        return 1;
        
    })

    const selectTab = () => {
        return tabSelected ? {} : { marginLeft: 19999 }
    }

    const tabClicked = () => {
        setTabSelected(!tabSelected)
    }

    useEffect(() => {

    })


    //    function showPanel() {    
    function showPanel(panelIndex, colorCode) {

        setTabSelected(prevTab => ((prevTab+1)%4));
        

        var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
        var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

        console.warn(tabButtons.length);    
        console.warn("pressed");
    
        tabButtons.forEach(function(node){
            node.style.backgroundColor = "red";
            node.style.color = "white";
        });
    
/*        
        tabButtons[panelIndex].style.backgroundColor=colorCode;
        tabButtons[panelIndex].style.color="blue";
 
        tabPanels.forEach(function(node){
            node.style.display = "none";
        });
   
        tabButtons[panelIndex].style.display = "block";
        tabButtons[panelIndex].style.backgroundColor = colorCode;
*/

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
