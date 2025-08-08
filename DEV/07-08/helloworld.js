// function add (a, b){
//     return a+b;
// }

// var result = add(5,7);
// console.log(result);

const fs = require("fs");
const os = require("os");

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile("greeting.txt", "hi, " + user.username + "!\n", () => {
  console.log("file is created");
});
