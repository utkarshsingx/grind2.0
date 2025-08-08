/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Edge case: if the array is empty, there are no duplicates to remove, return 0.
    if (nums.length === 0) {
        return 0;
    }

    // Initialize the slow pointer 'i' to 0.
    // This pointer will track the position of the last unique element found.
    let i = 0;

    // Iterate with the fast pointer 'j' starting from the second element.
    // 'j' will traverse the entire array.
    for (let j = 1; j < nums.length; j++) {
        // Compare the element at the slow pointer with the element at the fast pointer.
        // If they are different, it means nums[j] is a new unique element.
        if (nums[i] !== nums[j]) {
            // Move the slow pointer forward.
            i++;
            // Place the new unique element at the position pointed by 'i'.
            nums[i] = nums[j];
        }
        // If nums[i] === nums[j], it means nums[j] is a duplicate.
        // We do nothing and let 'j' continue to find the next unique element.
    }

    // After the loop, 'i' points to the last unique element.
    // The total number of unique elements (and thus the new length) is i + 1.
    return i + 1;
};

// --- Test Cases ---
let arr1 = [1, 1, 2];
let len1 = removeDuplicates(arr1);
console.log(`Input: [1, 1, 2] -> New Length: ${len1}, Array: [${arr1.slice(0, len1)}]`); // Expected: 2, [1, 2]

let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let len2 = removeDuplicates(arr2);
console.log(`Input: [0, 0, ..., 4] -> New Length: ${len2}, Array: [${arr2.slice(0, len2)}]`); // Expected: 5, [0, 1, 2, 3, 4]

let arr3 = [1, 1, 1, 1, 1];
let len3 = removeDuplicates(arr3);
console.log(`Input: [1, 1, 1, 1, 1] -> New Length: ${len3}, Array: [${arr3.slice(0, len3)}]`); // Expected: 1, [1]

let arr4 = [1, 2, 3, 4, 5];
let len4 = removeDuplicates(arr4);
console.log(`Input: [1, 2, 3, 4, 5] -> New Length: ${len4}, Array: [${arr4.slice(0, len4)}]`); // Expected: 5, [1, 2, 3, 4, 5]

let arr5 = [];
let len5 = removeDuplicates(arr5);
console.log(`Input: [] -> New Length: ${len5}, Array: [${arr5.slice(0, len5)}]`); // Expected: 0, []