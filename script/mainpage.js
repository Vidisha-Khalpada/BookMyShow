import movieslist from "../db.json" assert{type:'json'};
import {Delhimovies,Bengalurumovies,displaymovielist,filterformdata,filterlangdata,filtergenredata } from "../utils/utils.js";
let displayslider=()=>
{
    let sliderdata=["https://assets-in.bmscdn.com/promotions/cms/creatives/1664611710097_moviepageweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1669284980178_bannerweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1668757696353_justice.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1667240850074_genericweb.jpg"]
    let image=document.createElement("img")
    image.src=sliderdata[0]
    document.querySelector("#slider").append(image)
    let index=1
    setInterval(()=>
    {
        document.querySelector("#slider").innerHTML=""
        let image=document.createElement("img")
        image.src=sliderdata[index]
        document.querySelector("#slider").append(image)
        console.log(index)
        index++
        if(index==sliderdata.length)
        {
            index=0;
        }
    },5000);
}
displayslider()

//let city=localStorage.getItem("selectcity")
let city="Delhi"
if(city=="Delhi")
{
    document.querySelector("#moviefilter").innerHTML=Delhimovies();
    document.querySelector("#movielist").innerHTML=""
    movieslist.Delhimovieslist.forEach((ele)=>
    {
        displaymovielist(ele)
    })
    document.querySelector(".clear").addEventListener("click",()=>
    {
        movieslist.Delhimovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })
    document.querySelector(".filters").addEventListener("input",()=>
    {
        document.querySelector("#movielist").innerHTML=""
        let langdata =filterlangdata(movieslist.Delhimovieslist);
        langdata.forEach((ele)=>
        {
            displaymovielist(ele)
        })
        let gendata=filtergenredata(movieslist.Delhimovieslist);
        gendata.forEach((ele)=>
        {
            displaymovielist(ele)
        })
        let formdata=filterformdata(movieslist.Delhimovieslist);
        formdata.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })

    
}
else if(city=="Bengaluru")
{
    document.querySelector("#moviefilter").innerHTML=Bengalurumovies();
    movieslist.Bengalurumovieslist.forEach((ele)=>
    {
        displaymovielist(ele)
    })
    document.querySelector(".clear").addEventListener("click",()=>
    {
        movieslist.Bengalurumovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })
    document.querySelector(".filter").addEventListener("input",()=>
    {
        let langdata=filterlangdata(movieslist.Bengalurumovieslist);
        let gendata=filtergenredata(movieslist.Bengalurumovieslist);
        let formdata=filterformdata(movieslist.Bengalurumovieslistf);
    })
}
document.querySelector("#langdrop").addEventListener("click",()=>
{
    if(document.getElementById("lang").style.display=="block")
    {
        document.getElementById("lang").style.display="none"
    }
    else
    {
        document.getElementById("lang").style.display="block"
    }
})
document.querySelector("#gendrop").addEventListener("click",()=>
{
    if(document.getElementById("gen").style.display=="block")
    {
        document.getElementById("gen").style.display="none"
    }
    else
    {
        document.getElementById("gen").style.display="block"
    }
})
document.querySelector("#formdrop").addEventListener("click",()=>
{
    if(document.getElementById("form").style.display=="block")
    {
        document.getElementById("form").style.display="none"
    }
    else
    {
        document.getElementById("form").style.display="block"
    }
})



