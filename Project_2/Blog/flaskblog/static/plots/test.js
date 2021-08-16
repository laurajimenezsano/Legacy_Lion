var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../site.db');

let reportingTag = [];

let sql = `SELECT * FROM USER`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    reportingTag.push(row.reportingTag);
  });
  
  console.log(reportingTag);

});



// close the database connection
db.close();