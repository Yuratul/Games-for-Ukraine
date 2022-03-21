var navBarCounter = 0;
var navBar = document.getElementById("navCollapse");

function CollapseNavBar() {
    if (navBarCounter % 2 === 1) {
        navBar.style.display = "none";
    }
    else {
        navBar.style.display = "block";
    }
    navBarCounter++;
}
