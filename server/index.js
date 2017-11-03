const db = require('../db/index');
const express = require('express');
const parser = require('body-parser');

let app = express();
let PORT = 3000;

// Connect server to client below;
app.use(express.static(__dirname + '/../client/public'))
  .use(parser.json())
  .use(parser.urlencoded());

// GET REQUEST HERE
app.get('/repos', function(req, res) {
  console.log(__dirname + '/../client/public');
  let queryStr = 'select * from info'
  db.query(queryStr, function(err, results) {
    if(err) { throw err };
    console.log(results);
    res.status(200);
    res.send(results);
    res.end();
  })
});

// POST REQUEST HERE
app.post('/repos', function(req, res) {
  let queryStr = `insert into info (user, repourl) VALUES ('${req.body.user}', '${req.body.repourl}')`
  db.query(queryStr, function(err, results) {
    if(err) { throw err };
    res.status(200);
    res.end();
  })
});



// Initiates server;
app.listen(PORT, function() {
  console.log('LISTENING IN ON PORT ', PORT);
});

