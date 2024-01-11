let container = document.createElement("div");
container.innerHTML = `<button>Сгенерировать числа</button><div class="result1"></div><div class="result2"></div><div class="result3"></div><div class="result4"></div><div class="result5"></div><div class="result6"></div>`;
document.body.append(container);

let button = document.querySelector("button");
button.addEventListener("click", generateNumbers);

function generateNumbers() {
  let array = [];
  let min = -10;
  let max = 10;
  let sum = 0;
  let product = 1;

  for (let i = 0; i < 10; i++) {
    let n = Math.round(Math.random() * (max - min) + min);
    array[i] = n;
  }

  let arrayStr = array.join(" ");

  let minNum = Math.min(...array);
  let maxNum = Math.max(...array);

  for (let j = 0; j < array.length; j++) {
    let num = array[j];
    sum += num;
  }

  let average = sum / array.length;

  for (let k = 0; k < array.length; k++) {
    product *= array[k];
  }

  let finalProduct = product.toLocaleString();

  document.querySelector(".result1").textContent = `Сгенерировали: ${arrayStr}`;
  document.querySelector(".result2").textContent = `Минимальное: ${minNum}`;
  document.querySelector(".result3").textContent = `Максимальное: ${maxNum}`;
  document.querySelector(
    ".result4"
  ).textContent = `Среднее арифметическое: ${average}`;
  document.querySelector(".result5").textContent = `Сумма чисел: ${sum}`;
  document.querySelector(
    ".result6"
  ).textContent = `Произведение чисел: ${finalProduct}`;
}
