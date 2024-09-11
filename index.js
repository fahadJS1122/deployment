// Load the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('dummy , project');
});

// Define the port number
const PORT = 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
