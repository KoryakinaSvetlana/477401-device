window.onload = function () {
    var menuService = document.querySelectorAll(".service-navigation .btn");
    var writeUsBtn = document.querySelector(".contact .btn");

    menuService.addEventListener("click", function (event) {
        event.preventDefault();
    });

    writeUsBtn.addEventListener("click", function (event) {
        event.preventDefault();
    });

};