// Require the 'http' module to create an HTTP server
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code 200 and content type text/plain
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Write the response body 'Hello, World!' to the client
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  // Print a message to the console indicating the server has started
  console.log(`Server running at http://${hostname}:${port}/`);
});


//node hello.js
