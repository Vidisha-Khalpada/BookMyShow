
function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}


//dummy function
function login(){
  console.log("logged in");
  localStorage.setItem('username', 'Luc');
  document.getElementById('logout').style.display = "block";
}
//dummy funciton to logout
function logout() {
    console.log("logged out");
    localStorage.setItem('logged', 'no');
    localStorage.setItem('username', '');
    document.getElementById('navsign').style.display = "block";
    document.getElementById('logout').style.display = "none";
  }