// What is happening in the code below?
// Assume that you have already installed ran npm install body-parser and ​npm install express-validator cors

// Generally, in this code we are setting up our validation peramiters that are used in the server.js file

// Here, we are importing the check function from the express-validator, which will be used to check our registration and login
const { check } = require("express-validator");
// In this line, we are creating and exporting an array called "signupValidation"
// This array contains all the peramiters that we need to check in our sign up to validate it
exports.signupValidation = [
  // Ensures name is not empty
  check("name", "Name is requied").not().isEmpty(),
  // Checks for a valid email address
  check("email", "Please include a valid email")
    .isEmail()
    // gmail dots need to be removed for email to be "normalized"
    .normalizeEmail({ gmail_remove_dots: true }),
  // Checks password length
  check("password", "Password must be 6 or more characters").isLength({ min: 6 }),
];

// In this line, we are creating and exporting an array called "loginValidation"
// This array contains all the peramiters that we need to check in our log in to validate it
exports.loginValidation = [
  // Same email configuration as sign up
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  // Same password config as well
  check("password", "Password must be 6 or more characters").isLength({ min: 6 }),
];
