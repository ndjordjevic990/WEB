//****************************INTRO************************************** */
// Create a page that is using the jQuery library. Print ‘Hello, world!’ in console when DOM loads
/**********************************************************************/
$(function () {
  $(console.log("Hello World!"));

  //****************************SELECTING************************************** */
  // Create a page that contains navigation (ul element)
  // Navigation should contain odd number of elements
  // Select the first element of the list and give it a bottom border
  // Select all list elements and transform their text to uppercase
  // Select active element of the list and change its font color
  // Find the middle one and change its background color
  /**********************************************************************/
  $("ul li:first").addClass("border");
  $("ul li").addClass("to-upper-case");
  $("ul li.active").addClass("new-active");

  var middleLi = parseInt($("li").length / 2);
  $("ul li:eq(2)").addClass("bg-color");
});
