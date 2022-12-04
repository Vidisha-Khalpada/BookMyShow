import navbar from "../components/navbar.js";
import sidebar from "../components/sidebar.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("mySidebar").innerHTML = sidebar();

function openNav() {
    console.log("yes");
    document.getElementById("mySidebar").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
