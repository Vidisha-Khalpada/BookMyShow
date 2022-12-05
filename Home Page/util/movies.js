// function fetchdata() {
//   var key = "67e994dd73f2f36f7902d8b931462995";
//   fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       display(res.results);
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

let data = [
  {
    id: 1,
    title: "Avatar: The Way of Water",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzEzLjlLIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-bvuyspjwsc-portrait.jpg",
    Lang: ["English", "Hindi", "Tamil", "Telegu"],
    Rating: "UA",
    Genre: ["Action", "Adventure", "Fantasy"],
    Form: ["2D", "3D", "4DX 3D", "IMAX 3D", "3D SCREEN X"],
  },
  {
    id: 2,
    title: "Drishyam 2",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNjQuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331997-ptqfdfmgtr-portrait.jpg",
    Lang: ["Hindi"],
    Rating: "UA",
    Genre: ["Drama", "Mystery", "Thriller"],
    Form: ["2D"],
  },
  {
    id: 3,
    title: "Bhediya",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAxNy40SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312739-twjrkftutt-portrait.jpg",
    Lang: ["Hindi"],
    Rating: "UA",
    Genre: ["Comedy", "Thriller"],
    Form: ["2D", "3D"],
  },
  {
    id: 4,
    title: "Black Panther: Wakanda Forever",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICA1MUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310792-blpzhjqpnu-portrait.jpg",
    Lang: ["Hindi", "English", "Telegu", "Tamil"],
    Rating: "UA",
    Genre: ["Action", "Adventure", "Drama"],
    Form: ["2D", "3D", "4DX 3D", "IMAX 3D", "3D SCREEN X"],
  },
  {
    id: 6,
    title: "Uunchai",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAxNC42SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00335262-yduagmklxs-portrait.jpg",
    Lang: ["Hindi"],
    Rating: "U",
    Genre: ["Drama", "Adventure", "Family"],
    Form: ["2D"],
  },
  {
    id: 7,
    title: "Strange World",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny8xMCAgMTc5IHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00345205-segnlwxxnw-portrait.jpg",
    Lang: ["Hindi", "English"],
    Rating: "U",
    Genre: ["Anime"],
    Form: ["2D", "3D", "4DX 3D"],
  },
  {
    id: 8,
    title: "Kantara",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICA5Ny4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00342025-shnasdmajr-portrait.jpg",
    Lang: ["Hindi"],
    Rating: "UA",
    Genre: ["Drama", "Adventure", "Thriller"],
    Form: ["2D"],
  },
  {
    id: 9,
    title: "Dada Lakhmi",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS42LzEwICA4MjMgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00344105-naqtruuyem-portrait.jpg",
    Lang: ["Haryanvi"],
    Rating: "U",
    Genre: ["Drama", "Biography", "Musical"],
    Form: ["2D"],
  },
  {
    id: 10,
    title: "Shefeekkinte Santhosham",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS42LzEwICAxSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340920-kmcjkxfplk-portrait.jpg",
    Lang: ["Malayalam"],
    Rating: "U",
    Genre: ["Drama", "Family"],
    Form: ["2D"],
  },
];

console.log(data);

// console.log(a);
function display(data) {
  let movies = document.querySelector(".swiper-wrapper");

  data.map((elem) => {
    let div = document.createElement("div");
    div.setAttribute("class", "swiper-slide");

    // let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.img;

    // fetch(`http://image.tmdb.org/t/p/w500/${elem.poster_path}`)
    //   .then((res) => {
    //     img.src = res.url;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //   imgDiv.append(img);

    let h2 = document.createElement("h2");
    h2.innerText = elem.title || elem.original_name;

    // let date = document.createElement("p");
    // date.innerText = "Release Date : " + elem.release_date;

    let pop = document.createElement("p");
    let a = "";
    for (let x = 0; x < elem.Genre.length; x++) {
      if (x == elem.Genre.length - 1) {
        a += elem.Genre[x];
      } else {
        a += elem.Genre[x] + "/";
      }
    }
    pop.innerText = a;
    div.append(img, h2, pop);
    movies.append(div);
  });
}
display(data);
document.querySelectorAll(".swiper-wrapper").forEach((div) => {
  div.addEventListener("click", function () {
    window.location.href = "../BookMyShow/Movielist&desc/html/mainpage.html";
  });
});
