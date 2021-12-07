const state = {
  rockCount: 0,
};

const addRock = () => {
  const newRock = document.createElement("span");
  const rockContainer = document.querySelector("#rockContainer");
  newRock.textContent = " 🪨 ";
  rockContainer.appendChild(newRock);
  state.rockCount += 1;
  const rockCountContainer = document.querySelector("#rockCount");
  rockCountContainer.textContent = `Rock Count: ${state.rockCount}`;
};

const darkMode = () => {
  body = document.querySelector("body");
  body.className = `${body.className} dark-mode-climbing-body`;
  header = document.querySelector("header");
  header.className = "dark-mode-climbing-header";
  links = document.querySelectorAll("a");
  for (link of links) {
    link.className = "dark-mode-climbing-link";
  }
};

const regularMode = () => {
  body = document.querySelector("body");
  body.className = "home-body climbing-body";
  header = document.querySelector("header");
  header.className = null;
  links = document.querySelectorAll("a");
  for (link of links) {
    link.className = null;
  }
};

const registerEventHandlers = () => {
  const rockButton = document.querySelector("#addRockButton");
  rockButton.addEventListener("click", addRock);

  const darkModeButton = document.querySelector("#dark-mode-button");
  darkModeButton.addEventListener("click", darkMode);

  const regularModeButton = document.querySelector("#regular-mode-button");
  regularModeButton.addEventListener("click", regularMode);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
