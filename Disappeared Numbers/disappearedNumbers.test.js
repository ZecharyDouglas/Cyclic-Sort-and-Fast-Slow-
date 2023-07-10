const disappearedNumbers = require("./disappearedNumbers");

describe("Finds the missing numbers in the array containing the range [1, n]", () => {
    test("disappearedNumbers([]) => null", () => {
        expect(disappearedNumbers([])).toBeNull();
    });

    test("disappearedNumbers([4,3,2,7,8,2,3,1]) => [5,6]", () => {
        expect(disappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
    });

    test("disappearedNumbers([1,1]) => [2]", () => {
        expect(disappearedNumbers([1, 1])).toEqual([2]);
    });

    test("disappearedNumbers([4, 5, 7, 9]) => [1, 2, 3, 6, 8]", () => {
        expect(disappearedNumbers([4, 5, 7, 9])).toEqual([1, 2, 3, 6, 8]);
    });
});
