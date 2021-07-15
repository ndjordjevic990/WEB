let listOfShows = document.querySelector(".row");

let request = new XMLHttpRequest();
request.open("GET", "http://api.tvmaze.com/shows");
request.send();

request.onload = function () {
  let data = JSON.parse(request.responseText);

  data.sort((a, b) => b.rating.average - a.rating.average);
  console.log(data);

  for (let i = 0; i < 50; i++) {
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let show = document.createElement("div");
    let headerLink = document.createElement("a");
    let imgLink = document.createElement("a");

    imgLink.setAttribute("href", `showInfo.html?id=${data[i].id}`);
    imgLink.setAttribute("target", "_self");

    headerLink.setAttribute("href", `showInfo.html?id=${data[i].id}`);
    headerLink.setAttribute("target", "_self");

    show.className = "col-sm-12 col-md-4 col-lg-4 show ";
    img.setAttribute("src", data[i].image.medium);
    h3.textContent = data[i].name;
    headerLink.appendChild(h3);
    imgLink.appendChild(img);
    show.appendChild(imgLink);
    show.appendChild(headerLink);
    headerLink.appendChild(h3);
    listOfShows.appendChild(show);
  }
};

//********************** GETTING THE DROPDOWN LIST ON SEARCH *************************** */
let body = document.querySelector("body");
let searchField = document.querySelector(".form-inline");
let input = document.querySelector(".form-control");
let searchElementsList = document.createElement("ul");

let search = function () {
  let searchRequest = new XMLHttpRequest();
  searchRequest.open(
    "GET",
    `http://api.tvmaze.com/search/shows?q=${input.value}`
  );
  searchRequest.send();

  searchRequest.onload = function () {
    let data = JSON.parse(searchRequest.responseText);
    console.log(data);
    searchField.appendChild(searchElementsList);
    searchElementsList.innerHTML = "";

    data.forEach((result) => {
      let li = document.createElement("li");
      let liLink = document.createElement("a");
      liLink.setAttribute("href", `showInfo.html?id=${result.show.id}`);
      liLink.setAttribute("target", "_self");
      li.textContent = result.show.name;
      liLink.appendChild(li);
      searchElementsList.appendChild(liLink);
    });
  };
};
input.addEventListener("keyup", search);

// If user clicks outside of Search results list or Search field close dropdown list
window.addEventListener("click", function (event) {
  if (
    event.target != searchElementsList &&
    event.target != searchField &&
    event.target.parentNode != searchField
  ) {
    searchElementsList.classList.add("hidden-results");
    searchElementsList.classList.remove("search-results");
    searchElementsList.classList.remove("search-results li");
  } else searchElementsList.classList.remove("hidden-results");
  searchElementsList.classList.add("search-results");
  searchElementsList.classList.add("search-results li");
});

// Adding a spinner that will get hidden once page is loaded
window.onload = function () {
  document.getElementById("spinner").classList.remove("d-flex");
  document.getElementById("spinner").classList.add("hidden-results");
};
