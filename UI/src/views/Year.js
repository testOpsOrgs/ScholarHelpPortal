import React from "react";
import '../views/Year.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Year(){
const navigate = useNavigate();

const navigateTo2Y=()=>{
	navigate('/2Y', {replace:true})
}

const navigateTo4Y=()=>{
	navigate('/4Y', {replace:true})
}

	return(
		<div>
			<Header/>
			<div className="glow-container">
				<h1 className="glow-title" id="2 Year" onClick={navigateTo2Y}>Title 1</h1>
				<h2 className="glow-title" id="4 year" onClick={navigateTo4Y}>Title 2</h2>
			</div>
			<Footer/>
		</div>
	);
}
