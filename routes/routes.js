const fs = require('fs');
const nt = require('express').Router();
const path = require('path');
const dbDate = require('../db/db.json');
const { readAndAppend } = require('../fsUtils');
const { v4: uuidv4 } = require('uuid');


    // GET route to get notes 
    nt.get('/api/notes' , (req, res) =>  
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    )
    
    
    
    
    
    module.exports = nt;
    