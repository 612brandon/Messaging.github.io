const input = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");
let signupName = "Alex";
document.querySelector(".chat-header").textContent = signupName;
function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  // Create message bubble
  const msg = document.createElement("div");
  msg.classList.add("message", "user");
  msg.textContent = text;

  chatMessages.appendChild(msg);

  chatMessages.scrollTop = chatMessages.scrollHeight;


  input.value = "";
}

// Send on button click
sendBtn.addEventListener("click", sendMessage);

// Send on Enter key
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

