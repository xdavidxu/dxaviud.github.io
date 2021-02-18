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
    if (n > slides.length - 1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1};
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
let themeColor = document.getElementById("theme-color");

for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function() {
        console.log("clicked circle!");
        let theme = this.dataset.theme;
        changeTheme(theme);
    });
}

function changeTheme(theme) {
    if (theme == "default") {
        themeColor.href = "";
    } else if (theme == "aquamarine") {
        themeColor.href = "styles/aquamarine.css";
    } else if (theme == "crimson") {
        themeColor.href = "styles/crimson.css";
    } else if (theme == "gold") {
        themeColor.href = "styles/gold.css";
    }
}