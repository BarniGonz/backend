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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});