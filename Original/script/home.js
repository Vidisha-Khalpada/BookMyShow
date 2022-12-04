import { silder } from "../util/silder.js";
// console.log(silder());
document.getElementById("ad-slider").innerHTML = silder();
function fetchdata1() {
  var key = "67e994dd73f2f36f7902d8b931462995";
  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      display1(res.results);
      display2(res.results);
      // console.log(res);
      // a();
    })
    .catch((err) => {
      console.log(err);
    });
}

function display1(data) {
  // let movies = document.getElementById("podcast-box");

  data.map((elem) => {
    let div = document.createElement("div");
    div.setAttribute("class", "podcast-card");

    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class", "podcast-img");

    fetch(`http://image.tmdb.org/t/p/w500/${elem.poster_path}`)
      .then((res) => {
        img.src = res.url;
      })
      .catch((err) => {
        console.log(err);
      });
    imgDiv.append(img);

    let h2 = document.createElement("h2");
    h2.innerText = elem.title || elem.original_name;

    let date = document.createElement("p");
    date.innerText = "Release Date : " + elem.release_date;

    let pop = document.createElement("p");
    pop.innerText = "Popularity : " + elem.popularity;

    div.append(imgDiv, h2, date, pop);
    document.getElementById("podcast").append(div);
  });
}
function display2(data) {
  // let movies = document.getElementById("podcast-box");

  data.map((elem) => {
    let div = document.createElement("div");
    div.setAttribute("class", "podcast-card");

    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class", "podcast-img");

    fetch(`http://image.tmdb.org/t/p/w500/${elem.poster_path}`)
      .then((res) => {
        img.src = res.url;
      })
      .catch((err) => {
        console.log(err);
      });
    imgDiv.append(img);

    let h2 = document.createElement("h2");
    h2.innerText = elem.title || elem.original_name;

    let date = document.createElement("p");
    date.innerText = "Release Date : " + elem.release_date;

    let pop = document.createElement("p");
    pop.innerText = "Popularity : " + elem.popularity;

    div.append(imgDiv, h2, date, pop);
    document.getElementById("podcast1").append(div);
  });
}
fetchdata1();

// let i = 1;
// document.getElementById("trasn-btm"),
//   addEventListener("click", () => {
//     let max = -(20 * i) + "rem";
//     console.log(max);
//     document.getElementById("movie-item").style.translate = max;
//     i++;
//   });

// product card js
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];
// console.log(productContainers);
productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

//podcast
// let a = () => {
const podcastContainers = [...document.querySelectorAll("#podcast")];
const podcastnxtBtn = [...document.querySelectorAll(".podcastnxt-btn")];
const podcastpreBtn = [...document.querySelectorAll(".podcastpre-btn")];
// console.log(podcastContainers);
podcastContainers.forEach((item, i) => {
  let podcastDimensions = item.getBoundingClientRect();
  let podcastWidth = podcastDimensions.width;

  podcastnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += podcastWidth;
  });

  podcastpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= podcastWidth;
  });
});
//podcast1
// let a = () => {
const podcastContainers1 = [...document.querySelectorAll("#podcast1")];
const podcastnxtBtn1 = [...document.querySelectorAll(".podcastnxt-btn1")];
const podcastpreBtn1 = [...document.querySelectorAll(".podcastpre-btn1")];
console.log(podcastContainers1);
podcastContainers1.forEach((item, i) => {
  let podcastDimensions1 = item.getBoundingClientRect();
  let podcastWidth1 = podcastDimensions1.width;

  podcastnxtBtn1[i].addEventListener("click", () => {
    item.scrollLeft += podcastWidth1;
  });

  podcastpreBtn1[i].addEventListener("click", () => {
    item.scrollLeft -= podcastWidth1;
  });
});
// };
