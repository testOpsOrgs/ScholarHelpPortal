import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../views/TwoYearPage.css'

export default function TwoYearPage(){
	return(
		<div>
			<Header/>
			<div className="main-container">
				<div className="square"> 1</div>
				<div className="square"> 2</div>
				<div className="square"> 3</div>
				<div className="square"> 4</div>
			</div>
			<Footer/>

		</div>
	);
}