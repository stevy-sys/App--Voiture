import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {Component} from 'react';
function App() {
	
  return (
    <div className="App">
    <form onSubmit= {(e) => login(e)}> <br/><br/>
    	<label> Adresse email </label>
    	<input type="email" id="email" /> <br/><br/>
    	<label> Mot de passe </label> 
    	<input type="password" id="password" /> <br/><br/>
    	<input type="submit" value="Se connecter"/>
    </form> 
    </div>
  );
}
function login(e) {
		e.preventDefault();
		let request = {
			email : document.getElementById('email').value,
			password : document.getElementById('password').value
		}
		axios.post('http://localhost:3000/login',request)
		.then(resp => {
			alert(resp.data.message);
		})
		.catch(err =>{
			console.log(err);
		})
}

export default App;
