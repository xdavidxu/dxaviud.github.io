// On load
let welcomeh2 = document.querySelector(".welcome h2");
welcomeh2.classList.add("fade-in", "expand");

// Hamburger menu
const toggler = document.querySelector(".toggler");

// this takes advantage of event delegation (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
const menuItemsList = document.querySelector("ul.menu-items-list");
menuItemsList.addEventListener("click", function () {
    toggler.click();
})

// Anti-Rona Lock System slides
let arlsSlideIndex = 0;
let arlsSlides = document.getElementsByClassName("arls-slide-img");
showImage();

let arlsLeftButton = document.querySelector(".arls-slides .slides-button.left");
let arlsRightButton = document.querySelector(".arls-slides .slides-button.right");
arlsLeftButton.addEventListener("click", function () {
    changeImage(-1)
});
arlsRightButton.addEventListener("click", function () {
    changeImage(+1)
});

function changeImage(delta) {
    if (Math.abs(delta) != 1) {
        throw "Error: delta not 1 or -1";
    }
    arlsSlideIndex += delta;
    if (arlsSlideIndex > arlsSlides.length - 1) {
        arlsSlideIndex = 0;
    } else if (arlsSlideIndex < 0) {
        arlsSlideIndex = arlsSlides.length - 1;
    }
    showImage();
}

function showImage() {
    for (let i = 0; i < arlsSlides.length; i++) {
        arlsSlides[i].style.display = "none";
    }
    arlsSlides[arlsSlideIndex].style.display = "block";

    let arlsTitle = document.getElementById("arls-slide-title");
    arlsTitle.textContent = arlsSlides[arlsSlideIndex].alt;
}

// Chess demo slides
let chessSlideIndex = 0;
let chessSlides = document.getElementsByClassName("chess-slide-video");
showVideo();

let chessLeftButton = document.querySelector(".chess-slides .slides-button.left");
let chessRightButton = document.querySelector(".chess-slides .slides-button.right");
chessLeftButton.addEventListener("click", function () {
    changeVideo(-1)
});
chessRightButton.addEventListener("click", function () {
    changeVideo(+1)
});

function changeVideo(delta) {
    if (Math.abs(delta) != 1) {
        throw "Error: delta not 1 or -1";
    }
    chessSlideIndex += delta;
    if (chessSlideIndex > chessSlides.length - 1) {
        chessSlideIndex = 0;
    } else if (chessSlideIndex < 0) {
        chessSlideIndex = chessSlides.length - 1;
    }
    showVideo();
}

function showVideo() {
    for (let i = 0; i < chessSlides.length; i++) {
        chessSlides[i].style.display = "none";
        chessSlides[i].pause();
    }
    chessSlides[chessSlideIndex].style.display = "block";

    let title = document.getElementById("chess-slide-title");
    title.textContent = chessSlides[chessSlideIndex].textContent;
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
        themeColor.href = "styles/none.css";
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
