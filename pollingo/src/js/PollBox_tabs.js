var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode) {

    alert("pressed");

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
}