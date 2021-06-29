//---------create request---------
var newRequest = new XMLHttpRequest();

//---------init request---------
newRequest.open("GET", "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
// newRequest.open("GET", "http://www.geoplugin.net/xml.gp?ip=164.152.189.25");

//---------onload handler---------
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status < 300) {
    var response = newRequest.responseXML;
    var country = response.querySelector("geoplugin_countryName").textContent;
    var paragraph = document.createElement("p");
    paragraph.textContent = country;
    var div = document.querySelector("div");
    div.appendChild(paragraph);
  }
};

//---------send request----------
newRequest.send();

// **********************************EXTRA***********************************************
var locationXHR = new XMLHttpRequest();

locationXHR.open("GET", "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");

locationXHR.onload = function () {
  var button = document.querySelector("button");

  button.onclick = function () {
    var response = locationXHR.responseXML;
    var input = document.querySelector("input");
    var ipAddress = response.querySelector("geoplugin_request").textContent;
    input.value = ipAddress;
  };
};

locationXHR.send();
