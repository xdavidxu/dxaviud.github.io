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