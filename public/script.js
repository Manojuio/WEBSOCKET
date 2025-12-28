const socket = io();

const chat = document.getElementById("chat");
const input = document.getElementById("msg");

// 1. Receive welcome (private)
socket.on("system", (msg) => {
  addMessage("SYSTEM: " + msg);
});

// 2. Receive messages from OTHER users
socket.on("chat:receive", (data) => {
  addMessage(`${data.id}: ${data.message}`);
});

// 3. Send message to server
function send() {
  const text = input.value;
  if (!text) return;

  addMessage("ME: " + text);

  socket.emit("chat:send", text);
  input.value = "";
}



function addMessage(text, isMe = false) {
  const li = document.createElement("li");
  li.textContent = text;
  if (isMe) li.classList.add("me");
  chat.appendChild(li);
}
