let Delhimovies=()=>
{
 return `<h1>Movies in Delhi</h1>
 <div>
     <button>English</button>
     <button>Hindi</button>
     <button>English 7D</button>
     <button>Malayalam</button>
     <button>Haryanvi</button>
     <button>Punjabi</button>
 </div>`
}
let Bengalurumovies=()=>
{
 return `<h1>Movies in Delhi</h1>
 <div>
     <button>English</button>
     <button>Hindi</button>
     <button>English 7D</button>
     <button>Kannada</button>
     <button>Odia</button>
     <button>Tulu</button>
 </div>`
}

let displaymovielist=(ele)=>
{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=ele.img
    img.style.width="100%"
    let title=document.createElement("h3")
    title.innerText=ele.title
    let rating=document.createElement("p")
    rating.innerText=ele.Rating
    let lang=document.createElement("p")
    ele.Lang.forEach((e)=>
    {
        lang.innerText+=e+" ";
    })
    div.append(img,title,rating,lang)
    document.querySelector("#movielist").append(div)
}
let filterlangdata=(data)=>
{
    let langinput=document.querySelector("#lang").value;
    let arr=data.filter((ele)=>
    {
        return ele.Lang.includes(langinput)
    })
    return arr;
}
let filtergenredata=(data)=>
{
    let langinput=document.querySelector("#gen").value;
    let arr=data.filter((ele)=>
    {
        return ele.Lang.includes(langinput)
    })
    return arr;
}
let filterformdata=(data)=>
{
    let langinput=document.querySelector("#form").value;
    let arr=data.filter((ele)=>
    {
        return ele.Lang.includes(langinput)
    })
    return arr;
}
export {Delhimovies,Bengalurumovies,displaymovielist,filterformdata,filterlangdata,filtergenredata}