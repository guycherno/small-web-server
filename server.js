const express = require('express');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
const app = express();
const port = 3000;

// Handle WebSocket connection
wss.on('connection', (ws) => {
  // Handle incoming messages
  ws.on('message', (message) => {
    console.log('Received:', message);
    // Send a response back to the client
    ws.send('Server received: ' + message);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});








