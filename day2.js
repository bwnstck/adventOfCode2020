const fs = require("fs");
const entries = fs.readFileSync("./day2.txt", "utf-8");
const entryArray = entries.split("\n");
let validcounter = 0;
entryArray.forEach((entry) => {
  const testRangeArr = /\d+.\d+/g.exec(entry);
  const testRange = testRangeArr[0];
  const testRangeArrSplit = testRange.split("-");
  const test1 = testRangeArrSplit[0];
  const test2 = testRangeArrSplit[1];

  const indicatorIn = /\w:/.exec(entry);
  const indicatorArr = indicatorIn[0].split(":");
  const indicator = indicatorArr[0];

  const stringIn = /[a-zA-Z]{2,}/.exec(entry);
  const String = stringIn[0];
  console.log(indicator, test1, test2, String);
  const regex = new RegExp(`${indicator}{${test1},${test2}}`);

  if (regex.test(String)) {
    validcounter++;
  }
});
console.log(validcounter);
