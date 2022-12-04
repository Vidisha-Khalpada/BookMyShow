
function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}


//dummy function
function login() {
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

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

async function search() {
  try {
    var input = document.getElementById('navinput').value;
      var res = await fetch(`https://api.themoviedb.org/3/search/company?api_key=08c08b24d43c025f18dac3d25f401a35&query=${input}&page=1`);
      var data = await res.json();

      data.results.forEach(element => { 
        //append data wherever you want
        console.log(element.name);
      });
  } catch (error) { 
      console.log(error)
  }
}

const processChange = debounce(() => search());