const findDuplicate = require("./duplicateNumber"); // assuming findDuplicate is exported from findDuplicate.js

test("finds duplicate number", () => {
  expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  expect(findDuplicate([1, 1])).toBe(1);
  expect(findDuplicate([2, 2, 2, 2, 2])).toBe(2);
  expect(() => findDuplicate([])).toThrow(); // edge case: empty array
});
