const darkMode = () => {
  body = document.querySelector("body");
  body.className = `${body.className} dark-mode-climbing-body`;
  header = document.querySelector("header");
  header.className = `${header.className} dark-mode-climbing-header`;
  links = document.querySelectorAll("a");
  for (link of links) {
    link.className = `${link.className} dark-mode-climbing-link`;
  }
};

const regularMode = () => {
  body = document.querySelector("body");
  body.classList.remove("dark-mode-climbing-body");
  header = document.querySelector("header");
  header.classList.remove("dark-mode-climbing-header");
  links = document.querySelectorAll("a");
  for (link of links) {
    link.classList.remove("dark-mode-climbing-link");
  }
};

const registerEventHandlers = () => {
  const darkModeButton = document.querySelector("#dark-mode-button");
  darkModeButton.addEventListener("click", darkMode);

  const regularModeButton = document.querySelector("#regular-mode-button");
  regularModeButton.addEventListener("click", regularMode);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
