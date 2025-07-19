/**
 * this is an optimised code for reversing the integer pasted from yours truely chatgpt.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Define 32-bit integer limits explicitly for overflow checks
    const MAX_INT = 2147483647; // 2^31 - 1
    const MIN_INT = -2147483648; // -2^31

    let reversedNum = 0;

    // Loop until the original number becomes 0
    while (x !== 0) {
        // Get the last digit of x
        let digit = x % 10;

        // --- Overflow Check ---
        // This is the most crucial part of the problem.
        // We check if adding the next digit would cause an overflow *before* we add it.

        // Check for positive overflow
        // If reversedNum is already greater than MAX_INT / 10, then multiplying by 10 will definitely overflow.
        // Or if reversedNum is exactly MAX_INT / 10, and the current digit is greater than 7 (MAX_INT's last digit), it will overflow.
        if (reversedNum > Math.floor(MAX_INT / 10) || (reversedNum === Math.floor(MAX_INT / 10) && digit > 7)) {
            return 0;
        }

        // Check for negative overflow (underflow)
        // If reversedNum is already less than MIN_INT / 10, then multiplying by 10 will definitely underflow.
        // Or if reversedNum is exactly MIN_INT / 10, and the current digit is less than -8 (MIN_INT's last digit), it will underflow.
        // Note: Math.ceil is used for MIN_INT / 10 because MIN_INT is negative, and we're looking for values moving towards 0.
        if (reversedNum < Math.ceil(MIN_INT / 10) || (reversedNum === Math.ceil(MIN_INT / 10) && digit < -8)) {
            return 0;
        }

        // Build the reversed number by shifting existing digits and adding the new one
        reversedNum = (reversedNum * 10) + digit;

        // Remove the last digit from x (Math.trunc handles both positive and negative correctly)
        x = Math.trunc(x / 10);
    }

    return reversedNum;
};

// Test Cases:
console.log(`Reverse 123: ${reverse(123)}`);          // Expected: 321
console.log(`Reverse -123: ${reverse(-123)}`);        // Expected: -321
console.log(`Reverse 120: ${reverse(120)}`);          // Expected: 21
console.log(`Reverse 0: ${reverse(0)}`);              // Expected: 0
console.log(`Reverse 7: ${reverse(7)}`);              // Expected: 7
console.log(`Reverse -7: ${reverse(-7)}`);            // Expected: -7
console.log(`Reverse 2147483647 (MAX_INT): ${reverse(2147483647)}`); // Expected: 0 (Overflow)
console.log(`Reverse -2147483648 (MIN_INT): ${reverse(-2147483648)}`); // Expected: 0 (Overflow)
console.log(`Reverse 1534236469: ${reverse(1534236469)}`); // Expected: 0 (Overflow: reversed is 9646324351 which is > MAX_INT)
console.log(`Reverse -1534236469: ${reverse(-1534236469)}`); // Expected: 0 (Underflow)