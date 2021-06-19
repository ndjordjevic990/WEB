//****************************************************************************** */
// Traverse (Redo Gallery).
// Create a page with two “galleries". Each gallery should contain 3 photos and it should be wrapped in a div. Width of the pictures should be 33%
// One picture in the first gallery should have a red border around it. Red border should be a result of a class named “selected”.
// Create a function that selects the image with red borders and removes them, then uses traversing technique to navigate to the second gallery and applies the red borders to the middle picture
//****************************************************************************** */

// (function () {
//   var selectedImg = $(".selected").removeClass("selected");
//   var gallery1 = $(selectedImg).parent();
//   var gallery2 = $(gallery1).next();
//   var middleImg = $(gallery2).children("img:nth-child(3)").addClass("selected");
// });

$(function () {
  var $gallery1 = $("<div>");
  var $gallery2 = $("<div>");

  $("body").append($gallery1);
  $("body").append($gallery2);

  var allImages = ["img/friends.png", "img/himym.png", "img/raymond.jpg"];

  allImages.forEach(function (element) {
    var $image = $("<img>");
    $image.attr("src", element);
    $gallery1.append($image);
  });
  allImages.forEach(function (element) {
    var $image = $("<img>");
    $image.attr("src", element);
    $gallery2.append($image);
  });

  $("img:first").addClass("selected");

  $(".selected")
    .removeClass("selected")
    .parent()
    .next()
    .children()
    .eq(0)
    .addClass("selected");

  //******************************CSS********************************* */

  $("img").css({
    width: "33%",
  });

  $(".selected").css({
    border: " 2px solid red",
  });
});
