var body = document.querySelector("body");
var input = document.querySelector("#search-box");
var divUser = document.querySelector(".div-style");
var gallery = document.querySelector("#gallery");
var section = document.querySelector("section");

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    var request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://api.github.com/search/users?q=" + input.value + "&per_page=20"
    );
    request.send();

    gallery.innerHTML = "";
    section.innerHTML = "";

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
        //****************************** ON CLICK ACTION **************************** */
        user.addEventListener("click", function getUserInfo(event) {
          var username = event.currentTarget.querySelector("h3").textContent;
          console.log(username);

          var requestRepo = new XMLHttpRequest();
          requestRepo.open(
            "GET",
            "https://api.github.com/users/" + username + "/repos"
          );
          requestRepo.send();

          requestRepo.onload = function () {
            var dataRepo = JSON.parse(requestRepo.responseText);
            console.log(dataRepo);
            gallery.innerHTML = "";

            for (var i = 0; i < dataRepo.length; i++) {
              var divRepository = document.createElement("div");
              divRepository.className = "repository";
              var header = document.createElement("h4");
              var paragraph = document.createElement("p");

              var a = document.createElement("a");
              a.textContent = dataRepo[i].name;
              a.setAttribute("href", dataRepo[i].svn_url);

              paragraph.textContent = dataRepo[i].language;
              header.appendChild(a);

              divRepository.appendChild(header);
              divRepository.appendChild(paragraph);
              section.appendChild(divRepository);
            }
          };
        });
        //*********************************************************************** */
        gallery.appendChild(user);
      }
    };
  }
});
