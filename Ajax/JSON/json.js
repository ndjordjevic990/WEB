var request = new XMLHttpRequest();
var div = document.querySelector("div");

var button = document.querySelector("button");
request.onload = function () {
  div.innerHTML = "";
  var parsedData = JSON.parse(request.responseText);
  var img = document.createElement("img");
  img.setAttribute("src", parsedData.message);
  div.appendChild(img);
};
button.onclick = function () {
  request.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  request.send();
};
