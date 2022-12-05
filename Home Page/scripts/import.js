import navbar from "../components/navbar.js";
import sidebar from "../components/sidebar.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("mySidebar").innerHTML = sidebar();


//saving city name in local storage
document.getElementById('navdropcontent').addEventListener('change', function () {
  //console.log(this.value);
  localStorage.setItem('city', this.value)
  window.location.reload()
});

document.querySelector("#navsign").addEventListener("click", () => {
  window.location.href = "../BookMyShow/login-page/login.html"
})
document.querySelector("#navlogo").addEventListener("click", () => {
  window.location.href = "../../BookMyShow/index.html"
})

//place it inside login function
// localStorage.setItem('logged', 'no');
// localStorage.setItem('username', '');

// //if user has logged in, logged status would be changed
// var log = localStorage.getItem('logged');
// var username = localStorage.getItem('username');
// if (log === 'yes') {
//   console.log(log);
// } else {
//   document.getElementById('logout').style.display = "none";
//   document.getElementById('username').innerHTML = "Hey! " + username;
// }



var navData = JSON.parse(localStorage.getItem("loginData"));

navData.map(function (elem) {
  let result = document.querySelector("#navsign");
  result.innerText = elem.name;
  result.style.color = "black"
  result.style.background = "none"
  result.style.weight = "bold"
  result.style.border = "none"
  result.style.color = "white"
  result.style.fontSize = "15px"
  result.style.marginBottom = "14px"
  
  console.log(elem.name);
  let button = document.createElement("button");
  button.innerText = "Log Out"
  document.getElementById("myBtn2").append(button);
  button.setAttribute("id", "myDelete");

});

// 356356356

var modal = document.getElementById("myModal");

        var btn = document.getElementById("navsign");

        var span = document.getElementsByClassName("close")[0];


        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Get OTP

        let OtpGenerator = document.getElementById("nos")
        OtpGenerator.addEventListener('click', getOtp)

        function getOtp(e) {
            let numbers = document.getElementById("number").value;
            localStorage.setItem("Phone Number", numbers);
            console.log(numbers);
            window.location.href = "otp.html"
        }
// 737363



document.getElementById("myDelete").addEventListener('click', deleteItems)

function deleteItems() {
  localStorage.clear();
  location.reload();
}



//  side bar js

function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
