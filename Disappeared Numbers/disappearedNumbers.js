/*
    Goal: 
        Find the missing numbers in the input array.

    Input: 
        integer array containing distinct numbers in the range of [1, n] where n = input size
    Output: 
        integer array containing the missing numbers that don't appear in the input array

    Approach:
        Using the cyclic sort method.
        
        Steps:
            1. Create an array to keep track of the missing numbers
            2. perform a cyclic sort on the input array
            3. once the input array is sorted, loop through the input array and look for numbers where the index + 1 !== arr[index]
            4. if the previous condition is true then push the missing number (index + 1) to the missing numbers array
            5. return the missing numbers array
*/
function disappearedNumbers(arr) {
    let missingNumbers = [];
    let currentIndex = 0;

    if (arr.length === 0) {
        return null;
    }

    while (currentIndex < arr.length) {
        const correctIndex = arr[currentIndex] - 1;

        // If the number is already in position then continue, otherwise swap
        if (arr[correctIndex] === arr[currentIndex]) {
            currentIndex++;
        } else {
            [arr[correctIndex], arr[currentIndex]] = [
                arr[currentIndex],
                arr[correctIndex],
            ];
        }
    }

    // Search for numbers that don't match their final index
    for (let i = 0; i < arr.length; i++) {
        // If the element is not in the correct position
        if (arr[i] != i + 1) {
            // Push the element that should be at the current index
            missingNumbers.push(i + 1);
        }
    }

    return missingNumbers;
}

module.exports = disappearedNumbers;
