const slideshows = document.getElementsByClassName("slideshow");

for (const slideshow of slideshows) {
    slideshow.style.position = "relative";
    slideshow.style.width = "min(100%, 1200px)";
    slideshow.style.height = "auto";
    slideshow.style.minHeight = slideshow.getAttribute("min-height") || "69vh";
    slideshow.style.marginLeft = "auto";
    slideshow.style.marginRight = "auto";
    slideshow.style.overflow = "hidden";

    const slides = slideshow.children;
    for (const slide of slides) {
        slide.style.width = "100%";
        slide.style.height = "auto";
        slide.style.marginLeft = "auto";
        slide.style.marginRight = "auto";
    }

    let i = 0;

    hideChildren(slides, (_) => true);
    slides[i].style.display = "block";

    const leftButton = document.createElement("button");
    leftButton.setAttribute("slideshow-button", "true");
    leftButton.textContent = "<";
    leftButton.addEventListener("click", () => {
        hideChildren(
            slides,
            (child) => !child.hasAttribute("slideshow-button")
        );
        do {
            --i;
            i = i < 0 ? slides.length - 1 : i;
        } while (slides[i].hasAttribute("slideshow-button"));
        slides[i].style.display = "block";
    });
    leftButton.style.left = "0";
    styleSlideshowBtn(leftButton);
    const rightButton = document.createElement("button");
    rightButton.setAttribute("slideshow-button", "true");
    rightButton.textContent = ">";
    rightButton.addEventListener("click", () => {
        hideChildren(
            slides,
            (child) => !child.hasAttribute("slideshow-button")
        );
        do {
            i = (i + 1) % slides.length;
        } while (slides[i].hasAttribute("slideshow-button"));
        slides[i].style.display = "block";
    });
    rightButton.style.right = "0";
    styleSlideshowBtn(rightButton);

    slideshow.appendChild(leftButton);
    slideshow.appendChild(rightButton);

    console.log("Slideshow initialized");
}

function hideChildren(children, filter) {
    for (const child of children) {
        if (filter(child)) {
            child.style.display = "none";
        }
    }
}

function styleSlideshowBtn(btn) {
    btn.style.position = "absolute";
    btn.style.width = "max(10%, 50px)";
    btn.style.height = "40px";
    btn.style.top = "calc((100% + 40px) / 2)";
    btn.style.fontSize = "x-large";
    btn.style.fontWeight = "1000";
    btn.style.border = "none";
    btn.style.backgroundColor = "white";
    btn.style.opacity = "0.5";
    btn.style.cursor = "pointer";
    btn.addEventListener("mouseover", () => {
        btn.style.opacity = "1";
        btn.style.color =
            getComputedStyle(document.querySelector(":root")).getPropertyValue(
                "--primary-color"
            ) || "orange";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.opacity = "0.5";
        btn.style.color = "black";
    });
}
