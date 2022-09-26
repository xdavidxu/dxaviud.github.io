import defaultBackground from "/images/default-background.jpg";
import aquamarineBackground from "/images/aquamarine-background.jpg";
import crimsonBackground from "/images/crimson-background.jpg";
import goldBackground from "/images/gold-background.jpg";

const circles = document.getElementsByClassName(
  "circle"
) as HTMLCollectionOf<HTMLElement>;
let currentTheme = circles[0].dataset.theme;

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", function () {
    const theme = circles[i].dataset.theme;
    if (theme === currentTheme || theme == undefined) {
      return;
    }
    changeTheme(theme);
    expandCircle(circles[i]);
    normalizeCircle(localStorage.circleIndex);
    localStorage.circleIndex = i;
  });
}

function changeTheme(theme: string) {
  const root = document.querySelector(":root") as HTMLElement;
  const welcome = document.getElementById("welcome");
  if (root == null) {
    console.log("couldn't query :root");
    return;
  }
  if (welcome == null) {
    console.log("couldn't query welcome");
    return;
  }
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

function expandCircle(circle: HTMLElement) {
  circle.style.transform = "none";
  circle.style.width = `${CIRCLE_SIZE * SCALE_FACTOR}px`;
  circle.style.height = `${CIRCLE_SIZE * SCALE_FACTOR}px`;
}

function normalizeCircle(index: number) {
  circles[index].style.width = `${CIRCLE_SIZE}px`;
  circles[index].style.height = `${CIRCLE_SIZE}px`;
}

if ("circleIndex" in localStorage) {
  const circle = circles[localStorage.circleIndex];
  expandCircle(circle);
  const theme = circle.dataset.theme;
  if (theme != undefined) {
    changeTheme(theme);
  }
} else {
  expandCircle(circles[0]);
  if (circles[0].dataset.theme != undefined) {
    changeTheme(circles[0].dataset.theme);
  }
  localStorage.circleIndex = 0;
}

for (let i = 0; i < circles.length; ++i) {
  const circle = circles[i];
  circle.addEventListener("mouseover", () => {
    if (circle != circles[localStorage.circleIndex]) {
      circle.style.transform = "scale(1.2)";
    }
  });
  circle.addEventListener("mouseout", () => {
    circle.style.transform = "none";
  });
}
