const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'fakeGitHub2'
});

dbConnection.connect();

module.exports = dbConnection;