// What is happening in the code below? Why is this important? What would you use mySQL for?  Can you give an example?
// Assume that you have already installed ran npm install mysql
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "your username",
  password: "your password",
  database: "your database name",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});
module.exports = connection;
