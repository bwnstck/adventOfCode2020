const fs = require("fs");
const numbers = fs.readFileSync("./day1.txt", "utf-8");
const numbersArr = numbers.split("\n");
const winnerArray = [];
numbersArr.forEach((firstNum) => {
  numbersArr.forEach((secNum) => {
    numbersArr.forEach((thirdNum) => {
      if (parseInt(firstNum) + parseInt(secNum) + parseInt(thirdNum) === 2020) {
        return winnerArray.push(firstNum, secNum, thirdNum);
      }
    });
  });
});

console.log({ winnerArray });
const magicNumber = winnerArray[0] * winnerArray[1] * winnerArray[2];
console.log(magicNumber);
