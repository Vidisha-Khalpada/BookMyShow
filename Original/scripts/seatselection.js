
for (let i = 0; i < 10; i++) {
    let maindiv = document.createElement("div");
    let span = document.createElement("span");
    let alfa = String.fromCharCode(65 + i);
    span.innerHTML = String.fromCharCode(65 + i);
    maindiv.setAttribute("class", alfa);
    for (let j = 0; j < 10; j++) {
        console.log("yes");
        let div = document.createElement("div");
        div.innerText = j+1;
        div.setAttribute("id", alfa+j);
        div.setAttribute("class", 'boxes');
        maindiv.append(div);
    }
    let box = document.createElement("div");
    box.setAttribute("class", "span");
    box.append(span, maindiv);
    document.getElementById("seat").append(box);
}

document.querySelectorAll('.boxes')
.forEach(div => {
    div.addEventListener('click', function() {
    console.log(this.id);
        change(this.id);
    })
})

const savedarr = JSON.parse(localStorage.getItem('selectedseats'));
if(savedarr===null){
    var empty =[]
    localStorage.setItem('selectedseats', JSON.stringify(empty));
    savedarr = empty;
}
var idarray = [
]
function change(id){
    document.getElementById('paydiv').style.display ='block';
    document.getElementById(id).style.backgroundColor = "#1ea83c";
    document.getElementById(id).style.color = "white";    
    idarray.push(id);
    var numofseats = idarray.length;
    document.getElementById('numofseats').innerText=numofseats;
    document.getElementById('topay').innerText="Pay Rs." +numofseats*100;
    localStorage.setItem('numofseats', numofseats);

}
if(savedarr!==null){
    savedarr.forEach(function(ele){
        document.getElementById(ele).style.backgroundColor = "#a5aba5";
        document.getElementById(ele).style.border.color = "";
        document.getElementById(ele).style.color = "white";
    })
}

function topay(){
    var arr3 = savedarr.concat(idarray);
    localStorage.setItem('selectedseats', JSON.stringify(arr3));
    console.log(arr3);
    window.location.href='./navbar.html';
}