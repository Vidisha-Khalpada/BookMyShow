//import movieslist from "../db.json" assert{type:'json'};
import {Delhimovies,displaymovielist,filterformdata,filterlangdata,filtergenredata } from "../utils/utils.js";
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
    let fetchdata=async()=>
    {
        let res=await fetch(`https://mock-server-app-6y5e.onrender.com/upcomingmovies`)
        let Delhimovieslist=await res.json()
        displaydata(Delhimovieslist)
    }
    fetchdata()
    let displaydata=(Delhimovieslist)=>
    {
        document.querySelector("#movielist").innerHTML=""
        Delhimovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
        let lang
        document.querySelector("#lang").addEventListener("input",()=>
        {
            lang=document.querySelector("#lang").value;
            console.log(lang)
            filterdata()
        })
        let gen
        document.querySelector("#gen").addEventListener("input",()=>
        {
            gen=document.querySelector("#gen").value
            console.log(gen)
            filterdata()
        })
        let form
        document.querySelector("#form").addEventListener("input",()=>
        {
            form=document.querySelector("#form").value
            console.log(form)
            filterdata()
        })
        let filterdata=()=>
        {
            let data=[]
            if(lang!=undefined)
            {
                data=filterlangdata(Delhimovieslist,lang)
            }
            if(gen!=undefined)
            {
                data=filtergenredata(data,gen)
            }
            if(form!=undefined)
            {
                data=filterformdata(data,form)
            }
            data.forEach((ele)=>
            {
                displaymovielist(ele)
            })
        }
        document.querySelector("#clearlang").addEventListener("click",()=>
        {
            document.querySelector("#movielist").innerHTML=""
            Delhimovieslist.forEach((ele)=>
            {
                displaymovielist(ele)
            })
        })
        document.querySelector("#clearform").addEventListener("click",()=>
        {
            document.querySelector("#movielist").innerHTML=""
            Delhimovieslist.forEach((ele)=>
            {
                displaymovielist(ele)
            })
        })
        document.querySelector("#cleargen").addEventListener("click",()=>
        {
            document.querySelector("#movielist").innerHTML=""
            Delhimovieslist.forEach((ele)=>
            {
                displaymovielist(ele)
            })
        })
    }
  
    
}
else if(city=="Bengaluru")
{
    document.querySelector("#moviefilter").innerHTML=Bengalurumovies();
    document.querySelector("#movielist").innerHTML=""
    let fetchdata=async()=>
    {
        let res=await fetch(`https://mock-server-app-6y5e.onrender.com/upcomingmovies`)
        let Bengalurumovieslist=await res.json()
        displaydata(Bengalurumovieslist)
    }
    fetchdata()
    let displaydata=(Bengalurumovieslist)=>
    {
        Bengalurumovieslist.forEach((ele)=>
        {
            displaymovielist(ele)
        })
        let lang
        document.querySelector("#lang").addEventListener("input",()=>
        {
            lang=document.querySelector("#lang").value;
            console.log(lang)
            filterdata()
        })
        let gen
        document.querySelector("#gen").addEventListener("input",()=>
        {
            gen=document.querySelector("#gen").value
            console.log(gen)
            filterdata()
        })
        let form
        document.querySelector("#form").addEventListener("input",()=>
        {
            form=document.querySelector("#form").value
            console.log(form)
            filterdata()
        })
        let filterdata=()=>
        {
            let data=[]
            if(lang!=undefined)
            {
                data=filterlangdata(Bengalurumovieslist,lang)
            }
            if(gen!=undefined)
            {
                data=filtergenredata(data,gen)
            }
            if(form!=undefined)
            {
                data=filterformdata(data,form)
            }
            data.forEach((ele)=>
            {
                displaymovielist(ele)
            })
        }
        document.querySelector("#clearlang").addEventListener("click",()=>
        {
            document.querySelector("#movielist").innerHTML=""
            Bengalurumovieslist.forEach((ele)=>
            {
                displaymovielist(ele)
            })
        })
        document.querySelector("#clearform").addEventListener("click",()=>
        {
            document.querySelector("#movielist").innerHTML=""
            Bengalurumovieslist.forEach((ele)=>
            {
                displaymovielist(ele)
            })
        })
        document.querySelector("#cleargen").addEventListener("click",()=>
        {
            document.querySelector("#movielist").innerHTML=""
            Bengalurumovieslist.forEach((ele)=>
            {
                displaymovielist(ele)
            })
        })
    }
  
    
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
    window.location.href="../html/mainpage.html"
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



