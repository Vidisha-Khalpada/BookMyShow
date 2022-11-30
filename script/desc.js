import movieslist from "../db.json" assert{type:'json'};

let displaymoviedesc=()=>
{
    let name=localStorage.getItem("moviedesc")
    console.log(name)
    let data=movieslist.Moviedesc
    data=data.filter((ele)=>
    {
        return ele.title==name
    })
    console.log(data)
    data.forEach((ele)=>
    {
        document.querySelector("#poster").innerHTML=""
        let divparent=document.createElement("div")
        divparent.setAttribute("id","divparent")
        
        divparent.style.backgroundRepeat="no-repeat"
        divparent.style.backgroundSize="cover"
        divparent.style.backgroundImage='linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%),url('+ele.imgback+')';
        
        let divchild1=document.createElement("div")
        let img=document.createElement("img")
        img.src=ele.img
        let trailer=document.createElement("h5")
        trailer.innerHTML='<i class="fa-solid fa-play"></i>'+" Trailers"
        trailer.setAttribute("id","trailer")
        trailer.addEventListener("click",()=>
        {
            window.location.href="../html/trailers.html"
        })
        let date=document.createElement("h4")
        date.innerText=ele.ReleaseDate
        divchild1.append(img,trailer,date)
        let divchild2=document.createElement("div")
        let mtitle=document.createElement("h1")
        mtitle.innerText=ele.title
        let inter=document.createElement("h3")
        inter.innerHTML='<i class="fa-solid fa-thumbs-up"></i>'+" "+ele.Interested+" are interested"
        let intertext=document.createElement("div")
        let fir=document.createElement("h4")
        fir.innerHTML=ele.ReleaseDate
        let sec=document.createElement("h5")
        sec.innerHTML="Mark Interested to know when the bookings are open"
        intertext.append(fir,sec)
        intertext.setAttribute("id","intertext")
        let flag=false;
        intertext.addEventListener("click",()=>
        {
            if(flag==false)
            {
                inter.innerHTML='<i class="fa-solid fa-thumbs-up"></i>'+" You and"+ele.Interested+" are interested"
                sec.innerHTML="Your interest has been marked, we will notify you when it releses"
                flag=true;
            }
            else
            {
                inter.innerHTML='<i class="fa-solid fa-thumbs-up"></i>'+" "+ele.Interested+" are interested"
                sec.innerHTML="Mark Interested to know when the bookings are open"
                flag=false;
            }
            
        })
        let form=document.createElement("h4")
        form.innerText=ele.Form.join(", ");
        form.setAttribute("id","form")
        let lang=document.createElement("h4")
        lang.innerText=ele.Lang.join(", ");
        lang.setAttribute("id","lang")
        let rtime=document.createElement("h4")
        rtime.innerText=ele.Time
        let gen=document.createElement("h4")
        gen.innerText=ele.Genre.join(", ");
        let rat=document.createElement("h4")
        rat.innerText=ele.Rating
        let button=document.createElement("button")
        button.innerText="Book Tickets"
        button.setAttribute("id","BT")
        button.addEventListener("click",()=>
        {
            window.location.href="../booktickets.html"
        })
        divchild2.append(mtitle,inter,intertext,form,lang,rtime,gen,rat,button)
        let divchild3=document.createElement("div")
        let share=document.createElement("h4")
        share.innerHTML='<i class="fa-solid fa-share-nodes"></i>'+"  Share"
        share.setAttribute("id","share")
        divchild3.append(share)
        divparent.append(divchild1,divchild2,divchild3)
        document.querySelector("#poster").append(divparent)
        let movdestit=document.createElement("h1")
        movdestit.innerHTML="About the movie"
        let movdesc=document.createElement("h4")
        movdesc.innerHTML=ele.About
        document.querySelector("#about").append(movdestit,movdesc)
        for(let i=0;i<ele.Castname.length;i++)
        {
            let div=document.createElement("div")
            let name=document.createElement("h5")
            name.innerText=ele.Castname[i]
            let cimg=document.createElement("img")
            cimg.src=ele.Castimages[i];
            let desc=document.createElement("h5")
            desc.innerText="Actor"
            div.append(cimg,name,desc)
            document.querySelector("#Cast").append(div)
        }
        for(let i=0;i<ele.Crewname.length;i++)
        {
            let div=document.createElement("div")
            let name=document.createElement("h5")
            name.innerText=ele.Crewname[i]
            let cimg=document.createElement("img")
            cimg.src=ele.Crewimages[i];
            let desc=document.createElement("h5")
            desc.innerText=ele.Crewdesc[i]
            div.append(cimg,name,desc)
            document.querySelector("#Crew").append(div)
        }
    })
    
    
}
displaymoviedesc()

let displaylike=()=>
{
    let name=localStorage.getItem("moviedesc")
    console.log(name)
    let data=movieslist.Delhimovieslist
    data=data.filter((ele)=>
    {
        return ele.title!==name
    })
    console.log(data)
    data.forEach((ele)=>
    {
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=ele.img
        let title=document.createElement("h2")
        title.innerText=ele.title
        div.append(img,title)
        document.querySelector("#Like").append(div)
    })
}
displaylike()