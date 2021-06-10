var button = document.querySelector("button");
var body = document.querySelector("body");
var isOn = true;

function changeBackColor() {
  var div = document.querySelector("div");
  div.classList.toggle("active");
}

function turnOff() {
  if (isOn) {
    button.onclick = null;
    isOn = false;
  } else {
    button.onclick = changeBackColor;
    isOn = true;
  }
}
