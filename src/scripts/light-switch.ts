import { setBackgroundColor, setTextColor } from "./css-vars";

const lightSwitch = document.getElementById("light-switch") as HTMLDivElement;
lightSwitch.textContent = "Light";
lightSwitch.style.right = "5em";
lightSwitch.style.top = "50%";
lightSwitch.style.color = "var(--text-color)";
lightSwitch.style.backgroundColor = "var(--primary-color)";
lightSwitch.style.height = "2em";
lightSwitch.style.width = "4em";
lightSwitch.style.fontFamily = "Cambria";
lightSwitch.style.fontWeight = "550";
lightSwitch.style.userSelect = "none";
lightSwitch.style.cursor = "pointer";
lightSwitch.style.display = "flex";
lightSwitch.style.justifyContent = "center";
lightSwitch.style.alignItems = "center";
lightSwitch.style.transition = "background-color 0.2s ease-in";
lightSwitch.style.position = "absolute";
lightSwitch.parentElement!.style.position = "relative";
lightSwitch.addEventListener("mouseover", () => {
  if (lightSwitch.textContent == "Dark") {
    lightSwitch.style.backgroundColor = "black";
  } else {
    lightSwitch.style.backgroundColor = "white";
  }
});
lightSwitch.addEventListener("mouseout", () => {
  lightSwitch.style.backgroundColor = "var(--primary-color)";
});
lightSwitch.addEventListener("click", () => {
  if (lightSwitch.textContent == "Dark") {
    lightSwitch.textContent = "Light";
    lightSwitch.style.backgroundColor = "white";
    setBackgroundColor("rgba(25, 25, 25, 1)");
    setTextColor("white");
    welcome.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    lightSwitch.textContent = "Dark";
    lightSwitch.style.backgroundColor = "black";
    setBackgroundColor("rgba(230, 230, 230, 1)");
    setTextColor("black");
    welcome.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
});

const welcome = document.getElementById("welcome") as HTMLElement;
