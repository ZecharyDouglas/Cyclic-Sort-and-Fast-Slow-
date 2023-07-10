const findDuplicates = require("./allDuplicates"); // assuming findDuplicates is exported from findDuplicates.js

test("finds duplicate numbers in an array", () => {
  expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
  expect(findDuplicates([1, 1, 2])).toEqual([1]);
  expect(findDuplicates([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  expect(findDuplicates([])).toEqual([]); // edge case: empty array
});
