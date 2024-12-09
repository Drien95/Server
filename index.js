const express = require('express');
const app = express();
const path = require('path');

// Middleware pour logs
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Route principale
app.get('/', (req, res) => {
    res.send('Serveur en ligne. Utilisez les routes pour tester.');
});

// Route pour exécuter votre script
app.get('/run-script', (req, res) => {
    try {
        const script = require('./web-client/ch62/color');
        const result = script(); // Assurez-vous que votre script exporte une fonction.
        res.json({ status: 'success', result });
    } catch (error) {
        console.error('Erreur lors de l’exécution du script :', error);
        res.status(500).json({ status: 'error', error: error.message });
    }
});

// Fallback
app.use((req, res) => {
    res.status(404).send('Route non trouvée.');
});

// Démarrage du serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
