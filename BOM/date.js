//TASK 1. Print out the whole date object in the console.
var wholeDate = Date();
console.log("Whole data object is " + wholeDate);

//TASK 2. Print out the current time in the console.

var now = new Date();
var currentTime = now.toLocaleTimeString();
console.log("Current Time is " + currentTime);

//TASK 3. Print out the current date in the console.

var now = new Date();
var currentDate = now.toLocaleDateString();
console.log("Current Date is " + currentDate);
