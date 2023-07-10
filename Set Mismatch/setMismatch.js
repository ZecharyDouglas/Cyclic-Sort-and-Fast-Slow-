/*
    Goal: 
        Find the number that appears twice and the number that is missing in the array.

    Input: 
        integer array containing n distinct numbers with one duplicate in the range of [1, n] where n = input size
    Output: 
        integer array containing the repeating number and the missing number

    Approach:
        Using the cyclic sort method.
        
        Steps:
            1. perform a cyclic sort on the array where each number's final index should be the number - 1
            2. once the array is sorted, loop through the array and find the duplicate
            3. once the duplicate is found, the missing number is the index of the duplicate + 1
            4. return an array of both numbers
*/
function setMismatch(arr) {
    let currentIndex = 0;

    if (arr.length === 0 || arr.length === 1) {
        return null;
    }

    while (currentIndex < arr.length) {
        // The final index of each number should be the number itself - 1
        const correctIndex = arr[currentIndex] - 1;

        // If the number is already in the correct position then move forward, otherwise swap
        if (arr[correctIndex] === correctIndex + 1) {
            currentIndex++;
        } else {
            [arr[correctIndex], arr[currentIndex]] = [
                arr[currentIndex],
                arr[correctIndex],
            ];
        }
    }

    // Search for the duplicate number in the sorted array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            // Return the duplicate number and the missing number which would be the next number in the sequence
            return [arr[i], i + 1];
        }
    }
}

module.exports = setMismatch;
