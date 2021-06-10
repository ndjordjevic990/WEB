var mario = document.querySelector("#mario");
var marioRuns = document.querySelector("#running");
var grass = document.querySelector("container");
var xPos = 0;
var yPos = "0px";

document.addEventListener("keydown", startRunning);
document.addEventListener("keyup", stopRunning);

function startRunning(e) {
  if (e.keyCode == 39) {
    mario.style.display = "none";
    marioRuns.style.display = "block";
  }
}

function stopRunning(e) {
  if (e.keyCode == 39) {
    mario.style.display = "block";
    marioRuns.style.display = "none";
  }
}
