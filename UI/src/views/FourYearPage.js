import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../views/FourYearPage.css';
import { useNavigate } from "react-router-dom";

export default function FourYearPage() {
	const navigate = useNavigate();
	const year = "year4";

	const handleSemesterClick = (semester) => {
		navigate(`/semester/${year}/${semester}`);
	};

	return (
		<div>
			<Header />
			<div className="main-container4Y">
				<div className="row4Y">
					<div className="square4Y" onClick={() => handleSemesterClick('sem1')}>
						<h2>Sem 1</h2>
						<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
					</div>
					<div className="square4Y" onClick={() => handleSemesterClick('sem2')}>
						<h2>Sem 2</h2>
						<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
					</div>
					<div className="square4Y" onClick={() => handleSemesterClick('sem3')}>
						<h2>Sem 3</h2>
						<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
					</div>
					<div className="square4Y" onClick={() => handleSemesterClick('sem4')}>
						<h2>Sem 4</h2>
						<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
					</div>
				</div>
				<div className="row4Y">
					<div className="square4Y" onClick={() => handleSemesterClick('sem5')}>
						<h2>Sem 5</h2>
						<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
					</div>
					<div className="square4Y" onClick={() => handleSemesterClick('sem6')}>
						<h2>Sem 6</h2>
						<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
					</div>
					<div className="square4Y" onClick={() => handleSemesterClick('sem7')}>
						<h2>Sem 7</h2>
						<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
					</div>
					<div className="square4Y" onClick={() => handleSemesterClick('sem8')}>
						<h2>Sem 8</h2>
						<p>Nulla fugiat consectetur do proident fugiat duis duis aute sint pariatur aute ex.</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}