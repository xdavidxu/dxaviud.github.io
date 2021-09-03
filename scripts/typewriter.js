//Original source: https://css-tricks.com/snippets/css/typewriter-effect/

const TypewriterAnimation = function (el, prefix, toRotate, period) {
    this.el = el;
    this.prefix = prefix;
    this.toRotate = toRotate;
    this.period = period;
    this.txt = "";
    this.loopNum = 0;
    this.tick();
    this.isDeleting = false;
};

TypewriterAnimation.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    const span = document.createElement("span");
    span.innerText = this.prefix + this.txt;
    span.style.fontSize = "xx-large";
    this.el.innerHTML = span.outerHTML;

    let delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    const that = this;
    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    const elements = document.getElementsByClassName("typewrite");
    for (const element of elements) {
        const prefix = element.getAttribute("text-prefix");
        const toRotate = element.getAttribute("text-array");
        const period = element.getAttribute("rotate-period");
        if (toRotate) {
            new TypewriterAnimation(
                element,
                prefix,
                JSON.parse(toRotate),
                parseInt(period, 10) || 2000
            );
        }
    }
    // for (var i = 0; i < elements.length; i++) {
    //     const prefix = elements[i].getAttribute("text-prefix");
    //     const toRotate = elements[i].getAttribute("text-array");
    //     const period = elements[i].getAttribute("rotate-period");
    //     if (toRotate) {
    //         new TypewriterAnimation(
    //             elements[i],
    //             prefix,
    //             JSON.parse(toRotate),
    //             parseInt(period, 10) || 2000
    //         );
    //     }
    // }
};
