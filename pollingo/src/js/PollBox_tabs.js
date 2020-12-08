const tags = document.querySelectorAll('[data-tab-target]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targer = document.querySelector(tab.dataset.tabTarget)
        target.classList.add('act')

    })
})


/*
var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color = "";
    });

    alert("pressed");

    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="blue";

    tabPanels.forEach(function(node){
        node.style.display = "none";
    });

    tabButtons[panelIndex].style.display = "block";
    tabButtons[panelIndex].style.backgroundColor = colorCode;
}
*/
