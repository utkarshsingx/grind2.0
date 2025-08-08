/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 1. Handle edge cases:
    // Negative numbers are not palindromes.
    // Numbers ending in 0 (except for 0 itself) are not palindromes.
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    // 2. Initialize variables
    let originalX = x; // Keep a copy of the original number for comparison
    let reversedX = 0; // This will store the reversed number

    // 3. Reverse the number (or half of it, see optimization below)
    // We only need to reverse half the number to check for palindrome.
    // The loop runs as long as reversedX is smaller than x.
    // This handles cases like 121 (reversedX becomes 1 and x becomes 12, then reversedX becomes 12 and x becomes 1)
    // For 12321: reversedX becomes 1, then 12, then 123. x becomes 1232, then 123, then 12.
    while (x > reversedX) {
        let digit = x % 10; // Get the last digit
        reversedX = (reversedX * 10) + digit; // Add it to reversedX
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // 4. Compare the original half with the reversed half
    // For even number of digits (e.g., 1221): x will be 12, reversedX will be 12.
    // For odd number of digits (e.g., 121): x will be 1, reversedX will be 12.
    // In odd cases, the middle digit (e.g., '2' in 121) doesn't affect palindrome check,
    // so we can ignore it by dividing reversedX by 10.
    return x === reversedX || x === Math.floor(reversedX / 10);
};

// Test Cases
console.log(`Is 121 a palindrome? ${isPalindrome(121)}`);     
console.log(`Is -121 a palindrome? ${isPalindrome(-121)}`);   
console.log(`Is 10 a palindrome? ${isPalindrome(10)}`);       
console.log(`Is 0 a palindrome? ${isPalindrome(0)}`);         // true (0 is handled as it doesn't meet the `x % 10 === 0 && x !== 0` condition)
console.log(`Is 12321 a palindrome? ${isPalindrome(12321)}`); 
console.log(`Is 12345 a palindrome? ${isPalindrome(12345)}`); 
console.log(`Is 5 a palindrome? ${isPalindrome(5)}`);         
console.log(`Is 1001 a palindrome? ${isPalindrome(1001)}`);   