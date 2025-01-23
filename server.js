const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

let users = []; // Opslaan van gebruikers (een eenvoudige in-memory opslag)
let messages = []; // Opslaan van berichten (globale chat)
let friends = {}; // Vrienden per gebruiker

// Route voor registratie
app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    if (!users.find(u => u.username === username)) {
        users.push({ username, password });
        res.status(201).send("Gebruiker aangemaakt");
    } else {
        res.status(400).send("Gebruikersnaam bestaat al");
    }
});

// Route voor login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).send("Ingelogd");
    } else {
        res.status(401).send("Ongeldige gebruikersnaam of wachtwoord");
    }
});

// Route voor berichten in de globale chat
app.post("/chat", (req, res) => {
    const { username, message } = req.body;
    messages.push({ username, message });
    res.status(200).send("Bericht verzonden");
});

// Route voor het toevoegen van vrienden
app.post("/add-friend", (req, res) => {
    const { userID, friendID } = req.body;
    if (!friends[userID]) friends[userID] = [];
    friends[userID].push(friendID);
    res.status(200).send("Vriend toegevoegd");
});

app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});
