/**
 * Reverses a string using built-in JavaScript methods.
 * @param {string} s The input string.
 * @returns {string} The reversed string.
 */
function reverseString_BuiltIn(s) {
    // 1. Split the string into an array of characters
    // 2. Reverse the array
    // 3. Join the array back into a string
    return s.split('').reverse().join('');
}

// Test Cases
console.log(`Built-in Method: "hello" -> "${reverseString_BuiltIn("hello")}"`);          // Output: "olleh"
console.log(`Built-in Method: "JavaScript" -> "${reverseString_BuiltIn("JavaScript")}"`); // Output: "tpircSavaJ"
console.log(`Built-in Method: "a" -> "${reverseString_BuiltIn("a")}"`);                 // Output: "a"
console.log(`Built-in Method: "" -> "${reverseString_BuiltIn("")}"`);                   // Output: ""
console.log(`Built-in Method: "Racecar" -> "${reverseString_BuiltIn("Racecar")}"`);     // Output: "racecaR"