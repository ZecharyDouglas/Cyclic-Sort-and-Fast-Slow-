const missingNumber = require("./missingNumber");

describe("Finds the missing number in the array containing the range [0, n]", () => {
    test("missingNumber([]) => null", () => {
        expect(missingNumber([])).toEqual(null);
    });

    test("missingNumber([3,0,1]) => 2", () => {
        expect(missingNumber([3, 0, 1])).toBe(2);
    });

    test("missingNumber([0,1]) => 2", () => {
        expect(missingNumber([0, 1])).toBe(2);
    });

    test("missingNumber([9,6,4,2,3,5,7,0,1]) => 8", () => {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });
});
