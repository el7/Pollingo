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

    // STATE DATA -----------------------------------
    const [tabSelected, setTabSelected] = useState(initialTabSelected);
    const [pollType, setPollType] = useState(initialPollType);
    const [pollTypeClass, setPollTypeClass] = useState(initialPollTypeClass);
    const [pollInputType, setPollInputType] = useState(initialPollInputType);

    // FUNCTIONS -------------
    function showPanel(val) {
//        setTabSelected(1);
        var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
        var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

        var newClass = "";

        switch (val) {
            case "irv":
                    newClass = "pollTypeIRV";
                    console.log('it does work!');
                    setPollInputType("checkbox");
                    break;
            case "app":
                    newClass = "pollTypeApproval";
                    setPollInputType("radio");
                    break;
            case "rc":
                    newClass = "pollTypeRC";
                    setPollInputType("radio");                    
                    break;                                        
            case "star":
                    newClass = "pollTypeSTAR";
                    setPollInputType("checkbox");                    
                    break;
        }

        // ReactDOM.render("<h1>new</h1>", document.getElementsByClassName("console"));
        tabButtons.forEach(function(node, index){
            if (index == val) {
                // selected
                node.style.color = "#ffffff";
                node.style.backgroundColor = "#5c0236";
                setTabSelected(val);
                setPollTypeClass(newClass);
            } else if (val) {
                
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
                            <input type={pollInputType} name="cb1" value="tb"></input>
                            <label className={pollTypeClass} for="cb1">{props.a1}</label><br />
                            <input type={pollInputType} name="cb2" value="tb"></input>
                            <label className={pollTypeClass} for="cb2">{props.a2}</label><br />
                            <input type={pollInputType} name="cb3" value="tb"></input>
                            <label className={pollTypeClass} for="cb3">{props.a3}</label><br />
                            <input type={pollInputType} name="cb4" value="tb"></input>
                        <label className={pollTypeClass} for="cb4">{props.a4}</label><br />
                        </form>
                        {/* <form className={pollTypeClass}>
                            <input type="radio" name="radio1" value="tb"></input>
                            <label className={pollTypeClass} for="cb1">{props.a1}</label><br />
                            <input type="radio" name="radio1" value="tb"></input>
                            <label className={pollTypeClass} for="cb2">{props.a2}</label><br />
                            <input type="radio" name="radio1" value="tb"></input>
                            <label className={pollTypeClass} for="cb3">{props.a3}</label><br />
                            <input type="radio" name="radio1" value="tb"></input>
                            <label className={pollTypeClass} for="cb4">{props.a4}</label><br />
                        </form> */}

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
