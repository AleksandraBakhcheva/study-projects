class Calculator {
  static getSum(a, b) {
    return a + b;
  }
  static getDiff(a, b) {
    return a - b;
  }
  static getDivison(a, b) {
    return a / b;
  }
  static getProd(a, b) {
    return a * b;
  }
}

let firstNum;
let secondNum;

function getNumbers() {
  firstNum = document.querySelector(".number1").value;
  secondNum = document.querySelector(".number2").value;
}

let sum = document.querySelector(".sum");
sum.addEventListener("click", function () {
  getNumbers(firstNum, secondNum);
  let result = Calculator.getSum(+firstNum, +secondNum);
  getResultAndClearInput(result);
});

let difference = document.querySelector(".difference");
difference.addEventListener("click", function () {
  getNumbers(firstNum, secondNum);
  let result = Calculator.getDiff(+firstNum, +secondNum);
  getResultAndClearInput(result);
});

let division = document.querySelector(".division");
division.addEventListener("click", function () {
  getNumbers(firstNum, secondNum);
  let result = Calculator.getDivison(+firstNum, +secondNum);
  getResultAndClearInput(result);
  if (secondNum == 0) {
    document.querySelector("#total_result").innerHTML =
      "Dividing by zero is not allowed!";
    document.querySelector("#total_result").style.color = "red";
  }
});

let product = document.querySelector(".product");
product.addEventListener("click", function () {
  getNumbers(firstNum, secondNum);
  let result = Calculator.getProd(+firstNum, +secondNum);
  getResultAndClearInput(result);
});

function getResultAndClearInput(result) {
  document.querySelector(
    "#total_result"
  ).innerHTML = `Your result = ${result}!`;
  document.querySelector("#total_result").style.color = "black";
  document.querySelector("#number1").value = "";
  document.querySelector("#number2").value = "";
}
