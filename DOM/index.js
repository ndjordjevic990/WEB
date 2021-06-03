// ****************************************************************************************
// Selecting One/Multiple Elements
// Create two unordered lists on the page.
// Create a function that selects the second list and applies a class that sets some
// background color to it.
// Create a second function that, when triggered, selects all li elements on the page.
// The function also sets a class that sets some bg color to every li element.
// Create one more unordered list and one more function
// The function​ should select only li elements from that last list
// Each li element should get a class that sets some bg color and transforms the
// text to uppercase.
// ****************************************************************************************/
(function () {
  document.querySelector(".second").className = "bg";
})();

(function () {
  document.querySelectorAll("li").forEach(function (element) {
    element.className = "li-bg";
  });
})();

(function () {
  document.querySelectorAll(".third li").forEach(function (element) {
    element.className = "li-third";
    element.style.textTransform = "uppercase";
  });
})();

// ****************************************************************************************
// Traversing
// Create two unordered lists. Each list should be wrapped in a div element. One li element in the second list should have a class “active”, which sets its background color.
// Create a function that selects the li element with class “active”.
// Remove the class from that element, and then select the first li element in the first unordered list using node relations.
// Apply class to that newly selected li element

//*************************************************************************************** */
(function () {
  var lii = document.querySelector(".active");
  lii.classList.remove("active");

  lii.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.className =
    "active";
})();
