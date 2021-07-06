let listOfShows = document.querySelector(".row");
let searchField = document.querySelector("form-inline");
let input = document.querySelector("form-control");

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
