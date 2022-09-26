export {};

// On load
document.querySelector("#welcome h2")?.classList?.add("fade-in", "expand");

// Hamburger menu
const toggler = document.querySelector(".toggler") as HTMLElement;

// this takes advantage of event delegation (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
const menuItems = document.querySelectorAll("ul.menu-items-list a");
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function () {
    toggler.click();
  });
});

// Anti-Rona Lock System slides
let arlsSlideIndex = 0;
let arlsSlides = document.getElementsByClassName(
  "arls-slide-img"
) as HTMLCollectionOf<HTMLImageElement>;
showImage();

let arlsLeftButton = document.querySelector(
  ".arls-slides .slides-button.left"
) as HTMLButtonElement;
let arlsRightButton = document.querySelector(
  ".arls-slides .slides-button.right"
) as HTMLButtonElement;
arlsLeftButton.style.borderRadius = "8px";
arlsRightButton.style.borderRadius = "8px";
arlsLeftButton.addEventListener("click", function () {
  changeImage(-1);
});
arlsRightButton.addEventListener("click", function () {
  changeImage(+1);
});

function changeImage(delta: -1 | 1) {
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

  const arlsTitle = document.getElementById("arls-slide-title");
  if (arlsTitle == null) {
    return;
  }
  arlsTitle.textContent = arlsSlides[arlsSlideIndex].alt;
}

// Chess demo slides
let chessSlideIndex = 0;
let chessSlides = document.getElementsByClassName(
  "chess-slide-video"
) as HTMLCollectionOf<HTMLVideoElement>;
showVideo();

let chessLeftButton = document.querySelector(
  ".chess-slides .slides-button.left"
) as HTMLButtonElement;
let chessRightButton = document.querySelector(
  ".chess-slides .slides-button.right"
) as HTMLButtonElement;
chessLeftButton.style.borderRadius = "8px";
chessRightButton.style.borderRadius = "8px";
chessLeftButton.addEventListener("click", function () {
  changeVideo(-1);
});
chessRightButton.addEventListener("click", function () {
  changeVideo(+1);
});

function changeVideo(delta: -1 | 1) {
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

  const title = document.getElementById("chess-slide-title");
  if (title == null) {
    return;
  }
  title.textContent = chessSlides[chessSlideIndex].textContent;
}

document.querySelectorAll("h2").forEach((h2) => {
  h2.onclick = function () {
    const id = h2.parentElement?.getAttribute("id");
    console.log("location: " + window.location);
    window.location.href = "#" + id;
  };
});
