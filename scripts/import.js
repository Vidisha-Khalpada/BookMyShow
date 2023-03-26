import navbar from "../components/navbar.js";
import sidebar from "../components/sidebar.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("mySidebar").innerHTML = sidebar();


//saving city name in local storage
document.getElementById('navdropcontent').addEventListener('change', function () {
  console.log(this.value);
  localStorage.setItem('city', this.value)
});


//place it inside login function
//localStorage.setItem('logged', 'no');
//localStorage.setItem('username', '');

// if user has logged in, logged status would be changed
var log = localStorage.getItem('logged');
var username = localStorage.getItem('username');
if (log === 'yes') {
  console.log(log);
} else {
  document.getElementById('logout').style.display = "none";
  document.getElementById('username').innerHTML = "Hey! " + username;
}


function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}