const findAllDuplicates = require("./findAllDuplicates");

test("finds duplicate numbers in an array", () => {
    expect(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual(
        expect.arrayContaining([2, 3])
    );

    expect(findAllDuplicates([1, 1, 2])).toEqual(expect.arrayContaining([1]));

    expect(findAllDuplicates([1, 1, 2, 2, 3, 3])).toEqual(
        expect.arrayContaining([1, 2, 3])
    );

    expect(findAllDuplicates([])).toEqual([]); // edge case: empty array
});
