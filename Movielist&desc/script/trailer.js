//import movieslist from "../db.json" assert{type:'json'};
let fetchdata=async()=>
    {
        let res=await fetch(`https://mock-server-app-6y5e.onrender.com/Moviedesc`)
        let moviedesc=await res.json()
        displaytrailer(moviedesc)
    }
    fetchdata()
let displaytrailer=(data)=>
{
    let name=localStorage.getItem("moviedesc")
    data=data.filter((ele)=>
    {
        return ele.title==name
    })
    console.log(data[0].Trailers)
    document.querySelector("#trailer").innerHTML=""
    let title=document.createElement("h1")
    title.innerHTML="Videos for "+data[0].title
    document.querySelector("#trailer").append(title)
    data[0].Trailers.forEach((ele)=>
    {
        let div=document.createElement("div")
        let iframe=document.createElement("iframe")
        
        iframe.src=`https://www.youtube.com/embed/${ele}`
        iframe.setAttribute("id","iframe")
        div.append(iframe)
        document.querySelector("#trailer").append(div)
    })
}