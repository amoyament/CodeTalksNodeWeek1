// What is happening in the following code snippet?

// Code:
// Generally, this code is creating an Http get request to pull the todos from the 'https://jsonplaceholder.typicode.com/todos/' url
// The XMLHttpRequest allows for asynchronous communication with a server

//  First we will create a function (getTodos) to pull the needed data (todos)
// This function does not take any arguments because it is a self-contained function to only make the HTTP GET requests
const getTodos = () => {
  // Now we will create a new XMLHttpRequest object and store it in a variable "request"
  const request = new XMLHttpRequest();

  // readyState is a property of the "XMLHttpRequest." It represents the current state of the http request
  // Now we will create an event listener to our request that will be triggered everytime the readyState changes
  request.addEventListener("readystatechange", () => {
    // Now we will create an if else statement so we can either return the response data or an error if one occurs
    // If the readyState is a 4, that means the request is complete, and all the response data has been received and we can log it to the console
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
    // If the ready state is 4 but the status is not 200, that means the request is complete, but there was an error fetching the data, and we need to log an error to the console
    else if (request.readyState === 4) {
      console.log("could not fetch the data");
    }
  });

  // Now we will call the open method with the arguments "GET" and the url to pull the data from that url
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  // Lastly, we will use the send method to initiate the "GET" request and send it to the server.
  request.send();
};

// Lastly, we will call on the function
getTodos();
getTodos();

// readyState is a property of the "XMLHttpRequest." It represents the current state of the http request

// Breakdown of the different readyState values:
// 0 (UNSENT): The XMLHttpRequest object has been created, but the open() method has not been called yet.
// 1 (OPENED): The open() method has been called, and the request has been initialized.
// 2 (HEADERS_RECEIVED): The request has been sent, and the headers of the response have been received.
// 3 (LOADING): The response's body is being received, and the responseText property holds the partial data received so far.
// 4 (DONE): The request is complete, and all the response data has been received.
