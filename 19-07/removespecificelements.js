/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement_TwoPointers = function(nums, val) {
    let i = 0; // Slow pointer (write pointer, also counts valid elements)

    // Fast pointer (read pointer) iterates through all elements
    for (let j = 0; j < nums.length; j++) {
        // If the element at 'j' is NOT the value we want to remove
        if (nums[j] !== val) {
            // It's a valid element, so place it at the 'i' position
            nums[i] = nums[j];
            // Move 'i' forward to the next available slot for a valid element
            i++;
        }
        // If nums[j] === val, we simply skip it. The 'i' pointer does not move,
        // effectively overwriting this 'val' later with a valid element (if any).
    }

    // 'i' now represents the number of elements not equal to 'val'
    // and also the new logical length of the array.
    return i;
};

// --- Test Cases ---
let arr1_twoP = [3, 2, 2, 3];
let len1_twoP = removeElement_TwoPointers(arr1_twoP, 3);
console.log(`Two-Pointer Approach: New Length: ${len1_twoP}, Array: [${arr1_twoP.slice(0, len1_twoP)}]`);
// Expected: 2, [2, 2]

let arr2_twoP = [0, 1, 2, 2, 3, 0, 4, 2];
let len2_twoP = removeElement_TwoPointers(arr2_twoP, 2);
console.log(`Two-Pointer Approach: New Length: ${len2_twoP}, Array: [${arr2_twoP.slice(0, len2_twoP)}]`);
// Expected: 5, [0, 1, 3, 0, 4] (order might vary, e.g., [0,1,0,3,4] depending on original values beyond the new length)

let arr3_twoP = [1];
let len3_twoP = removeElement_TwoPointers(arr3_twoP, 1);
console.log(`Two-Pointer Approach: New Length: ${len3_twoP}, Array: [${arr3_twoP.slice(0, len3_twoP)}]`);
// Expected: 0, []

let arr4_twoP = [1, 2, 3, 4, 5];
let len4_twoP = removeElement_TwoPointers(arr4_twoP, 6); // val not in array
console.log(`Two-Pointer Approach: New Length: ${len4_twoP}, Array: [${arr4_twoP.slice(0, len4_twoP)}]`);
// Expected: 5, [1, 2, 3, 4, 5]

let arr5_twoP = [];
let len5_twoP = removeElement_TwoPointers(arr5_twoP, 5);
console.log(`Two-Pointer Approach: New Length: ${len5_twoP}, Array: [${arr5_twoP.slice(0, len5_twoP)}]`);
// Expected: 0, []