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

one.addEventListener("click", () => {result.value += 1});
two.addEventListener("click", () => {result.value += 2});
three.addEventListener("click", () => {result.value += 3});
four.addEventListener("click", () => {result.value += 4});
five.addEventListener("click", () => {result.value += 5});
six.addEventListener("click", () => {result.value += 6});
seven.addEventListener("click", () => {result.value += 7});
eight.addEventListener("click", () => {result.value += 8});
nine.addEventListener("click", () => {result.value += 9});
zero.addEventListener("click", () => {result.value += 0});

let operator;
// input.value = null
// result.value = null

divide.addEventListener("click", () => {

  input.value += result.value + divide.textContent;
  result.value = null
  operator = "/";
});
multiply.addEventListener("click", () => {
  input.value += result.value +  multiply.textContent
  result.value = null
  operator = "*";
});
minus.addEventListener("click", () => {
  input.value += result.value + minus.textContent;
  result.value = null
  operator = "-";
});

plus.addEventListener("click", () => {
  input.value += result.value  + plus.textContent;
  result.value = null
  operator = "+"
});
remainder.addEventListener("click", ()=> {
  input.value += result.value + remainder.textContent;
  result.value = null
  operator = "%"
})

equal.addEventListener("click", () => {
  let inputVal = parseInt(input.value);
  let resultVal = parseInt(result.value);
 
  switch(operator) {
    case "+": 
        result.value = inputVal + resultVal;
        input.value = result.value
        break;
    case "-": 
        result.value = inputVal - resultVal;
        break;
    case "%": 
        result.value = inputVal % resultVal;
        break;
    case "*": 
        result.value = inputVal * resultVal;
        break;
    case "/":
        result.value = inputVal / resultVal;
        break;
    default: 
        result.value = "Invalid operator";
  }
});

clear.addEventListener("click", ()=> {input.value = ""; result.value = ""})
del.addEventListener("click", () => { result.value = result.value.slice(0,-1)})
negative.addEventListener("click", () => {result.value = "-" + result.value})

const calc = () => {
  
}


