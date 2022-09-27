export {};

const elements = document.getElementsByClassName(
  "scroll-fadein"
) as HTMLCollectionOf<HTMLElement>;

for (let i = 0; i < elements.length; ++i) {
  const e = elements[i];
  e.style.opacity = "0";
  e.style.marginTop = "100px";
}

const fadein = () => {
  for (let i = 0; i < elements.length; ++i) {
    const e = elements[i];
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = e.getBoundingClientRect();
    const threshold = elemRect.top - bodyRect.top - window.innerHeight / 2;
    if (document.documentElement.scrollTop > threshold) {
      e.style.opacity = "1";
      e.style.transition = "0.7s ease-out";
      e.style.transform = `translateY(-${e.style.marginTop})`;
    }
  }
};

fadein();

document.addEventListener("scroll", fadein);
