// On load
let welcomeh2 = document.querySelector("#welcome h2");
welcomeh2.classList.add("fade-in", "expand");

// Hamburger menu
const toggler = document.querySelector(".toggler");

// this takes advantage of event delegation (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
const menuItemsList = document.querySelector("ul.menu-items-list");
menuItemsList.addEventListener("click", function () {
  toggler.click();
});

// Anti-Rona Lock System slides
let arlsSlideIndex = 0;
let arlsSlides = document.getElementsByClassName("arls-slide-img");
showImage();

let arlsLeftButton = document.querySelector(".arls-slides .slides-button.left");
let arlsRightButton = document.querySelector(
  ".arls-slides .slides-button.right"
);
arlsLeftButton.addEventListener("click", function () {
  changeImage(-1);
});
arlsRightButton.addEventListener("click", function () {
  changeImage(+1);
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

let chessLeftButton = document.querySelector(
  ".chess-slides .slides-button.left"
);
let chessRightButton = document.querySelector(
  ".chess-slides .slides-button.right"
);
chessLeftButton.addEventListener("click", function () {
  changeVideo(-1);
});
chessRightButton.addEventListener("click", function () {
  changeVideo(+1);
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

document.querySelectorAll("h2").forEach((h2) => {
  h2.onclick = function () {
    const id = this.parentElement.getAttribute("id");
    window.location.href = "#" + id;
  };
});
