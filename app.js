// Basisconfiguratie voor de chat
let loggedIn = false;
let userID = null;
let friends = [];

// Elementen
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const chatSection = document.getElementById("chat-section");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendMessageButton = document.getElementById("send-message");
const addFriendButton = document.getElementById("add-friend-button");
const friendsList = document.getElementById("friends-list");
const addFriendInput = document.getElementById("add-friend-input");

// Simpele login / registratie logica (zonder echte backend)
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dit zou een echte databasecheck zijn
    if (username && password) {
        loggedIn = true;
        userID = username; // User ID kan worden gebruikt voor vrienden
        loginForm.style.display = "none";
        chatSection.style.display = "block";
    }
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    // Opslaan in database (niet geïmplementeerd)
    if (username && password) {
        loggedIn = true;
        userID = username;
        signupForm.style.display = "none";
        chatSection.style.display = "block";
    }
});

sendMessageButton.addEventListener("click", () => {
    const message = chatInput.value;
    if (message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${userID}: ${message}`;
        chatBox.appendChild(messageElement);
        chatInput.value = '';
    }
});

addFriendButton.addEventListener("click", () => {
    const friendID = addFriendInput.value;
    if (friendID) {
        friends.push(friendID);
        const friendElement = document.createElement("li");
        friendElement.textContent = friendID;
        friendsList.appendChild(friendElement);
    }
});
