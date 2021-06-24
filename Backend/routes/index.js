var express = require('express');
var router = express.Router();

var users = [
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
