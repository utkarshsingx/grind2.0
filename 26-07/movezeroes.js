/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePointer = 0; // This pointer tracks the next position for a non-zero element.

    // Phase 1: Move all non-zero elements to the front
    // 'j' is the readPointer, iterating through all elements
    for (let j = 0; j < nums.length; j++) {
        // If the current element is NOT zero
        if (nums[j] !== 0) {
            // Place this non-zero element at the position indicated by writePointer
            nums[writePointer] = nums[j];
            // Move writePointer forward to the next empty slot for a non-zero
            writePointer++;
        }
    }

    // Phase 2: Fill the remaining positions with zeros
    // After the first loop, 'writePointer' is at the index where the first zero should go.
    // All elements from 'writePointer' to the end of the array need to be set to 0.
    for (let k = writePointer; k < nums.length; k++) {
        nums[k] = 0;
    }
};

// --- Test Cases ---
let arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(`[0, 1, 0, 3, 12] -> [${arr1}]`); // Expected: [1, 3, 12, 0, 0]

let arr2 = [0];
moveZeroes(arr2);
console.log(`[0] -> [${arr2}]`);             // Expected: [0]

let arr3 = [1, 0, 0, 2, 3];
moveZeroes(arr3);
console.log(`[1, 0, 0, 2, 3] -> [${arr3}]`); // Expected: [1, 2, 3, 0, 0]

let arr4 = [1, 2, 3];
moveZeroes(arr4);
console.log(`[1, 2, 3] -> [${arr4}]`);       // Expected: [1, 2, 3]

let arr5 = [0,0,0];
moveZeroes(arr5);
console.log(`[0,0,0] -> [${arr5}]`);         // Expected: [0,0,0]