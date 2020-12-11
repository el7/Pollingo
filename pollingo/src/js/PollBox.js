import React from 'react';
import "../css/main.css";
import "../js/PollBox_tabs";

function PollBox() {
    console.warn("help");

//    function showPanel() {    
    function showPanel(panelIndex, colorCode) {

        var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
        var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

        console.warn(tabButtons.length);

        
        console.warn("pressed");
        tabButtons[0].style.backgroundColor="black";
        tabButtons[0].style.color=colorCode;        
        tabButtons[1].style.backgroundColor=colorCode;
        tabButtons[1].style.color="white";        
        
        

/*        
        tabButtons.forEach(function(node){
            node.style.backgroundColor = "";
            node.style.color = "";
        });
    
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
                MAIN. Going to show the polling items and their results. 
            </main>
            <aside>
                ASIDE. Polling types go here. 
            </aside>
            <footer>
                <div class="tabContainer"> 
                    <div class="buttonContainer"> 
                        <button onClick={showPanel(1,'#745346')}>IRV</button>
                        <button onClick={showPanel(1,'#745346')}>Approval</button>
                        <button onClick={showPanel(2,'#d34565')}>RC</button>
                        <button onClick={showPanel(3,'#f45546')}>STAR</button>                                                
                    </div>
                    <div class="tabPanel">Content</div>
                    <div class="tabPanel">Content</div>
                    <div class="tabPanel">Content</div>
                    <div class="tabPanel">Content</div>
                </div>                                                
            </footer>
            <script src="PollBox_tabs.js"></script>            
        </div>
    )
}

export default PollBox
