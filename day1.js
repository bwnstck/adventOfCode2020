const fs = require("fs");
const numbers = fs.readFileSync("./day1.txt", "utf-8");
const numbersArr = numbers.split("\n");

const winnerArray = [];
// numbersArr.forEach((element) => {
//   numbersArr.forEach((secNum) => {
//     if (element + secNum === 2020) {
//       winnerArray.push(element, secNum);
//     }
//   });
// });
console.log({ winnerArray });
