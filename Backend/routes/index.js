const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "App_Voiture"
});

connection.connect(function(err){
(err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});

require('./routes/html-routes')(app, connection);

const users = [
{ email : 'abc@gmail.com', password : 'password'}
];
/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.send("Welcome to backend");
});

router.post('/login', function(req,res){
	let result = users.find(user => user.email == req.body.email);

	if(result){
		if(result.password == req.body.password){
			res.status(200).send({
				message : "Successfull login"
			})
		}
		else{
			res.status(200).send({
				message : "Password incorrect"
			})
		}
	}
	else{
		res.status(200).send({
			message : "User not found"
		})
	}
});

module.exports = router;
