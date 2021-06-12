var mario = document.querySelector("#mario");
var marioRunning = document.querySelector("#running");
var marioRunningLeft = document.querySelector("#running-left");
var grass = document.querySelector(".container");
var timer;
var running = false;

document.addEventListener("keydown", startRunning);
document.addEventListener("keydown", startRunningLeft);
document.addEventListener("keyup", stopRunning);

function runningMario() {
  mario.style.display = "none";
  marioRunning.style.display = "block";
}
function runningMarioLeft() {
  mario.style.display = "none";
  marioRunningLeft.style.display = "block";
}

function holdYourGround() {
  mario.style.display = "block";
  marioRunning.style.display = "none";
  marioRunningLeft.style.display = "none";
}

function startRunning(e) {
  if (e.keyCode == 39 && !running) {
    runningMario();
    timer = setInterval(movingGrass, 60);
    running = true;
  }
}

function startRunningLeft(e) {
  if (e.keyCode == 37 && !running) {
    runningMarioLeft();
    timer = setInterval(movingGrassLeft, 60);
    running = true;
  }
}

function stopRunning(e) {
  if (e.keyCode == 39 || e.keyCode == 37) {
    holdYourGround();
    clearInterval(timer);
    running = false;
  }
}

// *******************************
// Moving grass along with Mario
// ******************************
grass.style.backgroundPositionX = "100px";

function movingGrass() {
  grass.style.backgroundPositionX =
    parseInt(grass.style.backgroundPositionX) - 10 + "px";
}
function movingGrassLeft() {
  grass.style.backgroundPositionX =
    parseInt(grass.style.backgroundPositionX) + 10 + "px";
}
