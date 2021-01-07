console.log("Hello World!");

const heading = document.querySelector("h1");
// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem("name");
//     myHeading.textContent = storedName;
// }

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

function setUserName() {
    const userName = prompt("Please enter your name.");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        heading.textContent = userName;
    }
}

const button = document.querySelector("button");
button.onclick = function() {
    setUserName();
}