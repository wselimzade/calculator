"use strict";

const ball = document.querySelector(".ball");
const themeContent = document.querySelector(".theme-content");
const toggleBall = () => {
  ball.classList.toggle("light");
  document.body.style.backgroundColor = "#F1F2F3";
  themeContent.style.backgroundColor = "#ffffff";

  if (!ball.classList.contains("light")) {
    document.body.style.backgroundColor = "#17171C";
    themeContent.style.backgroundColor = "#2E2F38";
  }
};
ball.addEventListener("click", toggleBall);

