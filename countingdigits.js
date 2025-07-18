/**
 * Counts the number of digits in an integer by converting it to a string.
 * @param {number} num The input integer.
 * @returns {number} The number of digits.
 */
function countDigitsUsingString(num){
    const absoluteNum = Math.abs(num);
    const numString = String(absoluteNum);
    return numString.length;
}

console.log(`Number 123 has ${countDigitsUsingString(123)} digits.`);     
console.log(`Number 5 has ${countDigitsUsingString(5)} digits.`);       
console.log(`Number 987654 has ${countDigitsUsingString(987654)} digits.`); 
console.log(`Number 0 has ${countDigitsUsingString(0)} digits.`);       
console.log(`Number -45 has ${countDigitsUsingString(-45)} digits.`);     
console.log(`Number -1234567890 has ${countDigitsUsingString(-1234567890)} digits.`); 