var toggleButton = document.querySelector("button");
var turnOffButton = document.querySelector("#turnOff");
var body = document.querySelector("body");
var isOn = true;

function changeBackColor() {
  var div = document.querySelector("div");
  div.classList.toggle("active");
}

function turnOff() {
  if (isOn) {
    turnOffButton.innerHTML = "Turn On";
    toggleButton.onclick = null;
    isOn = false;
  } else {
    turnOffButton.innerHTML = "Turn Off";
    toggleButton.onclick = changeBackColor;
    isOn = true;
  }
}
