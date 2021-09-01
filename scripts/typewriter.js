//Source: https://css-tricks.com/snippets/css/typewriter-effect/

const TxtType = function (el, initialValue, toRotate, period) {
    this.initialValue = initialValue;
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    const span = document.createElement("span");
    span.setAttribute("class", "wrap");
    span.innerText = this.initialValue + this.txt;
    span.style.fontSize = "xx-large";
    this.el.innerHTML = span.outerHTML;

    var that = this;
    var delta = 150 - Math.random() * 100;

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

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    const elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
        const initialValue = elements[i].getAttribute("text-prefix");
        const toRotate = elements[i].getAttribute("text-array");
        const period = elements[i].getAttribute("rotate-period");
        if (toRotate) {
            new TxtType(
                elements[i],
                initialValue,
                JSON.parse(toRotate),
                period
            );
        }
    }
};
