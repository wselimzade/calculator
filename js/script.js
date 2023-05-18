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
const zero = document.querySelector("#zero");

const dot = document.querySelector("#dot")

const clear = document.querySelector("#C");
const del = document.querySelector("#delete");

const negative = document.querySelector("#negative");
const remainder = document.querySelector("#remainder");

const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");

const input = document.querySelector("#input");
const result = document.querySelector("#result");

let rhas = false;

one.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 1;
});
two.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 2;
});
three.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 3;
});
four.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 4;
});
five.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 5;
});
six.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 6;
});
seven.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 7;
});
eight.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 8;
});
nine.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 9;
});
zero.addEventListener("click", () => {
  if (rhas) {
    result.value = "";
    rhas = false;
  }
  result.value += 0;
});

dot.addEventListener("click", () => {
  if (rhas) {
    result.value = "0."; // İlk ondalık basamağı eklemek için "0." değerini atayın
    rhas = false;
  } else if (result.value.indexOf(".") === -1) {
    // Eğer sonuçta daha önce nokta yoksa
    result.value += "."; // Noktayı ekle
  }
});

let operator;

divide.addEventListener("click", () => {
  input.value += result.value + divide.textContent;
  result.value = null;
  operator = "/";
});
multiply.addEventListener("click", () => {
  input.value += result.value + multiply.textContent;
  result.value = null;
  operator = "*";
});
minus.addEventListener("click", () => {
  input.value += result.value + minus.textContent;
  result.value = null;
  operator = "-";
});
plus.addEventListener("click", () => {
  input.value += result.value + plus.textContent;
  result.value = null;
  operator = "+";
});
remainder.addEventListener("click", () => {
  input.value += result.value + remainder.textContent;
  result.value = null;
  operator = "%";
});

equal.addEventListener("click", () => {
  let inputVal = parseFloat(input.value);
  let resultVal = parseFloat(result.value);
  let value = resultVal;
  let calculationResult;

  switch (operator) {
    case "+":
      calculationResult = inputVal + resultVal;
      break;
    case "-":
      calculationResult = inputVal - resultVal;
      break;
    case "%":
      calculationResult = inputVal % resultVal;
      break;
    case "*":
      calculationResult = (inputVal * resultVal);
      break;
    case "/":
      calculationResult = inputVal / resultVal;
      break;
    default:
      result.value = "Invalid operator";
  }

  if (Number.isInteger(calculationResult)) {
    result.value = calculationResult.toFixed(0);
  } else {
    result.value = calculationResult.toFixed(2);
  }

  input.value = "";
  rhas = true;
});

clear.addEventListener("click", () => {
  input.value = "";
  result.value = "";
  rhas = false;
});
del.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
});
negative.addEventListener("click", () => {
  result.value = "-" + result.value;
});
