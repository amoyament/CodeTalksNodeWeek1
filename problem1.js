// What is happening in the following code snippet?  Assume the following:
// first.txt exists in the content folder and contains: “Hello, I am the first file”.
// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code:
// Generally, this code takes the first.txt file and second.txt file and puts them together with "Here is the result:" in a new file called "result-sync.txt"

// Here we are importing the "fs" module.
const { readFileSync, writeFileSync } = require("fs");

// Here we are assigning a variable to the fs (or file system) module
const fs = require("fs");

// Here we are assigning variables specifically to each .txt file so it will be easier to call on later
// This is done synchronously, meaning it will wait for the first to finish before it moves on
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// Here we will console log the variables we created for the .txt files to make sure they are being called upon correctly
console.log(first, second);

// Here we are writing the first.txt and second.txt files to the new "result-sync" file
writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`);
writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`, {
  // Flag "a" (or appended) ensures that the second "writeFileSync" just adds to the content instead of overwriting it
  flag: "a",
});
