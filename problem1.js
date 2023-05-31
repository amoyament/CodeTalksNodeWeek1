// What is happening in the following code snippet?  Assume the following:

// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code:

const { readFileSync, writeFileSync } = require("fs");

const fs = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`);

writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`, {
  flag: "a",
});
