// *******************************************************************************
//          InnerHTML
// Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
// Create a function that is used for building a dropdown/select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the select element.
// Add the whole dropdown list to DOM.

// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.
// ***************************************************************************
var array = ["Home", "Learn More", "Contact Us"];

function dropdownList(array, div) {
  var node = document.createElement("div"); // Div that serves as a container
  var body = document.querySelector("body");
  var script = document.querySelector("script");
  body.insertBefore(node, script);

  //   var form = document.createElement("label");
  //   node.appendChild(form);
  var select = document.createElement("select");
  node.appendChild(select);

  for (var i = 0; i < array.length; i++) {
    var opcija = document.createElement("option");
    opcija.innerHTML = array[i];
    select.appendChild(opcija);
  }
}
dropdownList(array, "div");
