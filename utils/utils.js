let Delhimovies=()=>
{
 return `<h1>Movies in Delhi</h1>`
}
let Bengalurumovies=()=>
{
 return `<h1>Movies in Delhi</h1>`
}

let displaymovielist=(ele)=>
{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=ele.img
    img.style.width="100%"
    img.addEventListener("click",()=>
    {
        localStorage.setItem("moviedesc",ele.title)
        window.location.href="../html/desc.html"
    })
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
        return ele.Genre.includes(langinput)
    })
    return arr;
}
let filterformdata=(data)=>
{
    let langinput=document.querySelector("#form").value;
    let arr=data.filter((ele)=>
    {
        return ele.Form.includes(langinput)
    })
    return arr;
}

export {Delhimovies,Bengalurumovies,displaymovielist,filterformdata,filterlangdata,filtergenredata}