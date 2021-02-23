console.log("Hello World!");

var slideIndex = 0;
showVideo(slideIndex);

function changeVideo(n) {
    showVideo(slideIndex += n);
}

function showVideo(n) {
    var i;
    var slides = document.getElementsByClassName("chess-slide-video");
    var title = document.getElementById("chess-slide-title");
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].pause();
    }
    slides[slideIndex].style.display = "block";
    title.textContent = slides[slideIndex].textContent;
}

const toggler = document.getElementsByClassName("toggler");

function closeHamburger() {
    toggler[0].click();
}

let circles = document.getElementsByClassName("circle");
localStorage.circleIndex = null;

for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function () {
        console.log("clicked circle!");
        let theme = this.dataset.theme;
        changeTheme(theme);
        expandCircle(this);
        normalizeCircle(localStorage.circleIndex);
        localStorage.circleIndex = i;
    });
}

let themeColor = document.getElementById("theme-color");
let welcome = document.getElementsByClassName("welcome");

function changeTheme(theme) {
    if (theme == "default") {
        themeColor.href = "";
        welcome[0].style.backgroundImage =
            'url("../images/default-background.jpg")';
    } else if (theme == "aquamarine") {
        themeColor.href = "styles/aquamarine.css";
        welcome[0].style.backgroundImage =
            'url("../images/aquamarine-background.jpg")';
    } else if (theme == "crimson") {
        themeColor.href = "styles/crimson.css";
        welcome[0].style.backgroundImage =
            'url("../images/crimson-background.jpg")';
    } else if (theme == "gold") {
        themeColor.href = "styles/gold.css";
        welcome[0].style.backgroundImage =
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

if (localStorage.circleIndex === null) {
    expandCircle(circles[localStorage.circleIndex]);
} else {
    expandCircle(circles[0]);
    localStorage.circleIndex = 0;
}

