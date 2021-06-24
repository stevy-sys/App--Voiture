const mysql = require('mysql');
const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "App_Voiture"
});
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});  