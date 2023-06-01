// What is happening in the code below?
// Assume that you have already installed ran npm install body-parser and ​npm install express-validator cors

// First we will create variables for the modules we will be using
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
// Here we are linking the signup and login validation to our validation.js file
const { signupValidation, loginValidation } = require("./validation.js");

// Here we will create an "instance" for express
const app = express();

// Express is used to create "middleware" in this case to validate the input
// To set up that middleware, we call app.use().
// This first line parses incoming requests with JSON data
app.use(express.json());
// This line parses that json data with bodyParser
app.use(bodyParser.json());
// This line enables our data to be url-encoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// This line enables the Cross-Origin Resource Sharing (CORS) for the server
app.use(cors());

// Now we will create the GET routes for our url
// So when we go to the url/, the page will display (or send) the message "Node js file upload rest apis"
app.get("/", (req, res) => {
  res.send("Node js file upload rest apis");
});
// Now we will add a POST route to create a new regstration request
// We use signupValidation as an agrument here to enable the validation code we created in our vallidation.js file
app.post("/register", signupValidation, (req, res, next) => {
  // your registration code
});
// Now we will add a POST route to create a new login request
// We use loginValidation as an agrument here to enable the validation code we created in our vallidation.js file
app.post("/login", loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
// Here we use the app.use to sets up the express "error-handling middleware"
app.use((err, req, res, next) => {
  // console.log(err);
  // If the error code already exists, we will keep it. If not, we will asssign it error code 500
  err.statusCode = err.statusCode || 500;
  // Similarly, if the error message already exists, we will keep it. If not, we will asssign one
  err.message = err.message || "Internal Server Error";
  // In these lines we are acctually sending the error message
  res.status(err.statusCode).json({
    message: err.message,
  });
});

//Lastly, we start the server on port 3000. When it is ready to listen we will console.log "Server is running on port 3000"
app.listen(3000, () => console.log("Server is running on port 3000"));
