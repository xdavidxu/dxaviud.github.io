import inViewport from "./in-viewport";

//Source: https://css-tricks.com/snippets/css/typewriter-effect/

class TypewriterAnimation {
  el: Element;
  prefix: string;
  toRotate: string[];
  period: number;
  txt: string;
  loopNum: number;
  isDeleting: boolean;

  constructor(el: Element, prefix: string, toRotate: string[], period: number) {
    this.el = el;
    this.prefix = prefix;
    this.toRotate = toRotate;
    this.period = period;
    this.txt = "";
    this.loopNum = 0;
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    if (!inViewport(this.el)) {
      const that = this;
      setTimeout(function () {
        that.tick();
      }, 100);
      return;
    }

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
  }
}

const elements = document.getElementsByClassName("typewrite");
for (let i = 0; i < elements.length; ++i) {
  const element = elements[i];
  const prefix = element.getAttribute("text-prefix");
  if (prefix == null) {
    console.log("typewrite element missing text-prefix attribute");
    continue;
  }
  const toRotate = element.getAttribute("text-array");
  const period = element.getAttribute("rotate-period");
  if (period == null) {
    console.log("typewrite element missing rotate-period attribute");
    continue;
  }
  if (toRotate) {
    new TypewriterAnimation(
      element,
      prefix,
      JSON.parse(toRotate),
      parseInt(period, 10) || 2000
    );
    console.log("Typewriter effect initialized");
  }
}
