window.onload = function () {
    var openPopupMap = document.querySelector("#openPopupMap");
    var openWriteusForm = document.querySelector("#openWriteusForm");

    var modalMap = document.querySelector(".modal.modal-map");
    var writeusForm = document.querySelector(".modal.modal-feedback");

    var closeModalMap = document.querySelector(".modal-map .modal-close");
    var closeWriteusForm = document.querySelector(".modal-feedback .modal-close");

    var slideBtn1 = document.querySelector("#btn-1");
    var slideBtn2 = document.querySelector("#btn-2");
    var slideBtn3 = document.querySelector("#btn-3");

    var deliveryBtn = document.querySelector("#deliveryBtn");
    var warrantyBtn = document.querySelector("#warrantyBtn");
    var creditBtn = document.querySelector("#creditBtn");

    function removeActiveClass() {
        var i = 0;
        var items = document.querySelectorAll(".service-navigation li");
        for (i = 0; i < items.length; i++) {
            items[i].classList.remove("active");
        }
    }

    function hideSliders() {
        var i = 0;
        var items = document.querySelectorAll(".slider-item");
        for (i = 0; i < items.length; i++) {
            items[i].classList.remove("active");
        }
    }

    function hideServiceContents() {
        var i = 0;
        var items = document.querySelectorAll(".service-item");
        for (i = 0; i < items.length; i++) {
            items[i].classList.remove("active");
        }
    }

    window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
            modalMap.classList.remove("modal-show");
            writeusForm.classList.remove("modal-show");
        }
    });

    slideBtn1.addEventListener("click", function (event) {
        var item = document.querySelector("#firstSlide");
        hideSliders();
        item.classList.add("active");
    });

    slideBtn2.addEventListener("click", function (event) {
        var item = document.querySelector("#secondSlide");
        hideSliders();
        item.classList.add("active");
    });

    slideBtn3.addEventListener("click", function (event) {
        var item = document.querySelector("#thirdSlide");
        hideSliders();
        item.classList.add("active");
    });

    deliveryBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var item = document.querySelector("#deliveryContent");
        hideServiceContents();
        removeActiveClass();
        item.classList.add("active");
        this.parentElement.classList.add("active");
    });

    warrantyBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var item = document.querySelector("#warrantyContent");
        hideServiceContents();
        removeActiveClass();
        item.classList.add("active");
        this.parentElement.classList.add("active");
    });

    creditBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var item = document.querySelector("#creditContent");
        hideServiceContents();
        removeActiveClass();
        item.classList.add("active");
        this.parentElement.classList.add("active");
    });

    closeWriteusForm.addEventListener("click", function (event) {
        event.preventDefault();
        writeusForm.classList.remove("modal-show");
    });

    closeModalMap.addEventListener("click", function (event) {
        event.preventDefault();
        modalMap.classList.remove("modal-show");
    });

    openWriteusForm.addEventListener("click", function (event) {
        event.preventDefault();
        writeusForm.classList.add("modal-show");
    });

    openPopupMap.addEventListener("click", function (event) {
        event.preventDefault();
        modalMap.classList.add("modal-show");
    });
};