"use strict";

// change theme
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

// calculator

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero")

const clear = document.querySelector("#C");
const del = document.querySelector("#delete");

const negative = document.querySelector("#negative");
const remainder = document.querySelector("#remainder");

const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal")

const input = document.querySelector("#input");
const result = document.querySelector("#result");

one.addEventListener("click", () => {input.value += "1"});
two.addEventListener("click", () => {input.value += "2"});
three.addEventListener("click", () => {input.value += "3"});
four.addEventListener("click", () => {input.value += "4"});
five.addEventListener("click", () => {input.value += "5"});
six.addEventListener("click", () => {input.value += "6"});
seven.addEventListener("click", () => {input.value += "7"});
eight.addEventListener("click", () => {input.value += "8"});
nine.addEventListener("click", () => {input.value += "9"});
zero.addEventListener("click", () => {input.value += "0"});

divide.addEventListener("click", () => {input.value += divide.textContent});
multiply.addEventListener("click", () => {input.value += multiply.textContent});
minus.addEventListener("click", () => {input.value += minus.textContent});
plus.addEventListener("click", () => {input.value += plus.textContent});
equal.addEventListener("click", () => {result.value = input.value});

clear.addEventListener("click", ()=> {input.value = ""; result.value = ""})




