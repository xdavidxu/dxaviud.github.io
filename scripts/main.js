console.log("Hello World!");

const heading = document.querySelector("h1");

function setName() {
    const name = prompt("Please enter your name.");
    if (!name) {
        setName();
    } else {
        heading.textContent = name;
    }
}

const image = document.querySelector("img");
const figureCaption = document.querySelector("figcaption");
image.onclick = function() {
    const src = image.getAttribute("src");
    if (src === "https://via.placeholder.com/1200x600") {
        image.setAttribute("src", "https://via.placeholder.com/1200x800");
        figureCaption.textContent = "Another placeholder image";
    } else {
        image.setAttribute("src", "https://via.placeholder.com/1200x600");
        figureCaption.textContent = "Placeholder image";
    }
}

const iframe = document.querySelector("iframe");
iframe.setAttribute("src", "https://www.youtube.com/embed/GwaRztMaoY0");

const changeNameButton = document.getElementById("change-name");
changeNameButton.onclick = function() {
    setName();
}

var slideIndex = 0;
showVideo(slideIndex);

function changeVideo(n) {
  showVideo(slideIndex += n);
}

function showVideo(n) {
    var i;
    var slides = document.getElementsByClassName("chessSlides");
    var title = document.getElementById("chessSlideTitle");
    if (n > slides.length - 1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    title.textContent = slides[slideIndex].textContent;
}