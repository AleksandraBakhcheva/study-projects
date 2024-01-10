class Cat {
  constructor(
    catname,
    ownerName,
    ownerPhone,
    ownerEmail,
    catBreed,
    foodType,
    catGender,
    addInfo,
    catPic
  ) {
    (this.catName = catname),
      (this.ownerName = ownerName),
      (this.ownerPhone = ownerPhone),
      (this.ownerEmail = ownerEmail);
    (this.catBreed = catBreed),
      (this.foodType = foodType),
      (this.catGender = catGender),
      (this.addInfo = addInfo),
      (this.catPic = catPic);
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  getCatInfo();
});

function getCatInfo() {
  let catName = getData(".catName");
  let ownerName = getData(".ownerName");
  let ownerPhone = getData(".ownerPhone");
  let ownerEmail = getData(".ownerEmail");
  let catBreed = getData(".catBreed");
  let foodType = getCheckedFoodBoxes();
  let catGender = document.querySelectorAll(".catGender");
  if (catGender[0].checked) {
    catGender = "Самец";
  } else if (catGender[1].checked) {
    catGender = "Самка";
  }
  let addInfo = getData(".additional-info");
  let catPic = getData(".catPic");

  let catSummary = new Cat(
    catName,
    ownerName,
    ownerPhone,
    ownerEmail,
    catBreed,
    foodType,
    catGender,
    addInfo,
    catPic
  );
  console.log(catSummary);

  function getData(input) {
    let valueReceived = document.querySelector(input).value;
    return valueReceived;
  }
  function getCheckedFoodBoxes() {
    let foodType = document.querySelectorAll(".food:checked");
    let checkedValues = Array.from(foodType).map((item) => item.value);
    return checkedValues;
  }
}
