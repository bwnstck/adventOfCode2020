const fs = require("fs");
const entries = fs.readFileSync("./day2.txt", "utf-8");
const entryArray = entries.split("\n");
let counter = 0;

entryArray.forEach((entry) => {
  const testRangeArr = /\d+.\d+/g.exec(entry);
  const testRange = testRangeArr[0];
  const testRangeArrSplit = testRange.split("-");
  const stringIn = /[a-zA-Z]{2,}/.exec(entry);

  const indicatorIn = /\w:/.exec(entry);
  const indicatorArr = indicatorIn[0].split(":");

  const min = parseInt(testRangeArrSplit[0]);
  const max = parseInt(testRangeArrSplit[1]);
  const letter = indicatorArr[0];

  const string = stringIn[0];
  const stringArr = string.split("");
  // console.log(letter, stringArr);
  if (stringArr[min - 1] === letter) {
    if (stringArr[max - 1] !== letter) {
      console.log(letter, min, max, stringArr);
      counter++;
    }
  }
  if (stringArr[max - 1] === letter) {
    if (stringArr[min - 1] !== letter) {
      console.log(letter, min, max, stringArr);
      counter++;
    }
  }

  // const resultArray = stringArr.filter((entry) => {
  //   return entry === letter;
  // });
  //   console.log(min, resultArray.length, max);
  // if (resultArray.length >= min && resultArray.length <= max) {
  //   counter++;
  // }
});
console.log(counter);
