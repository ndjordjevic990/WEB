//**********************************************************************************
// Access/Update Text Node
// Create an unordered list containing <li> items that represent navigation.
// Create a function that takes text from one of the <li> elements and presents it on screen using alert.

// Create one more function.
// The function should take some text as an argument.
// The function should select the last <li> element in the list and replace its text with text passed as the function argument.
//************************************************************************************** */
function alertText(num) {
  var list = document.querySelectorAll("ul li");
  if (num <= list.length) {
    var selected = list[num - 1];
    selected.className = "selected";
    alert(selected.textContent);
    return selected;
  } else {
    return alert("Enter the number between 1-5");
  }
}

alertText(5);

function replaceText(someText) {
  var lastItem = document.querySelector("ul li:last-of-type");
  lastItem.textContent = someText;
  return lastItem;
}

replaceText("This is replace text");
