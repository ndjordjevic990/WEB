var field = document.querySelector(".footbalField");
var player = document.querySelector("img");
var clickEvent = field.addEventListener("click", movePlayer);
var isOn = true;

function movePlayer(event) {
  var x = event.clientX;
  var y = event.clientY;

  // Just Y/X withouth a deduction from 50px is putting an image in the top left corner and we need the image to be in the center of the click.
  player.style.top = y - 50 + "px";
  player.style.left = x - 50 + "px";

  console.log(x);
}

function stop() {
  field.removeEventListener("click", movePlayer);
}
