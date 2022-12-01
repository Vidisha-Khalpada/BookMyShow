function fetchdata() {
  var key = "67e994dd73f2f36f7902d8b931462995";
  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      display(res.results);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function display(data) {
  let movies = document.querySelector(".swiper-wrapper");

  data.map((elem) => {
    let div = document.createElement("div");
    div.setAttribute("class", "swiper-slide");

    let imgDiv = document.createElement("div");
    let img = document.createElement("img");

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
    movies.append(div);
  });
}
fetchdata();
