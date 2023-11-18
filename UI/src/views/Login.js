import React from "react";
import '../views/Login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState, useContext} from "react";
import {UserContext} from "../UserContext.js" 
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false); 
    const {setUserInfo} =useContext(UserContext);

    const handleLogin =async (e)=>{
        e.preventDefault()

        const response = await fetch('http://localhost:4000/login',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include'
        })
        if(response.ok){

            response.json().then(userInfo=>{
                setUserInfo(userInfo)
                setRedirect(true);
            })
        }else{
            alert("Invalid Credentials")
        }
    }

	const navigate = useNavigate();

    if(redirect){
        return(
            navigate("/Admin",{replace:true})
		)
    }


	return(
		<div>
			<Header/>
			<div className="login-container">
				<form className="login-form" onSubmit={handleLogin}>
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
					<button type="submit" >Login</button>
				</form>
			</div>
			<Footer/>
		</div>

	);
}

export default Login