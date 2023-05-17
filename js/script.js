"use strict";

const ball = document.querySelector(".ball");
const themeContent = document.querySelector(".theme-content");
const link = document.querySelector("link[href='css/style.css']");

const moveBall = () => {
  ball.classList.toggle("light");
  if (link.getAttribute("href") == "css/style.css") {
    link.setAttribute("href", "css/night-mode.css");
  } else {
    link.setAttribute("href", "css/style.css");
  }
};
ball.addEventListener("click", moveBall);
