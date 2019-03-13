/*eslint-env browser*/

function init() {
    "use strict";
    var login = window.document.getElementById("login");
    login.addEventListener("click", function () {
        window.open("login.html", "login", "width=400 , height=400");
    });
}

window.addEventListener("load", init);