let listOfShows = document.querySelector(".row");

let request = new XMLHttpRequest();
request.open("GET", "http://api.tvmaze.com/shows");
request.send();

request.onload = function () {
  let data = JSON.parse(request.responseText);

  data.sort((a, b) => b.rating.average - a.rating.average);

  for (let i = 0; i < 50; i++) {
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let show = document.createElement("div");
    let headerLink = document.createElement("a");
    let imgLink = document.createElement("a");

    imgLink.setAttribute("href", "");
    headerLink.setAttribute("href", "");

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
// searchElementsList.setAttribute("class", "search-results");

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

    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      let liLink = document.createElement("a");
      liLink.setAttribute("href", "");
      li.textContent = data[i].show.name;
      liLink.appendChild(li);
      searchElementsList.appendChild(liLink);
      // searchElementsList.setAttribute("class", "search-results");
    }
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
