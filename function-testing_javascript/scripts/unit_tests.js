const findMissingNumberInArray = require("./index");

// unit manual testing
if (findMissingNumberInArray([5, 0, 1, 3, 2]) === 4) {
  console.log("PASS");
} else {
  console.log("FAIL");
}

if (findMissingNumberInArray([7, 9, 10, 11, 12]) === 8) {
  console.log("PASS");
} else {
  console.log("FAIL");
}

if (
  findMissingNumberInArray([]) ===
  "array is empty or it doesn't contain only numbers"
) {
  console.log("PASS");
} else {
  console.log("FAIL");
}
