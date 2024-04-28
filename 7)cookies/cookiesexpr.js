const express = require('express');
const app = express();

// Middleware to parse incoming request cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
  // Set a cookie named 'myCookie' with value 'Hello, Cookie!' that expires in 1 hour
  res.cookie('myCookie', 'Hello, Cookie!', { maxAge: 3600000 });
  res.send('Cookie set successfully!');
});

// Route to get the value of the cookie
app.get('/get-cookie', (req, res) => {
  // Get the value of the 'myCookie' cookie
  const cookieValue = req.cookies.myCookie;
  if (cookieValue) {
    res.send(`Value of myCookie: ${cookieValue}`);
  } else {
    res.send('Cookie not found!');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//npm install express
//npm install cookie-parser
//node cookie_example.js
//node cookiesexpr.js