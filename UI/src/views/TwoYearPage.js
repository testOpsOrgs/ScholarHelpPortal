
// Import your components
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../views/TwoYearPage.css'
import SemesterSubjects from './SemesterSubjects';
import { useNavigate } from 'react-router-dom';

export default function TwoYearPage() {
	// Your subject data
	

	const navigate = useNavigate();
	const year = "year2";

	const handleSemesterClick = (semester) => {
		navigate(`/semester/${year}/${semester}`);
	};

	return (

		<div>
			<Header />
			<div className="main-container2Y">


				<div className="square2Y" onClick={() => handleSemesterClick('sem1')}>
					<h2>Sem 1</h2>
					<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
				</div>


				<div className="square2Y" onClick={() => handleSemesterClick('sem2')}>
					<h2>Sem 2</h2>
					<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
				</div>



				<div className="square2Y" onClick={() => handleSemesterClick('sem4')}>
					<h2>Sem 3</h2>
					<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
				</div>


				<div className="square2Y" onClick={() => handleSemesterClick('sem4')}>
					<h2>Sem 4</h2>
					<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
				</div>

			</div>



			<Footer />
		</div>

	);
}