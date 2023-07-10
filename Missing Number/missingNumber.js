/*
    Goal: 
        Find the missing number in the array.

    Input: 
        integer array containing n distinct numbers in the range of [0, n] where n = input size
    Output: 
        integer that is missing in the array

    Approach:
        A cyclic sort works on arrays where there are no duplicates and the numbers are continuous.
        
        Steps:
            1. perform a cyclic sort on the array where each number should be equal to its index
            2. once the array is sorted, find the index where the element and index do not match
            3. return the index
*/
function missingNumber(arr) {
    let currentIndex = 0;

    if (arr.length === 0) {
        return null;
    }

    while (currentIndex < arr.length) {
        // The final index of each number should be the number itself
        const correctIndex = arr[currentIndex];

        // Swap the number with its correct index if it is placed incorrectly
        if (currentIndex !== correctIndex && arr[currentIndex] < arr.length) {
            [arr[currentIndex], arr[correctIndex]] = [
                arr[correctIndex],
                arr[currentIndex],
            ];
        } else {
            currentIndex++;
        }
    }

    // Search for the index that does not match its number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != i) {
            return i;
        }
    }

    // If every number matches its index then the missing number would be the next number
    return arr.length;
}

module.exports = missingNumber;
