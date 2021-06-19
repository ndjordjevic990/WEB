//****************************INSERTING ELEMENTS************************************** */
// Start with a blank HTML page
// Using just JS (jQuery), create an image gallery
// All links to images in the gallery should be elements of the same array!
// When the gallery is created and visible on the page, create gallery title and insert it before the gallery images
// Go through gallery images and set a random size to each gallery image
/**************************************************************************************/

$(function () {
  var $gallery = $("<div>");
  $("body").append($gallery);

  var title = $("<h2>Inserting Elements Gallery</h2>");
  $gallery.append(title);

  $("gallery").prepend(title);
  var allImages = [
    "img/friends.png",
    "img/himym.png",
    "img/lucy.jpg",
    "img/raymond.jpg",
    "img/tenet.jpg",
  ];

  allImages.forEach(function (element) {
    var $image = $("<img>");
    $image.attr("src", element);
    $image.width(parseInt(Math.random() * 200 + 100));
    $gallery.append($image);
  });

  //****************************BONUS************************************************** */
  // Set a green border around each image whose width is less than 200px up until the first one that doesnt meet that requirement (i.e. when you get to the first img that is more than 200px wide, stop checking and setting green border).
  //*********************************************************************************** */
  var $imagesWithBorders = $("img");
  $imagesWithBorders.each(function () {
    if ($(this).width() < 200) {
      $(this).addClass("border");
      // $(this).css({
      //   border: "5px solid green",
      // });
    } else {
      return false;
    }
  });
});
