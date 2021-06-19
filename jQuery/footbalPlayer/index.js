$(function () {
  var $field = $(".footbalField");
  var $player = $("#player");
  var $button = $("button");

  var isOn = true;

  function movePlayer(event) {
    // Just Y/X withouth a deduction from 50px is putting an image in the top left corner and we need the image to be in the center of the click.

    var x = event.offsetX - 50;
    var y = event.offsetY - 50;

    $player.css("top", y + "px");
    $player.css("left", x + "px");
  }

  // **************Easy variant without Toggle button*****************
  // function stopRunning() {
  //   $field.off();
  // }

  //****************With Toggle Button***************************** */
  function stop() {
    if (isOn) {
      $button.html("Start moving");
      $field.off("click", movePlayer);
      isOn = false;
    } else {
      $button.html("Stop moving");
      $field.on("click", movePlayer);
      isOn = true;
    }
  }

  $field.on("click", movePlayer);
  $button.on("click", stop);
  // $button.on("click", stopRunning);
});
