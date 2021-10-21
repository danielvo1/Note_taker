// Required dependencies 
const fs = require('fs');
const express = require('express');
const path = require('path');
const dbDate = require('./db/db.json');

// Variable declarations 
const PORT = 3001; 

// Creating an instance of express
var app = express();

// This allows us to access the public files for CSS, Images, Js Files
app.use(express.static('public'));

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Html routes should be created get /notes 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET route to get notes 
app.get('/api/notes' , (req, res) =>  res.json(dbDate));

// Get * should return the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Require routes file
require('./routes')(app);

// Listens and make sure that the call is being made. 
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});