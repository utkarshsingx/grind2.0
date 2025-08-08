/**
 * Counts the number of digits in an integer by converting it to a string.
 * @param {number} num The input integer.
 * @returns {number} The number of digits.
 */
function countDigitsUsingLoops(num) {
  if (num == 0) {
    return 1;
  }
  let absnum = Math.abs(num);
  let count = 0;
  while (absnum > 0) {
    absnum = Math.floor(absnum / 10);
    count++;
  }

  return count;
}

console.log(`Number 123 has ${countDigitsUsingLoops(123)} digits.`);
console.log(`Number 5 has ${countDigitsUsingLoops(5)} digits.`);
console.log(`Number 987654 has ${countDigitsUsingLoops(987654)} digits.`);
console.log(`Number 0 has ${countDigitsUsingLoops(0)} digits.`);
console.log(`Number -45 has ${countDigitsUsingLoops(-45)} digits.`);
console.log(
  `Number -1234567890 has ${countDigitsUsingLoops(-1234567890)} digits.`
);
