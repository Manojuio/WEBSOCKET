# WEBSOCKET

A simple Node.js project to practice real-time communication using WebSockets.

## Tech Stack

- Node.js  
- Express.js  
- WebSocket / Socket.io (for real-time connection)  

## Features

- WebSocket server running on top of an Express server.  
- Clients can connect from the browser and open a live socket connection.  
- Send and receive messages instantly without page reload.  
- Broadcast messages from one client to all connected clients (basic chat-style behavior).  

## How it works (short)

- The server creates a WebSocket endpoint.  
- When a client connects, the server listens for `message` events.  
- On each message, the server can either:
  - Send a response back to that client, or  
  - Broadcast to every connected client.  

## Folder Structure (example)

```bash
WEBSOCKET/
├── server.js        # Express + WebSocket server setup
├── public/
│   └── index.html   # Simple frontend to test WebSocket
├── package.json
└── README.md
Setup and Run
bash
git clone https://github.com/Manojuio/WEBSOCKET.git
cd WEBSOCKET
npm install
Start the server:

bash
npm start
# or
npm run dev
Open the client (for example public/index.html) in the browser and you can test sending and receiving messages in real time.
You can open the page in two different tabs to see messages broadcast between multiple clients.
