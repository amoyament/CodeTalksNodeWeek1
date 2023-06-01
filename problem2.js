// What is happening in the following code snippet?  Assume the following:
// first.txt exists in the content folder and contains: “Hello, I am the first file”.
// second.txt exists in the content folder and contains: “Hello, I am the second file”.

//Code:
// Just as in the first problem, generally, this code takes the first.txt file and second.txt file and puts them together with "Here is the result:" in a new file called "result-sync.txt"
// However, in this problem we are doing it asynchronously

// Just as in problem 1, here we are importing the "fs" module.
// But in this problem we will be using the asynchronous built in functions
const { readFile, writeFile } = require("fs");

// Here we will console.log start so we know that the program is starting
console.log("start");

// Here we will have the program asynchronously read the first.txt file inside the content folder
// Inside the reading of this file, we will create a function that takes error and result as arguments.
readFile("./content/first.txt", "utf8", (err, result) => {
  // Inside this function we will create an if statement to log an error so we know if an error occurs
  if (err) {
    console.log(err);
    return;
  }
  // Here we will assign a variable to store the content of "first.txt" (or result) in the "first" variable
  const first = result;
  // Then we will log it to the console
  console.log(result);
  // Now we will have the program asynchorously read the second.txt file inside the content folder
  readFile("./content/second.txt", "utf8", (err, result) => {
    // Again, we will create an if statement inside this function to log an error so we know if an error occurs
    if (err) {
      console.log(err);
      return;
    }
    // Here, like in the first, we will assign a variable to store the content of "second.txt" (or result) in the "second" variable
    const second = result;
    // Then log it to the console
    console.log(result);
    // Now we will write a new file "result-async.txt" with the content from first.txt and second.txt with the text "result Here is the result"
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      // Again, we will create an if statement inside this function to log an error so we know if an error occurs
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // Here we will log "done with the task" to the console to let us know we are done
        console.log("done with the task");
      }
    );
  });
});
// Here we will log "starting next task" to the console so we know the program is done and ready to process more
console.log("starting next task");
