import React from 'react';
import "../css/PollBox.css";

function PollBox() {
    return (
        <div className="pollbox-1">
            <header>HEADER</header>
            <nav>NAV</nav>
            <main>
                MAIN. Going to show the polling items and their results. 
            </main>
            <aside>
                ASIDE
                These are the selections. 
                Circle selector for single.
                Square selector for multiple.
            </aside>
            <footer>FOOTER. Not sure what can go here.</footer>
        </div>
    )
}

export default PollBox
