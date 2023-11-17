import React from "react";
import '../views/Login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function AdminRegister(){

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  
	// Function to handle form submission
	const getRegistration = async(e) => {
	  e.preventDefault();
	  const response = await fetch('http://localhost:4000/register',{
		method:'POST',
		body:JSON.stringify({username, password}),
		headers:{'Content-Type':'application/json'}
	  })
	  
	  if(response.status === 200){
		alert('Registration Successful')
	  }else{
		alert('registration failed')
	  }
	  
	};

	return(
		<div>
			<Header/>
			<div className="login-container">
				<form className="login-form" onSubmit={getRegistration}>
					<h2 className="head">Registration</h2>
					<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					</div>
					<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					</div>
					<button type="submit" >Register</button>
				</form>
			</div>
			<Footer/>
		</div>

	);
}