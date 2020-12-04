const fs = require("fs");
const entries = fs.readFileSync("./day3.txt", "utf-8");
const entryArray = entries.split("\n");
let height = entryArray.length;
let leftRight = 0;
let counter = 0;

console.log({ height });

for (let i = 0; i <= height; i++) {
  const line = entryArray[i].split("");

  if (line[leftRight] === "#") {
    counter++;
    console.log(`Line ${i + 1} at ${leftRight + 1} || Found ${counter} tree `);
  } else {
    console.log(`Line ${i + 1} at ${leftRight + 1} || Found nothing :( `);
  }
  leftRight = leftRight + 3;
  if (leftRight > 31) {
    const rest = leftRight % 31;
    leftRight = rest;
  }

  height--;
  if (height < 0) {
    console.log("ENDE");
    return;
  }
}
console.log({ counter }, "not 5, 22,83");
