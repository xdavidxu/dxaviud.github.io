const root = document.querySelector(":root") as HTMLElement;

export const primaryColor = () => getVar("--primary-color");

export const setPrimaryColor = (color: string) =>
  setVar("--primary-color", color);

export const backgroundColor = () => getVar("--background-color");

export const setBackgroundColor = (color: string) =>
  setVar("--background-color", color);

export const textColor = () => getVar("--text-color");

export const setTextColor = (color: string) => setVar("--text-color", color);

export const overlayColor = () => getVar("--overlay-color");

export const setOverlayColor = (color: string) =>
  setVar("--overlay-color", color);

const getVar = (variable: string) =>
  getComputedStyle(root).getPropertyValue(variable);

const setVar = (variable: string, value: string) => {
  root.style.setProperty(variable, value);
};
