import defaultBackground from "/images/default-background.jpg";
import aquamarineBackground from "/images/aquamarine-background.jpg";
import crimsonBackground from "/images/crimson-background.jpg";
import goldBackground from "/images/gold-background.jpg";

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

const root = document.querySelector(":root");
const welcome = document.getElementById("welcome");

function changeTheme(theme) {
  currentTheme = theme;
  if (theme == "default") {
    root.style.setProperty("--primary-color", "#0395de");
    welcome.style.backgroundImage = `url("${defaultBackground}")`;
  } else if (theme == "aquamarine") {
    root.style.setProperty("--primary-color", "aquamarine");
    welcome.style.backgroundImage = `url("${aquamarineBackground}")`;
  } else if (theme == "crimson") {
    root.style.setProperty("--primary-color", "crimson");
    welcome.style.backgroundImage = `url("${crimsonBackground}")`;
  } else if (theme == "gold") {
    root.style.setProperty("--primary-color", "gold");
    welcome.style.backgroundImage = `url("${goldBackground}")`;
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

for (const circle of circles) {
  circle.addEventListener("mouseover", () => {
    if (circle != circles[localStorage.circleIndex]) {
      circle.style.transform = "scale(1.2)";
    }
  });
  circle.addEventListener("mouseout", () => {
    circle.style.transform = "none";
  });
}
