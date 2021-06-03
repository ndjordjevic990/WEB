function onInit() {
  var othermessage = "Other message";
  console.log(othermessage);
}
onInit();

/****************************************************************************************
                                    window.navigator
Create a function that prints out in the console the following information
  ● the platform on which the browser is running
  ● the information about the browser version
  ● the company that created that browser
Each piece of information should be printed out in a new row.
Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is
no Internet connection.
*****************************************************************************************/
//platform on which the browser is running

function getPlatform() {
  console.log(window.navigator.platform);
}

//information about the browser version

function getBrowserVersion() {
  console.log("browser: " + window.navigator.appName);
}
getBrowserVersion();

//company that created that browser

function getCompany() {
  console.log("company: " + window.navigator.vendor);
}
getCompany();

//check if the browser is online.

function isOnline() {
  if (navigator.onLine) {
    console.log("browser is: Online");
  } else {
    console.log("browser is: Offline");
  }
}
isOnline();

/****************************************************************************************
                                        window.screen
Create a function that prints out the following information in the console:
● current browser width and height
● max possible browser height
*****************************************************************************************/

function windowHeightAndWidth() {
  console.log("window.screen.availHeight:" + window.screen.availHeight);
  console.log("window.screen.height:" + window.screen.height);
  console.log("window.screen.availWidth:" + window.screen.availWidth);
  console.log("window.screen.width:" + window.screen.width);
}
windowHeightAndWidth();

/****************************************************************************************
                                        window.location
Write a function that prints out website’s url information in the console:

  ● full url address
  ● domain name
  ● used protocol
  ● parameters which are part of URL.
Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions
*****************************************************************************************/

function fullUrl() {
  console.log("Full URL Address: ", window.location.href);
  console.log("Domain Name: ", window.location.hostname);
  console.log("Used Protocol: ", window.location.protocol);
  console.log("Parameters of URL: ", window.location.pathname);
}
fullUrl();

// redirection

/****************************************************************************************
                                    window.localStorage
-Create a function that stores passed data in the browser local storage.
-Create a function that reads the stored data, and print it out in console. If there is no data, print "There is no data" in the console.
-Create a function that removes data from the local storage.

-Use the previously created functions to store/read/remove some data.
-Then add some data in storage and close the browser.
-Open the browser again on the same page and use the function to read the
stored value.

-Modify functions to work with sessionStorage instead of localStorage.
-Try same scenario as with localStorage to examine data livecycle.
*****************************************************************************************/
// populate local storage

function populateStorage() {
  localStorage.setItem("firstname", "Nikola");
  localStorage.setItem("lastname", "Djordjevic");
  localStorage.setItem("age", "30");
}
populateStorage();

// - reads the stored data, and print it out in console.

var readStorage = localStorage.getItem("firstname");
console.log(readStorage);

// - remove data from local storage
// window.localStorage.removeItem("firstname");

//

/****************************************************************************************
                                            window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back.
*****************************************************************************************/
window.history.go(-2);

/****************************************************************************************
                                          Window Methods

● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer is used in the confirm
dialog
● The format of the message in the dialog should be : We will submit this
answer now! &quot; + the answer
● If the user clicks OK, show alert with success message
● If the user clicks Cancel, dont show anything
/****************************************************************************************/
function greetingMessage() {
  alert("This is a greeting message");
  var answer = prompt("How many years do you have?");
  if (window.confirm("We will submit this answer now: " + answer)) {
    window.alert("Thanks for Visiting!");
  }
}
greetingMessage();
