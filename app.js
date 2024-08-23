const express = require('express');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON request body
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Handle the main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
