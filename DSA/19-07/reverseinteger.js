/**
 *this was my approach-> with errors and not optimised code - i did not checked constraints and overflow check
 * @param {number} x
 * @return {boolean}
 */
var reverseInt = function (x) {
  let reverse = 0;

  while (x!=0) {
    let digit = x % 10;
    reverse = (reverse*10)+digit;
    x = Math.floor(x/10);
  }
  return reverse;
};

let z = reverseInt(123);
console.log("reverse of 123 is", z);
