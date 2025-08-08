/**
 * Reverses a string using the two-pointer approach.
 * @param {string} s The input string.
 * @returns {string} The reversed string.
 */
function reverseString_TwoPointer(s) {
    // Handle empty string or single character string
    if (s.length <= 1) {
        return s;
    }

    // Convert string to a mutable array of characters
    const charArray = s.split('');

    let left = 0;
    let right = charArray.length - 1;

    while (left < right) {
        // Swap characters at left and right pointers
        let temp = charArray[left];
        charArray[left] = charArray[right];
        charArray[right] = temp;

        // Move pointers towards the center
        left++;
        right--;
    }

    // Join the array back into a string
    return charArray.join('');
}

// Test Cases
console.log(`Two-Pointer Method: "hello" -> "${reverseString_TwoPointer("hello")}"`);
console.log(`Two-Pointer Method: "JavaScript" -> "${reverseString_TwoPointer("JavaScript")}"`);
console.log(`Two-Pointer Method: "a" -> "${reverseString_TwoPointer("a")}"`);
console.log(`Two-Pointer Method: "" -> "${reverseString_TwoPointer("")}"`);
console.log(`Two-Pointer Method: "Racecar" -> "${reverseString_TwoPointer("Racecar")}"`);