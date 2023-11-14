import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../views/FourYearPage.css';

export default function FourYearPage(){
	return(
		<div>
			<Header/>
			<div className="main-container">
				<div className="row">
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				</div>
				<div className="row">
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}