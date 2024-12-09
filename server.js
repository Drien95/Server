const express = require('express');
const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route GET
app.get("*", (req, res) => {
    res.send('Hello from Express!');
});

// Route POST
app.post("*", (req, res) => {
    console.log('Received POST data:', req.body);
    res.send('POST request received!');
});

// Démarrer le serveur sur le port spécifié par Render ou par défaut sur 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log(`Server running on port ${PORT}`);
});
