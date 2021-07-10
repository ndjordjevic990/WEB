let url = window.location.search;
console.log(url);
let urlId = url.slice(4);
console.log(urlId);

//********************  GETTING SHOW INFO - TITLE, POSTER, DESCRIPTION *********************/

let poster = document.querySelector(".image");
let about = document.querySelector(".about");
let description = document.querySelector(".description");

let request = new XMLHttpRequest();
request.open("GET", `http://api.tvmaze.com/shows/${urlId}`);
request.send();

request.onload = function () {
  let data = JSON.parse(request.responseText);
  console.log(data);
  let title = document.createElement("div");
  let img = document.createElement("img");
  let h1 = document.querySelector("h1");
  img.className = "show-img";
  poster.className = "col-lg-6 col-md-6 col-sm-12";
  img.setAttribute("src", data.image.original);
  h1.textContent = data.name;
  title.appendChild(img);
  poster.appendChild(title);
  description.innerHTML = data.summary;
};

/********************       GETTING SEASONS INFO        **************************/

let season = document.querySelector("#seasons h3");
let divSeason = document.querySelector("#seasons");
let ulSeason = document.createElement("ul");

let seasonsRequest = new XMLHttpRequest();
seasonsRequest.open("GET", `http://api.tvmaze.com/shows/${urlId}/seasons`);
seasonsRequest.send();

seasonsRequest.onload = function () {
  let data = JSON.parse(seasonsRequest.responseText);
  console.log(data);
  season.textContent = `Seasons (${data.length})`;
  divSeason.appendChild(ulSeason);
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${data[i].premiereDate} - ${data[i].endDate}`;
    ulSeason.appendChild(li);
  }
};

/********************       GETTING THE CAST LIST       **************************/

let cast = document.querySelector("#cast h3");
let castDiv = document.querySelector("#cast");
let ulCast = document.createElement("ul");

let castRequest = new XMLHttpRequest();
castRequest.open("GET", `http://api.tvmaze.com/shows/${urlId}/cast`);
castRequest.send();

castRequest.onload = function () {
  let data = JSON.parse(castRequest.responseText);
  console.log(data);
  cast.textContent = "Cast";
  castDiv.appendChild(ulCast);
  for (let i = 0; i < 7; i++) {
    let li = document.createElement("li");
    li.textContent = `${data[i].person.name} (${data[i].character.name})`;
    ulCast.appendChild(li);
  }
};

/********************       GETTING SHOW CREW       **************************/
let crewTitle = document.querySelector("#crew h3");
let crewDiv = document.querySelector("#crew");
let ulCrew = document.createElement("ul");

let crewRequest = new XMLHttpRequest();
crewRequest.open("GET", `http://api.tvmaze.com/shows/${urlId}/crew`);
crewRequest.send();

crewRequest.onload = function () {
  let data = JSON.parse(crewRequest.responseText);
  console.log(data);
  crewTitle.textContent = "Crew";

  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.textContent = `${data[i].type} : ${data[i].person.name}`;
    ulCrew.appendChild(li);
  }
  crewDiv.appendChild(ulCrew);
};

/********************       GETTING SHOW`S AKAs      **************************/
let akaTitle = document.querySelector("#aka h3");
let akaDiv = document.querySelector("#aka");
let ulAka = document.createElement("ul");

let akaRequest = new XMLHttpRequest();
akaRequest.open("GET", `http://api.tvmaze.com/shows/${urlId}/akas`);
akaRequest.send();

akaRequest.onload = function () {
  let data = JSON.parse(akaRequest.responseText);
  console.log(data);
  akaTitle.textContent = "AKA's";
  for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.textContent = `${data[i].country.name} : ${data[i].name}`;
    ulAka.appendChild(li);
  }
  akaDiv.appendChild(ulAka);
};

/********************       GETTING SHOW`S AKAs      **************************/
let episodeListTitle = document.querySelector(".episode-list h3");
let episodeListDiv = document.querySelector(".episode-list");
let ulEpisodeList = document.createElement("ul");

let elRequest = new XMLHttpRequest();
elRequest.open("GET", `http://api.tvmaze.com/shows/${urlId}/episodes`);
elRequest.send();

elRequest.onload = function () {
  data = JSON.parse(elRequest.responseText);
  episodeListTitle.textContent = "Episode List";
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    // Get episode numbers that start with 01, 02...
    let episodeNumber = data[i].number;
    episodeNumberTwoDigits = ("0" + episodeNumber).slice(-2);

    li.textContent = `${data[i].season}x${episodeNumberTwoDigits} - ${data[i].name}`;
    ulEpisodeList.appendChild(li);
  }

  episodeListDiv.appendChild(ulEpisodeList);
};
