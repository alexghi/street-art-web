// app.js

const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Middleware to log request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Move to the next middleware or route handler
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});