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

const input = document.querySelector("#input");
const result = document.querySelector("#result");
const keys = document.querySelector(".calculator-keys");

let inputValue = null;
let resultValue = "0";
let operator = null;
let waitingForSecondValue = false;

updateResult();
function updateResult() {
  result.value = resultValue;
}

keys.addEventListener("click", function (e) {
  const element = e.target;
  const evalue = element.value;

  // if (!element.matches("button")) return;
  if (!element.matches("button")) return;

  switch (evalue) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
    case "=":
      handleOperator(evalue);
      break;
    case ".":
      inputDecimal();
      break;
    case "clear":
      clear();
      break;
    default:
      inputNumber(evalue);
      break;
    case "delete":
      delChar();
      break;
    case "negative":
      negative();
      break;
  }

  updateResult();
});

function handleOperator(nextOperator) {
  const value = parseFloat(resultValue);

  if (operator && waitingForSecondValue) {
    operator = nextOperator;
    return;
  }

  if (inputValue === null) {
    inputValue = value;
  } else if (operator) {
    const calc = calculate(inputValue, value, operator);
    resultValue = `${parseFloat(calc.toFixed(7))}`;
    inputValue = calc;
  }

  waitingForSecondValue = true;
  operator = nextOperator;
  input.value = resultValue;
}

function calculate(first, second, operator) {
  if (operator === "+") {
    return first + second;
  } else if (operator === "-") {
    return first - second;
  } else if (operator === "*") {
    return first * second;
  } else if (operator === "/") {
    return first / second;
  } else if (operator === "%") {
    return first % second;
  }
  return second;
}

function inputNumber(num) {
  if (waitingForSecondValue) {
    resultValue = num;
    waitingForSecondValue = false;
  } else {
    resultValue = resultValue === "0" ? num : resultValue + num;
  }
}

function inputDecimal() {
  if (!resultValue.includes(".")) {
    resultValue += ".";
  }
}

function clear() {
  resultValue = "0";
  input.value = null;
}

function delChar() {
  if (resultValue.length > 1) resultValue = resultValue.slice(0, -1);
  else if (resultValue.length == 1) resultValue = 0;
}

function negative() {
  if (resultValue != 0) {
    resultValue = parseFloat(resultValue) * -1;
  }
}
