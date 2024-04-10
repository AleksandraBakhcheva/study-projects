const assert = require("assert");
const expect = require("chai").expect;
const findMissingNumberInArray = require("../scripts/index");

// mocha testing
describe("findMissingNumberInArray", () => {
  it("Positive numbers", () => {
    assert.equal(findMissingNumberInArray([5, 0, 1, 3, 2]), 4);
  });

  it("Negative numbers", () => {
    assert.equal(findMissingNumberInArray([-5, 0, -1, -3, -2]), -4);
  });
});

// chai testing
it("Result is typeof number", () => {
  expect(findMissingNumberInArray([5, 0, 1, 3, 2])).to.be.a("number");
});

describe("findMissingNumberInArray", function () {
  it("Basic tests", function () {
    assert.strictEqual(findMissingNumberInArray([5, 0, 1, 3, 2]), 4);
    assert.strictEqual(
      findMissingNumberInArray([]),
      "array is empty or it doesn't contain only numbers"
    );
    assert.strictEqual(findMissingNumberInArray([7, 9, 10, 11, 12]), 8);
    assert.strictEqual(
      findMissingNumberInArray([-99, -97, -100, -101, -102, -96]),
      -98
    );
    assert.strictEqual(
      findMissingNumberInArray(["", 9, NaN, null, -4, ""]),
      "array is empty or it doesn't contain only numbers"
    );
  });
});
