var body = document.querySelector("body");
var input = document.querySelector("#search-box");
var divUser = document.querySelector(".div-style");
var gallery = document.querySelector("#gallery");

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    var request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://api.github.com/search/users?q=" + input.value + "&per_page=20"
    );
    request.send();

    gallery.innerHTML = "";

    request.onload = function () {
      var data = JSON.parse(request.responseText);

      for (var i = 0; i < data.items.length; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", data.items[i].avatar_url);

        var name = document.createElement("h3");
        name.textContent = data.items[i].login;

        var user = document.createElement("div");
        user.setAttribute("class", "div-style");
        user.appendChild(image);
        user.appendChild(name);
        //ovde je issue - vraca poslednjeg clana
        gallery.addEventListener("click", function getUserInfo() {
          var username = user.querySelector("h3").textContent;
          console.log(username);
        });
        gallery.appendChild(user);
      }
    };
  }
});

// function getUserInfo() {
//     user.onclick = function (event) {
//       var username = event.currentTarget.querySelector("h3").textContent;
//   console.log(data);

// var requestRepo = new XMLHttpRequest();
// requestRepo.open(
//   "GET",
//   "https://api.github.com/search/users/" + username + "/repos"
// );
// request.send();

// requestRepo.onload = function () {
//   var dataRepo = JSON.parse(requestRepo.responseText);
//   console.log(dataRepo);
// };
