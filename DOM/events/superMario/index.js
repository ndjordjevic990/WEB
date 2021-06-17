var mario = document.querySelector("#mario");
var marioRunning = document.querySelector("#running");
var marioJumping = document.querySelector("#jumping");
var marioRunningLeft = document.querySelector("#running-left");
var grass = document.querySelector(".container");
var timer;
var jumpTimer;
var fallTimer;
var running = false;
var jumping = false;
var jumpUp = 0;
var fallDown = 0;

marioJumping.style.bottom = "85px";

//---------------------------------------------------------------//

document.addEventListener("keydown", startRunning);
document.addEventListener("keydown", startJumping);
document.addEventListener("keydown", startRunningLeft);
document.addEventListener("keyup", stopRunning);

//--------------------------------------------------------------//
function runningMario() {
  mario.style.display = "none";
  marioRunning.style.display = "block";
  marioJumping.style.display = "none";
}
function jumpingMario() {
  mario.style.display = "none";
  marioJumping.style.display = "block";
}

function runningMarioLeft() {
  mario.style.display = "none";
  marioRunningLeft.style.display = "block";
}

function holdYourGround() {
  mario.style.display = "block";
  marioRunning.style.display = "none";
  marioRunningLeft.style.display = "none";
  marioJumping.style.display = "none";
}
//--------------------------------------------------------//
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
  if (e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 38) {
    holdYourGround();
    clearInterval(timer);
    running = false;
    jumping = false;
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

// ----------------------------JUMPING-----------------------------

function startJumping(e) {
  if (e.keyCode == 38 && !jumping) {
    jumpingMario();
    timer = setInterval(movingGrass, 60);
    jumpTimer = setInterval(movingUp, 50);
    jumpUp = 5;
    jumping = true;
  }
}

function movingUp() {
  marioJumping.style.bottom = "85px";
  if (jumpUp != 0) {
    for (var i = 5; i >= 0; i--) {
      marioJumping.style.bottom =
        parseInt(marioJumping.style.bottom) + 10 + "px";
      jumpUp--;
    }
  } else {
    clearInterval(jumpTimer);
    clearInterval(timer);
    fallDown = 5;
    fallTimer = setinterval(movingDown, 50);
  }
}

function movingDown() {
  if (fallDown != 0) {
    marioJumping.style.bottom = parseInt(marioJumping.style.bottom) - 10 + "px";
    fallDown--;
  } else {
    jumping = false;
    clearInterval(fallTimer);
    marioJumping.style.display = "none";
    if (running) {
      marioRunning.style.display = "block";
    } else {
      mario.style.display = "block";
    }
  }
}
