import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";

function PollBox(props) {

    let pollboxClassMap = new Map();
    pollboxClassMap.set('irv', 'pollTypeIRV')
    .set('app', 'pollTypeApp')
    .set('rc', 'pollTypeRC')
    .set('star', 'pollTypeSTAR');

    var initialTabSelected = 0;
    var initialPollType = "IRV";
    var initialPollTypeClass = "pollTypeIRV";
    var initialPollInputType = "checkbox";
    var initialPollInputName1 = "pbInputName1";
    var initialPollInputName2 = "pbInputName1";
    var initialPollInputName3 = "pbInputName1";
    var initialPollInputName4 = "pbInputName1";
    
    // STATE DATA -----------------------------------
    const [tabSelected, setTabSelected] = useState(initialTabSelected);
    const [pollType, setPollType] = useState(initialPollType);
    const [pollTypeClass, setPollTypeClass] = useState(initialPollTypeClass);
    const [pollInputType, setPollInputType] = useState(initialPollInputType);
    const [pollInputName1, setPollInputName1] = useState(initialPollInputName1);
    const [pollInputName2, setPollInputName2] = useState(initialPollInputName2);
    const [pollInputName3, setPollInputName3] = useState(initialPollInputName3);
    const [pollInputName4, setPollInputName4] = useState(initialPollInputName4);

    var experiment1 = '<input type="checkbox" name="pbInputName1" value="tb"></input>';
    var experiment2 = '<input type= name="pbInputName1" value="tb"></input>';

    // FUNCTIONS -------------
    function showPanel(val) {
//        setTabSelected(1);
        var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
        var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");
        var inputItems = document.querySelectorAll("." + pollInputType);

        var tabNumber = 0;
        var newClass = "";

        switch (val) {
            case "irv":
                    tabNumber = 0;
                    newClass = "pollTypeIRV";
                    console.log('it does work!');

                    inputItems.forEach(function(node, index){
                        console.log("node: ");
                        node.checked = false;
                    });

                    setPollInputType("checkbox");
                    setPollInputName1("pbInputName1");             
                    setPollInputName2("pbInputName1");
                    setPollInputName3("pbInputName1");
                    setPollInputName4("pbInputName1");                                                            
                    break;
            case "app":

                    inputItems.forEach(function(node, index){
                        node.checked = false;
                        console.log("node: ");                        
                    });

                    tabNumber = 1;                    
                    newClass = "pollTypeApproval";
                    setPollInputType("radio");                   
                    setPollInputName1("pbInputName1");
                    setPollInputName2("pbInputName2");
                    setPollInputName3("pbInputName3");
                    setPollInputName4("pbInputName4");                    
                    break;
            case "rc":

                inputItems.forEach(function(node, index){
                    node.checked = false;
                    console.log("node: ");                    
                });
            
                    tabNumber = 2;
                    newClass = "pollTypeRC";
                    setPollInputType("radio");
                    setPollInputName1("pbInputName1");
                    setPollInputName2("pbInputName2");
                    setPollInputName3("pbInputName3");
                    setPollInputName4("pbInputName4");                    
                    break;                                        
            case "star":

                inputItems.forEach(function(node, index){
                    node.checked = false;
                    console.log("node: ");                    
                });

                    tabNumber = 3;                
                    newClass = "pollTypeSTAR";
                    setPollInputType("checkbox");                    
                    setPollInputName1("pbInputName1");             
                    setPollInputName2("pbInputName1");
                    setPollInputName3("pbInputName1");
                    setPollInputName4("pbInputName1");                    
                    break;
        }

        // ReactDOM.render("<h1>new</h1>", document.getElementsByClassName("console"));
        tabButtons.forEach(function(node, index){
            if (index === tabNumber) {
                // selected
                node.style.color = "#ffffff";
                node.style.backgroundColor = "#5c0236";
                setTabSelected(tabNumber);
                setPollTypeClass(newClass);

//            } else if (val) {              
            } else {
                 // not selected
                 node.style.color = "#ddc5d3";
                 node.style.backgroundColor = "#30021c";
            }
        })
    }

    var pollTypes = ["IRV", "Approval", "RC", "STAR"];

    var inputClassToggle = "formOff";

    // JSX RETURN ------------------------
    return (
        <div className="pollbox-1 testC"> 
            <main>
                <span className="span-pollbox-question">{props.q}</span>
            </main>
            {/* <aside>ASIDE.</aside> */}
            <footer>
                <div className="tabContainer"> 
                    <div className="buttonContainer"> 
                        <button onClick={() => showPanel('irv')}>IRV</button>
                        <button onClick={() => showPanel('app')}>Approval</button>
                        <button onClick={() => showPanel('rc')}>RC</button>
                        <button onClick={() => showPanel('star')}>STAR</button>
                    </div>
                    <div className="tabPanel tabPanel1">

                        <span>{pollTypes[tabSelected]}</span>

                        <br />
                        <form className={pollTypeClass}>
                            <input type={pollInputType} name={pollInputName1} value="tb"></input>
                            <label className={pollTypeClass} for={pollInputName1}>{props.a1}</label><br />
                            <input type={pollInputType} name={pollInputName2} value="tb"></input>
                            <label className={pollTypeClass} for={pollInputName2}>{props.a2}</label><br />
                            <input type={pollInputType} name={pollInputName3} value="tb"></input>
                            <label className={pollTypeClass} for={pollInputName3}>{props.a3}</label><br />
                            <input type={pollInputType} name={pollInputName4} value="tb"></input>
                            <label className={pollTypeClass} for={pollInputName4}>{props.a4}</label><br />
                        </form>

                    </div>
                    {/* <div className="tabPanel tabPanel2">Buttons Approval</div>
                    <div className="tabPanel tabPanel3">Buttons RC</div>
                    <div className="tabPanel tabPanel4">Buttons STAR</div> */}
                </div>                                                
            </footer>
        </div>
    )
}

export default PollBox
