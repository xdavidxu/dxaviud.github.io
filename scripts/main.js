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
    if (src === "images/cat1.png") {
        image.setAttribute("src", "images/cat2.jpg");
        figureCaption.textContent = "Also from icatcare.org";
    } else {
        image.setAttribute("src", "images/cat1.png");
        figureCaption.textContent = "From icatcare.org";
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