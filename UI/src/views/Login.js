import React from "react";
import '../views/Login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login(){

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  
	// Function to handle form submission
	const handleSubmit = (e) => {
	  e.preventDefault();
	  // Add logic to handle login (e.g., API call, authentication)
	  console.log('Login submitted:', { username, password });
	};

	const navigate = useNavigate();

	const navigateToAdmin =()=>{
	  navigate('/Admin', {replace:true});
	};
	return(
		<div>
			<Header/>
			<div className="login-container">
				<form className="login-form" onSubmit={handleSubmit}>
					<h2 className="head">Login</h2>
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
					<button type="submit" onClick={navigateToAdmin}>Login</button>
				</form>
			</div>
			<Footer/>
		</div>

	);
}