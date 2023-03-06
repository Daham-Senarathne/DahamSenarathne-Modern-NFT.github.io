var slider = document.getElementById("slider");
function sliderOpen() {
    slider.style.right = "0";
    slider.classList.add("shadow-lg");
}
function sliderClose() {
    slider.style.right = "-50%";
    slider.classList.remove("shadow-lg");
}

$(document).ready(function(){
    $(".count").counterUp({
        delay: 10,
        time: 1500,
    });
});

var swiper = new Swiper("#trending", {
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper("#gallary2", {
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper("#gallary1", {
    loop: true,
    centeredSlides: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
    },
});
VanillaTilt.init(document.querySelectorAll(".feature"), {
    max: 25,
    speed: 400,
    glare: true,
    maxGlare: .1,
});