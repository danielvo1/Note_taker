const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


module.exports = app => {

    // Setup notes variable
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

        // Get api notes
        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        // Post api notes
        app.post("/api/notes", function(req, res) {
            const {title, text} = req.body;
            const newNote = {
                title,
                text,
                title_id: uuidv4(),
            }
            notes.push(newNote);
            console.log(notes);
            fs.writeFile("db/db.json",JSON.stringify(notes),err => {
                        if (err) throw err;
                        return true;
                    });
            return console.log("Added new note: " + newNote.title);
        });


    });

}

