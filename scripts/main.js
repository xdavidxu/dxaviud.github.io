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

const button = document.querySelector("button");
button.onclick = function() {
    setName();
}