const app = require('express').Router();
const fs = require('fs');
const path = require('path');

app.get('/notes', (req, res) => {
  // should return the notes.html file
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

app.get('*', (req, res) => {
  // should return the index.html file
  res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = app