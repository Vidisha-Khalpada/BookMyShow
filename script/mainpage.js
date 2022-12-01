import movieslist from "../db.json" assert{type:'json'};
import {Delhimovies,Bengalurumovies,displaymovielist,filterformdata,filterlangdata,filtergenredata } from "../utils/utils.js";
let displayslider=()=>
{
    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
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
    document.querySelector("#clearlang").addEventListener("click",()=>
    {
        movieslist.Delhimovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })
    document.querySelector("#clearform").addEventListener("click",()=>
    {
        movieslist.Delhimovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })
    document.querySelector("#cleargen").addEventListener("click",()=>
    {
        movieslist.Delhimovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })
    document.querySelector("#En").addEventListener("click",()=>
    {
        let id="#En"
        filterlangdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Hi").addEventListener("click",()=>
    {
        let id="#Hi"
        filterlangdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Ta").addEventListener("click",()=>
    {
        let id="#Ta"
        filterlangdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Ha").addEventListener("click",()=>
    {
        let id="#Ha"
        filterlangdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Te").addEventListener("click",()=>
    {
        let id="#Te"
        filterlangdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Ka").addEventListener("click",()=>
    {
        let id="#Ka"
        filterlangdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Dr").addEventListener("click",()=>
    {
        let id="#Dr"
        filtergenredata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Th").addEventListener("click",()=>
    {
        let id="#Th"
        filtergenredata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Ad").addEventListener("click",()=>
    {
        let id="#Ad"
        filtergenredata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Ro").addEventListener("click",()=>
    {
        let id="#Ro"
        filtergenredata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#Co").addEventListener("click",()=>
    {
        let id="#Co"
        filtergenredata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#An").addEventListener("click",()=>
    {
        let id="#An"
        filtergenredata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#D2").addEventListener("click",()=>
    {
        let id="#D2"
        filterformdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#D3").addEventListener("click",()=>
    {
        let id="#D3"
        filterformdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#X43D").addEventListener("click",()=>
    {
        let id="#X43D"
        filterformdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#D7").addEventListener("click",()=>
    {
        let id="#D7"
        filterformdata(movieslist.Delhimovieslist,id)
    })
    document.querySelector("#IMAX3D").addEventListener("click",()=>
    {
        let id="#IMAX3D"
        filterformdata(movieslist.Delhimovieslist,id)
    })
}
else if(city=="Bengaluru")
{
    document.querySelector("#moviefilter").innerHTML=Bengalurumovies();
    movieslist.Bengalurumovieslist.forEach((ele)=>
    {
        displaymovielist(ele)
    })
    document.querySelector("#clearlang").addEventListener("click",()=>
    {
        movieslist.Bengalurumovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })
    document.querySelector("#clearform").addEventListener("click",()=>
    {
        movieslist.Bengalurumovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })
    document.querySelector("#cleargen").addEventListener("click",()=>
    {
        movieslist.Bengalurumovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
    })
    document.querySelector("#En").addEventListener("click",()=>
    {
        let id="#En"
        filterlangdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Hi").addEventListener("click",()=>
    {
        let id="#Hi"
        filterlangdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Ta").addEventListener("click",()=>
    {
        let id="#Ta"
        filterlangdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Ha").addEventListener("click",()=>
    {
        let id="#Ha"
        filterlangdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Te").addEventListener("click",()=>
    {
        let id="#Te"
        filterlangdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Ka").addEventListener("click",()=>
    {
        let id="#Ka"
        filterlangdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Dr").addEventListener("click",()=>
    {
        let id="#Dr"
        filtergenredata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Th").addEventListener("click",()=>
    {
        let id="#Th"
        filtergenredata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Ad").addEventListener("click",()=>
    {
        let id="#Ad"
        filtergenredata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Ro").addEventListener("click",()=>
    {
        let id="#Ro"
        filtergenredata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#Co").addEventListener("click",()=>
    {
        let id="#Co"
        filtergenredata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#An").addEventListener("click",()=>
    {
        let id="#An"
        filtergenredata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#D2").addEventListener("click",()=>
    {
        let id="#D2"
        filterformdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#D3").addEventListener("click",()=>
    {
        let id="#D3"
        filterformdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#X43D").addEventListener("click",()=>
    {
        let id="#X43D"
        filterformdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#D7").addEventListener("click",()=>
    {
        let id="#D7"
        filterformdata(movieslist.Bengalurumovieslist,id)
    })
    document.querySelector("#IMAX3D").addEventListener("click",()=>
    {
        let id="#IMAX3D"
        filterformdata(movieslist.Bengalurumovieslist,id)
    })
}
document.querySelector("#langdrop").addEventListener("click",()=>
{
    if(document.getElementById("lang").style.display=="block")
    {
        document.getElementById("lang").style.display="none"
        document.querySelector("#langdrop").innerHTML='<i class="fa-solid fa-chevron-down"></i>'+" Languages"
    }
    else
    {
        document.getElementById("lang").style.display="block"
        document.querySelector("#langdrop").innerHTML='<i class="fa-solid fa-chevron-up"></i>'+" Languages"
    }
})
document.querySelector("#gendrop").addEventListener("click",()=>
{
    if(document.getElementById("gen").style.display=="block")
    {
        document.getElementById("gen").style.display="none"
        document.querySelector("#gendrop").innerHTML='<i class="fa-solid fa-chevron-down"></i>'+" Genres"
    }
    else
    {
        document.getElementById("gen").style.display="block"
        document.querySelector("#gendrop").innerHTML='<i class="fa-solid fa-chevron-up"></i>'+" Genres"
    }
})
document.querySelector("#formdrop").addEventListener("click",()=>
{
    if(document.getElementById("form").style.display=="block")
    {
        document.getElementById("form").style.display="none"
        document.querySelector("#formdrop").innerHTML='<i class="fa-solid fa-chevron-down"></i>'+" Format"
    }
    else
    {
        document.getElementById("form").style.display="block"
        document.querySelector("#formdrop").innerHTML='<i class="fa-solid fa-chevron-up"></i>'+" Format"
    }
})
document.querySelector("#upcoming").addEventListener("click",()=>
{
    window.location.href="../html/upcoming.html"
})
document.querySelector("#filtericon").addEventListener("click",()=>
{
    let icon=document.querySelector("#filtersection")
    icon.style.display="block";
    document.querySelector("#filtericon").style.display="none"
    icon.style.position="fixed";
    icon.style.height="100%"
    icon.style.width="100%"
    let close=document.createElement("button")
    close.innerText="CLOSE"
    close.setAttribute("id","close");
    icon.append(close)
    close.addEventListener("click",()=>
    {
        icon.style.display="none"
        close.style.display="none"
        document.querySelector("#filtericon").style.display="flex"
    })
})


