const setMismatch = require("./setMismatch");

describe("Finds the repeating number and the missing number in the array containing the range [1, n]", () => {
    test("setMismatch([]) => null", () => {
        expect(setMismatch([])).toBeNull();
    });

    test("setMismatch([1,2,2,4]) => [2,3]", () => {
        expect(setMismatch([1, 2, 2, 4])).toEqual([2, 3]);
    });

    test("setMismatch([1,1]) => [1,2]", () => {
        expect(setMismatch([1, 1])).toEqual([1, 2]);
    });

    test("setMismatch([2,2]) => [2,1]", () => {
        expect(setMismatch([2, 2])).toEqual([2, 1]);
    });
});
