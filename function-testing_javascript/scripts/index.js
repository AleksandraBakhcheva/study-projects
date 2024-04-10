const findMissingNumberInArray = (array) => {
  if (array.length > 0 && array.every((el) => typeof el === "number")) {
    // check if array is not empty and array elements are numbers
    let min = Math.min(...array); // find min number in array
    let max = Math.max(...array); // find max number in array
    let correctArray = Array.from(Array(max - min + 1), (e, i) => i + min); // create new array from min to max numbers with step + 1, thus we get correct array and save it to a new variable
    let missingNumber = correctArray
      .filter((num) => !array.includes(num))
      .join(); // compare correct array with basic array to find difference, this difference is our number and save to a new variable
    return +missingNumber; // return missing number
  }
  return "array is empty or it doesn't contain only numbers"; // return if array is empty
};

console.log(findMissingNumberInArray([5, 0, 1, 3, 2]));
console.log(findMissingNumberInArray([]));
console.log(findMissingNumberInArray([7, 9, 10, 11, 12]));
console.log(findMissingNumberInArray([-99, -97, -100, -101, -102, -96]));
console.log(findMissingNumberInArray(["", 9, NaN, null, -4, ""]));

module.exports = findMissingNumberInArray;
