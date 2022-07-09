const app = require('express').Router();

const fs = require('fs');

//app is our istance of the express package
// .get is 
// res.send is the type of response we wat from the request

module.exports = function(app) {
  app.get('/api/notes', (req, res) => {
    // should read the db.json file and return all saved notes as JSON.
    console.log("hit");
  fs.readFile('/db/db.json', (err, data) => {
    if (err) throw err;
    dbData = JSON.parse(data);
    res.send(dbData); 
    });
    console.log("hit")
  })
  
app.post('/api/notes', (req, res) => {
    //this should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
    const userNotes = req.body;

    fs.readFile('/db/db.json', (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data);
      dbData.push(userNotes);
      let number = 1;
      dbData.forEach((note, index) => {
        note.id = number;
        number++;
        return dbData;
      });
      console.log(dbData);

      stringData = JSON.stringify(dbData);

      fs.writeFile('/db/db.json', stringData, (err, data) => {
        if (err) throw err;
      });
    });
    res.send('Note has been written');
  });

}