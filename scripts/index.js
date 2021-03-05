// On load
window.onload = function() {
    let welcomeH2 = document.querySelector(".welcome h2");
    welcomeH2.classList.add("fade-in", "expand");
}

// Hamburger menu
const toggler = document.querySelector(".toggler");

// this takes advantage of event delegation (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
const menuItemsList = document.querySelector("ul.menu-items-list");
menuItemsList.addEventListener("click", function () {
    toggler.click();
})

// Chess demo slides
let slideIndex = 0;
let slides = document.getElementsByClassName("chess-slide-video");
showVideo();

let leftButton = document.querySelector(".chess-slides-button.left");
let rightButton = document.querySelector(".chess-slides-button.right");
leftButton.addEventListener("click", function () {
    changeVideo(-1)
});
rightButton.addEventListener("click", function () {
    changeVideo(+1)
});

function changeVideo(delta) {
    if (Math.abs(delta) != 1) {
        throw "Error: delta not 1 or -1";
    }
    slideIndex += delta;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showVideo();
}

function showVideo() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].pause();
    }
    slides[slideIndex].style.display = "block";

    let title = document.getElementById("chess-slide-title");
    title.textContent = slides[slideIndex].textContent;
}

// Theme picker
let circles = document.getElementsByClassName("circle");
let currentTheme = circles[0].dataset.theme;

for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function () {
        let theme = this.dataset.theme;
        if (theme === currentTheme) {
            return;
        }
        changeTheme(theme);
        expandCircle(this);
        normalizeCircle(localStorage.circleIndex);
        localStorage.circleIndex = i;
    });
}

let themeColor = document.getElementById("theme-color");
let welcome = document.querySelector(".welcome");

function changeTheme(theme) {
    currentTheme = theme;
    if (theme == "default") {
        themeColor.href = "";
        welcome.style.backgroundImage =
            'url("../images/default-background.jpg")';
    } else if (theme == "aquamarine") {
        themeColor.href = "styles/aquamarine.css";
        welcome.style.backgroundImage =
            'url("../images/aquamarine-background.jpg")';
    } else if (theme == "crimson") {
        themeColor.href = "styles/crimson.css";
        welcome.style.backgroundImage =
            'url("../images/crimson-background.jpg")';
    } else if (theme == "gold") {
        themeColor.href = "styles/gold.css";
        welcome.style.backgroundImage =
            'url("../images/gold-background.jpg")';
    }
}

const SCALE_FACTOR = 1.2;
const CIRCLE_SIZE = 25;

function expandCircle(circle) {
    circle.style.width = `${CIRCLE_SIZE * SCALE_FACTOR}px`;
    circle.style.height = `${CIRCLE_SIZE * SCALE_FACTOR}px`;
}

function normalizeCircle(index) {
    circles[index].style.width = `${CIRCLE_SIZE}px`;
    circles[index].style.height = `${CIRCLE_SIZE}px`;
}

if ("circleIndex" in localStorage) {
    expandCircle(circles[localStorage.circleIndex]);
    changeTheme(circles[localStorage.circleIndex].dataset.theme);
} else {
    expandCircle(circles[0]);
    changeTheme(circles[0].dataset.theme);
    localStorage.circleIndex = 0;
}
