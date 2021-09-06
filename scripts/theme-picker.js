const circles = document.getElementsByClassName("circle");
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

const themeColor = document.getElementById("theme-color");
const welcome = document.getElementById("welcome");

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
        welcome.style.backgroundImage = 'url("../images/gold-background.jpg")';
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
