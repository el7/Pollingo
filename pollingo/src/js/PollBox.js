import React from 'react';
import "../css/main.css";

function PollBox() {
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
                        <button onclick="showPanel(0,'#234456')">IRV</button>
                        <button onclick="showPanel(1,'#745346')">Approval</button>
                        <button onclick="showPanel(2,'#d34565')">RC</button>
                        <button onclick="showPanel(3,'#f45546')">STAR</button>                                                
                    </div>
                    <div class="tabPanel">Content</div>
                    <div class="tabPanel">Content</div>
                    <div class="tabPanel">Content</div>
                    <div class="tabPanel">Content</div>
                </div>                                                
            </footer>
        </div>
    )
}
<script src="PollBox_tabs.js"></script>
export default PollBox
