// Required dependencies 
const fs = require('fs');
const express = require('express');
const path = require('path');
const PORT = 3001; 
const { application } = require('express');

// Creating an instance of express
var app = express();

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Html routes should be created get /notes 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Get * should return the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Listens and make sure that the call is being made. 
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});