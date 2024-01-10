const countNumbers = [];

let buttonOK = document.querySelector(".ok");
buttonOK.onclick = sumInput;

function sumInput() {
  let number = document.querySelector(".data").value;
  if (isNaN(number) || number == "" || number.match(/\s/)) {
    return 0;
  } else {
    countNumbers.push(number);
    number.onchahge = document.querySelector(".text").innerHTML =
      "Введите следующее значение:";
    document.querySelector(".data").value = "";
    console.log(countNumbers);
  }
  let button = document.querySelector(".ready");
  button.onclick = function getResult() {
    countNumbers.sort();
    document.querySelector(
      ".result1"
    ).innerHTML = `Массив в отсортированном по возрастанию виде: ${countNumbers}`;
    let length = countNumbers.length;
    let i = 0;
    let sum = 0;
    for (i; i < length; i++) {
      let num = countNumbers[i];
      console.log(+num);
      sum += +num;
    }
    document.querySelector(".result2").innerHTML = `Сумма массива = ${sum}`;
  };
  let buttonCancel = document.querySelector(".cancel");
  buttonCancel.onclick = function clearResult() {
    countNumbers.length = 0;
    document.querySelector(".result1").innerHTML = "";
    document.querySelector(".result2").innerHTML = "";
    document.querySelector(".text").innerHTML =
      "Введите первое значение и нажмите ок:";
  };
}
