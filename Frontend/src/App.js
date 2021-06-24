import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
function App() {

	//state
	const [mail, setMail] = useState("")
	const [password, setPassword] = useState("")

	//changement a chaqge tape
	const handleChangeMail = (e) => {
		setMail(e.target.value);
	}

	const handleChangePassword = (e) => {
		setMail(e.target.value);
	}


	//submit sur click
	const login = () => {
		e.preventDefault();
		let request = {
			email: mail,
			password: password
		}
		axios.post('http://localhost:3000/login', request)
			.then(resp => {
				alert(resp.data.message);
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<div className="App">
			<form onSubmit={(e) => login(e)}> <br /><br />
				<label> Adresse email </label>
				<input onChange={(e) => handleChangeMail(e)} type="email" /> <br /><br />
				<label> Mot de passe </label>
				<input onChange={(e) => handleChangePassword(e)} type="password" /> <br /><br />
				<input type="submit" value="Se connecter" />
			</form>
		</div>
	);
}

export default App;
