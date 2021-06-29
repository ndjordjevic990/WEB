var request = new XMLHttpRequest();

request.open("GET", "https://dog.ceo/api/breeds/image/random", true);

var button = document.querySelector("button");

button.onclick = function () {
  var parsedData = JSON.parse(request.responseText);
  var div = document.querySelector("div");
  var img = document.createElement("img");
  img.setAttribute("src", parsedData.message);
  div.appendChild(img);
};

request.send();
