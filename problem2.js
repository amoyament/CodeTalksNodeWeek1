// What is happening in the following code snippet?  Assume the following:
// first.txt exists in the content folder and contains: “Hello, I am the first file”.
// second.txt exists in the content folder and contains: “Hello, I am the second file”.

//Code:

const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(result);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(result);
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task");
      }
    );
  });
});

console.log("starting next task");
