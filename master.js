let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .hold span");

window.addEventListener("scroll", () => {
    if (window.scrollY >= section.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
});

let navLinks = document.querySelectorAll(".nav ul li a");
let sections = [
    document.querySelector(".landing"),
    document.querySelector(".services"),
    document.querySelector(".Protfolio"),
    document.querySelector(".about"),
    document.querySelector(".our-skills"),
    document.querySelector(".Pricing"),
    document.querySelector(".contact")
];

window.addEventListener("scroll", () => {

    sections.forEach((section) => {

        if (window.scrollY >= section.offsetTop - 200) {

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(`.nav ul li a[href="#${section.id}"]`);
            activeLink.classList.add("active");
        }
    });
});

let searchIcon = document.querySelector(".search i");
let searchInput = document.querySelector(".search input");

searchIcon.addEventListener("click", () => {
    searchInput.classList.toggle("show");
    searchIcon.style.display = "none";
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search")) {
        searchInput.classList.remove("show");
        searchIcon.style.display = "block";
    }
});

let landing = document.querySelector(".landing");
let leftArrow = document.querySelector(".landing .left");
let rightArrow = document.querySelector(".landing .right");
let balls = document.querySelectorAll(".landing .ball li");

let images = [
    "img/landing.jpg",
    "img/landing2.png",
];

let currentSlide = 0;

function changeSlide() {

    landing.style.backgroundImage = `url(${images[currentSlide]})`;

    balls.forEach((ball) => {
        ball.classList.remove("active");
    });

    balls[currentSlide].classList.add("active");
}

rightArrow.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide === images.length) {
        currentSlide = 0;
    }

    changeSlide();
});

leftArrow.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    changeSlide();
});

balls.forEach((ball, index) => {

    ball.addEventListener("click", () => {

        currentSlide = index;

        changeSlide();

    });

});

let portfolioLinks = document.querySelectorAll(".Protfolio .choise li");
let photo = document.querySelectorAll(".Protfolio .image-container img");

portfolioLinks.forEach((link) => {

    link.addEventListener("click", () => {

        portfolioLinks.forEach((link) => {
            link.classList.remove("active");
        });

        link.classList.add("active");
    });
});

portfolioLinks.forEach((choice) => {
    choice.addEventListener("click", () => {
        let el = choice.textContent;
        photo.forEach((img) => {
            if (img.getAttribute("data-category") === el || el === "All") {
                img.parentElement.style.display = "block";
            }else {
                img.parentElement.style.display = "none";
            }
        });
    });
});

let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .box .number");
let started = false;

window.addEventListener("scroll", () => {

    // Stats
    if (window.scrollY >= stats.offsetTop - 500) {
        if (!started) {
            numbers.forEach((num) => counter(num));
            started = true;
        }
    }
});

function counter(el) {
    let goal = Number(el.dataset.number);
    let counter = 0;
    let step = 100;

    let count = setInterval(() => {
        counter++;
        el.textContent = Math.floor((goal / step) * counter);
        if (counter === step) {
            clearInterval(count);
        }
    }, 1500 / step);
}