import movieslist from "../db.json" assert{type:'json'};
let displayshare=()=>
{
    let div=document.createElement("div")
    let div0=document.createElement("div")
    let title=document.createElement("h2")
    title.innerText="Share"
    let close=document.createElement("h5")
    close.innerHTML='<i class="fa-solid fa-xmark"></i>'
    close.addEventListener("click",()=>
    {
        document.querySelector("#sharedialog").style.display="none"
    })
    close.style.cursor="pointer"
    div0.append(title,close)
    div0.setAttribute("class","sim")
    let div1=document.createElement("div")
    let div2=document.createElement("div")
    let div3=document.createElement("div")
    div1.setAttribute("class","sim")
    div2.setAttribute("class","sim")
    div3.setAttribute("class","sim")
    let fb=document.createElement("h5")
    fb.innerText="Facebook";
    let fbicon=document.createElement("h5")
    fbicon.innerHTML='<i class="fa-brands fa-facebook"></i>'
    div1.append(fb,fbicon)
    let Twitter=document.createElement("h5")
    Twitter.innerText="Twitter"
    let twiicon=document.createElement("h5")
    twiicon.innerHTML='<i class="fa-brands fa-twitter"></i>'
    div2.append(Twitter,twiicon)
    let copy=document.createElement("h5")
    copy.innerText="Copy Link"
    let copyicon=document.createElement("h5")
    copyicon.innerHTML='<i class="fa-solid fa-copy"></i>'
    div3.append(copy,copyicon)
    div.append(div0,div1,div2,div3)
    document.querySelector("#sharedialog").append(div)
}
let displaymoviedesc=()=>
{
    let name=localStorage.getItem("moviedesc")
    console.log(name)
    let data=movieslist.Moviedesc
    data=data.filter((ele)=>
    {
        return ele.title==name
    })
    document.querySelector("#poster").innerHTML=""
    document.querySelector("#about").innerHTML=""
    document.querySelector("#Crew").innerHTML=""
    document.querySelector("#Cast").innerHTML=""
    data.forEach((ele)=>
    {
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
        inter.innerHTML='<i class="fa-solid fa-thumbs-up"></i>'+" "+ele.Interested
        let intertext=document.createElement("div")
        let fir=document.createElement("h4")
        fir.innerHTML=ele.ReleaseDate
        let sec=document.createElement("h5")
        // sec.innerHTML="Mark Interested to know when the bookings are open"
        intertext.append(fir,sec)
        intertext.setAttribute("id","intertext")
        
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
        share.addEventListener("click",()=>
        {
            displayshare();
        })
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
    document.querySelector(".swiper-wrapper").innerHTML=""
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
        div.append(img)
        div.setAttribute("class","swiper-slide")
        document.querySelector(".swiper-wrapper").append(div)
    })
    
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
displaylike()
document.querySelector("#viewall").addEventListener("click",()=>
{
    window.location.href="../html/mainpage.html"
})