import React from 'react';
import Header from './headerComponent';
import PollBox from './pollboxComponent';
import Console from './consoleComponent';
import Seperator from './seperatorComponent';
import "../../css/main.css";

function LayoutOne() {





    return (
        <div className="layoutOne grid-main-container">
            <div className="grid-item grid-main-item-header">
                <Header/>
            </div>
            <div className="grid-item grid-main-item-main">
                <PollBox q="Which fast food would you eat forever?" a1="Taco Bell" a2="Chic Fillet" a3="In-N-Out" a4="Panda Express"/>
                <Seperator />
                <PollBox q="Which is your favorite vehicle brand?" a1="Tesla" a2="Subaru" a3="Ford" a4="Volkswagon"/>
                <Seperator />                
                <PollBox q="What is your favorite movie?" a1="Terminator 2: Judgement Day" a2="Star Wars: Episode V - The Empire Strikes Back" a3="Oh Brother, Where Art Thou" a4="The Big Lebowski"/>                
            </div>
            <div className="grid-item grid-main-item-footer">
                <Console />                
            </div>           
        </div>
    )
}

export default LayoutOne;

