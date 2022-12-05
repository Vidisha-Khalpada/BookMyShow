import movieslist from "../Movielist&desc/mock-server-app/db.json" assert{type:'json'};
let displaymovietitle=()=>
{
  let name=localStorage.getItem("moviename")
  document.querySelector("#moviedesc").innerHTML=""
  movieslist.Delhimovieslist.forEach((ele)=>
  {
    if(ele.title==name)
    {
      let div=document.createElement("div")
      let title=document.createElement("h1")
      title.innerHTML=ele.title+" - "+ele.Lang.join(", ")
      let rating=document.createElement("h4")
      rating.innerHTML=ele.Rating
      rating.setAttribute("class","rating")
      let genre=document.createElement("h4")
      genre.innerHTML=ele.Genre.join(", ")
      genre.setAttribute("class","desc")
      div.append(title,rating,genre)
      div.setAttribute("id","card")
      document.querySelector("#moviedesc").append(div)
    }
  })
}
displaymovietitle()
let displaydate=()=>
{
  document.querySelector("#dates").innerHTML=""
  let date1=document.createElement("button")
  date1.setAttribute("class","datebtn")
  date1.addEventListener("click",()=>
  {
    displaytodaytime()
  })
  let date2=document.createElement("button")
  date2.setAttribute("class","datebtn")
  date2.addEventListener("click",()=>
  {
    displayshowtime()
  })
  let date3=document.createElement("button")
  date3.setAttribute("class","datebtn")
  date3.addEventListener("click",()=>
  {
    displayshowtime()
  })
  let date4=document.createElement("button")
  date4.setAttribute("class","datebtn")
  date4.addEventListener("click",()=>
  {
    displayshowtime()
  })
  
  const date=new Date();
  const day=date.getDate()
  const month=date.getMonth()+1
  const year=date.getFullYear()
  date1.innerHTML=day+"/"+month+"/"+year;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate()+1);
  const day1=tomorrow.getDate()
  const month1=tomorrow.getMonth()+1
  const year1=tomorrow.getFullYear()
  date2.innerHTML=day1+"/"+month1+"/"+year1;
  const datomorrow = new Date();
  datomorrow.setDate(datomorrow.getDate()+2);
  const day2=datomorrow.getDate()
  const month2=datomorrow.getMonth()+1
  const year2=datomorrow.getFullYear()
  date3.innerHTML=day2+"/"+month2+"/"+year2;
  const daatomorrow = new Date();
  daatomorrow.setDate(daatomorrow.getDate()+3);
  const day3=daatomorrow.getDate()
  const month3=daatomorrow.getMonth()+1
  const year3=daatomorrow.getFullYear()
  date4.innerHTML=day3+"/"+month3+"/"+year3;
  document.querySelector("#dates").append(date1,date2,date3,date4)
}
displaydate()

let displayshowtime=()=>
{
  const time=8
  document.querySelector("#time1").innerHTML=time+1+":00 AM"
  document.querySelector("#time2").innerHTML=time+1+":15 AM"
  document.querySelector("#time3").innerHTML=time+2+":30 AM"
  document.querySelector("#time4").innerHTML=time+2+":45 AM"
  document.querySelector("#time5").innerHTML=time+1+":05 AM"
  document.querySelector("#time6").innerHTML=time+1+":10 AM"
  document.querySelector("#time7").innerHTML=time+1+":15 AM"
  document.querySelector("#time8").innerHTML=time+2+":30 AM"
  document.querySelector("#time9").innerHTML=time+1+":00 AM"
  document.querySelector("#time10").innerHTML=time+1+":15 AM"
  document.querySelector("#time11").innerHTML=time+2+":30 AM"
  document.querySelector("#time12").innerHTML=time+2+":45 AM"
}
let displaytodaytime=()=>
{
  const date=new Date();
  let time=date.getHours();
  if(time>=12 && time<22)
  {
    time-=12;
    document.querySelector("#time1").innerHTML=time+1+":00 PM"
    document.querySelector("#time2").innerHTML=time+1+":15 PM"
    document.querySelector("#time3").innerHTML=time+2+":30 PM"
    document.querySelector("#time4").innerHTML=time+2+":45 PM"
    document.querySelector("#time5").innerHTML=time+1+":05 PM"
    document.querySelector("#time6").innerHTML=time+1+":10 PM"
    document.querySelector("#time7").innerHTML=time+1+":15 PM"
    document.querySelector("#time8").innerHTML=time+2+":30 PM"
    document.querySelector("#time9").innerHTML=time+1+":00 PM"
    document.querySelector("#time10").innerHTML=time+1+":15 PM"
    document.querySelector("#time11").innerHTML=time+2+":30 PM"
    document.querySelector("#time12").innerHTML=time+2+":45 PM"
  }
  else if(time>=11 && time<12)
  {
    document.querySelector("#time1").innerHTML=time+1+":00 PM"
    document.querySelector("#time2").innerHTML=time+1+":15 PM"
    document.querySelector("#time3").innerHTML=time-12+2+":30 PM"
    document.querySelector("#time4").innerHTML=time-12+2+":45 PM"
    document.querySelector("#time5").innerHTML=time+1+":05 PM"
    document.querySelector("#time6").innerHTML=time+1+":10 PM"
    document.querySelector("#time7").innerHTML=time+1+":15 PM"
    document.querySelector("#time8").innerHTML=time-12+2+":30 PM"
    document.querySelector("#time9").innerHTML=time+1+":00 PM"
    document.querySelector("#time10").innerHTML=time+1+":15 PM"
    document.querySelector("#time11").innerHTML=time-12+2+":30 PM"
    document.querySelector("#time12").innerHTML=time-12+2+":45 PM"
  }
  else
  {
    document.querySelector("#time1").innerHTML=time+1+":00 AM"
    document.querySelector("#time2").innerHTML=time+1+":15 AM"
    document.querySelector("#time3").innerHTML=time+2+":30 AM"
    document.querySelector("#time4").innerHTML=time+2+":45 AM"
    document.querySelector("#time5").innerHTML=time+1+":05 AM"
    document.querySelector("#time6").innerHTML=time+1+":10 AM"
    document.querySelector("#time7").innerHTML=time+1+":15 AM"
    document.querySelector("#time8").innerHTML=time+2+":30 AM"
    document.querySelector("#time9").innerHTML=time+1+":00 AM"
    document.querySelector("#time10").innerHTML=time+1+":15 AM"
    document.querySelector("#time11").innerHTML=time+2+":30 AM"
    document.querySelector("#time12").innerHTML=time+2+":45 AM"
  }
  
}
displaytodaytime()
document.querySelector(".times").addEventListener("click",()=>
  {
    
    window.location.href="../seat-selection/seat selection.html"
  })
