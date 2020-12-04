const fs = require("fs");
const entries = fs.readFileSync("./day3.txt", "utf-8");
const entryArray = entries.split("\n");
let height = 30;
let counter = 0;
let splitline = "";
for (let i = 0; i <= 100; i++) {
  splitline = entryArray[i].split("");
  if (splitline[height] === "#") {
    counter++;
  }
  console.log(splitline[height]);
  i = i + 3;
  height--;
  if (height < 0) {
    return;
  }
  return true;
}
console.log(counter);
