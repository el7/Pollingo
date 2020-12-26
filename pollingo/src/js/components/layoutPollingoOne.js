import React, {useState} from 'react';
import Header from './headerComponent';
import HeaderLower from './headerLowerComponent';
import PollBox from './pollboxComponent';
import Console from './consoleComponent';
import Separator from './separatorComponent';
import "../../css/main.css";

function LayoutOne() {

    const [question1, setQuestion1setScreenWidth] = useState("200");

    // function that generates polling questions    
    const q1 = "Which fast food would you eat forever?";
    const q1_a1 = "Taco Bell";
    const q1_a2 = "Chic Fillet";
    const q1_a3 = "In-N-Out";
    const q1_a4 = "Panda Express";

    const t1 = "sports";
    const t2 = "politics";
    const t3 = "food";

    return (
        <div className="layoutOne grid-main-container">
            <div className="grid-item grid-main-item-header">
                <Header/>
                <HeaderLower tag1={t1} tag2={t2} tag3={t3}/>
            </div>
            <div className="grid-item grid-main-item-main grid-main">
                <PollBox q={q1} a1={q1_a1} a2={q1_a2} a3={q1_a3} a4={q1_a4}/>
                <Separator t="➽─────❥"/>
                {/* <PollBox q="Which is your favorite vehicle brand?" a1="Tesla" a2="Subaru" a3="Ford" a4="Volkswagon"/>
                <Separator t="➽─────❥"/>
                <PollBox q="What is your favorite movie?" a1="Terminator 2: Judgement Day" a2="Star Wars: Episode V - The Empire Strikes Back" a3="Oh Brother, Where Art Thou" a4="The Big Lebowski"/>                
                <Separator t="➽─────❥"/>
                <PollBox q="What is your favorite movie?" a1="Terminator 2: Judgement Day" a2="Star Wars: Episode V - The Empire Strikes Back" a3="Oh Brother, Where Art Thou" a4="The Big Lebowski"/>                
                <Separator t="➽─────❥"/>
                <PollBox q="What is your favorite movie?" a1="Terminator 2: Judgement Day" a2="Star Wars: Episode V - The Empire Strikes Back" a3="Oh Brother, Where Art Thou" a4="The Big Lebowski"/>                
                <Separator t="➽─────❥"/>
                <PollBox q="What is your favorite movie?" a1="Terminator 2: Judgement Day" a2="Star Wars: Episode V - The Empire Strikes Back" a3="Oh Brother, Where Art Thou" a4="The Big Lebowski"/>                 */}
            </div>
            <div className="grid-item grid-main-item-footer">
                <Console />
            </div>
        </div>
    )
}

export default LayoutOne;

