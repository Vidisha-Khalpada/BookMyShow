

let paginate_data = paginate(data, size, page);
displayData(paginate_data);

document.getElementById("searchButton").addEventListener("click", handleSearch);

function paginate(array, size, page) {
  return array.slice((page - 1) * size, page * size);
}

function filterByRole() {
  var selected = document.getElementById("role").value;
  var newData = data.filter((ele) => ele.role === selected);
  displayData(newData);
}

function handleSearch() {
  let query = document.getElementById("query").value;
  let newData = data.filter(
    (ele) => ele.language.toLowerCase() == query.toLowerCase()
  );
  displayData(newData);
}

function incPage() {
  if (page < lastPage) {
    page = page + 1;
    let nextPageData = paginate(data, size, page);
    displayData(nextPageData);
  }
}

function decPage() {
  if (page > 1) {
    page = page - 1;
    let prevPageData = paginate(data, size, page);
    displayData(prevPageData);
  }
}

function displayData(data) {
  document.getElementById("main").innerHTML = "";
  data.map((ele) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let imgBox = document.createElement("div");
    imgBox.setAttribute("class", "imgBox");

    let aboutSection = document.createElement("div");
    aboutSection.setAttribute("class", "aboutSection");

    let jobSection = document.createElement("div");
    jobSection.setAttribute("class", "jobSection");

    let img = document.createElement("img");
    img.setAttribute("class", "userImg");
    img.setAttribute(
      "src",
      "https://www.bing.com/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    );

    imgBox.append(img);

    let companyBox = document.createElement("div");
    companyBox.setAttribute("class", "companyBox");
    let company = document.createElement("p");
    company.textContent = ele.company;

    companyBox.append(company);

    let positionBox = document.createElement("div");
    positionBox.setAttribute("class", "positionBox");
    let position = document.createElement("h2");
    position.textContent = ele.position;

    positionBox.append(position);

    let contractBox = document.createElement("div");
    contractBox.setAttribute("class", "contractBox");

    let postedAt = document.createElement("div");
    postedAt.setAttribute("class", "postedAt");
    postedAt.textContent = ele.postedAt;

    let contract = document.createElement("div");
    contract.setAttribute("class", "contract");
    contract.textContent = ele.contract;

    let location = document.createElement("div");
    location.setAttribute("class", "location");
    location.textContent = ele.location;

    contractBox.append(postedAt, contract, location);

    aboutSection.append(companyBox, positionBox, contractBox);

    let roleBox = document.createElement("div");
    roleBox.setAttribute("class", "roleBox");
    roleBox.textContent = ele.role;

    let levelBox = document.createElement("div");
    levelBox.setAttribute("class", "levelBox");
    levelBox.textContent = ele.level;

    let languageBox = document.createElement("div");
    languageBox.setAttribute("class", "languageBox");
    languageBox.textContent = ele.language;

    jobSection.append(roleBox, levelBox, languageBox);

    card.append(imgBox, aboutSection, jobSection);
    document.getElementById("main").append(card);
  });
}
