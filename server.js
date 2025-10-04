const express = require('express');
const path = require('path');
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname))); // Serve static files like index.html

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}! Thanks for submitting.` });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});