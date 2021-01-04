const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

console.log("Hello World!");

let image = document.querySelector("img");
let figureCaption = document.querySelector("figcaption");
image.onclick = function() {
    let src = image.getAttribute("src");
    if (src === "images/cat1.png") {
        image.setAttribute("src", "images/cat2.jpg");
        figureCaption.textContent = "Also from icatcare.org";
    } else {
        image.setAttribute("src", "images/cat1.png");
        figureCaption.textContent = "From icatcare.org";
    }
}

function setUserName() {
    let userName = prompt("Please enter your name.");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        myHeading.textContent = "Hello " + userName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello " + storedName;
}

let button = document.querySelector("button");
button.onclick = function() {
    setUserName();
}