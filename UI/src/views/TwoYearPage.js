
// Import your components
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../views/TwoYearPage.css'

import { useNavigate } from 'react-router-dom';

export default function TwoYearPage() {
	// Your subject data
	const subject = {
		year2: {
			sem1: {
				subject1: "devops",
				subject2: "os",
				subject3: "PQR",
				subject4: "EFG",
			},
			sem2: {
				subject1: "ABC2",
				subject2: "XYZ2",
				subject3: "PQR2",
				subject4: "EFG2",
			},
			sem3: {
				subject1: "ABC",
				subject2: "XYZ",
				subject3: "PQR",
				subject4: "EFG",
			},
			sem4: {
				subject1: "ABC",
				subject2: "XYZ",
				subject3: "PQR",
				subject4: "EFG",
			}
		}


	};


	const navigate = useNavigate();
	const year = "year2";

	const handleSemesterClick = (semester) => {
		navigate(`/semester/${year}/${semester}`);
	};
	const handleContent = (semester, subject) => {
		navigate(`/${year}/${semester}/${subject}`);
	}

	const semesterSubjects = subject["year2"] || {};


	return (

		<div>
			<Header />
			<div className="main-container2Y">


				<div className="square2Y">
					<h2 className="header2Y">Sem 1</h2>
					<ol>
						{Object.values(semesterSubjects.sem1).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem1', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>

				</div>


				<div className="square2Y">
					<h2 className="header2Y">Sem 2</h2>
					<ol>
						{Object.values(semesterSubjects.sem2).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem2', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
				</div>



				<div className="square2Y">
					<h2 className="header2Y">Sem 3</h2>
					<ol>
						{Object.values(semesterSubjects.sem3).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem4', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
				</div>


				<div className="square2Y">
					<h2 className="header2Y">Sem 4</h2>
					<ol>
						{Object.values(semesterSubjects.sem4).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem4', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
				</div>

			</div>



			<Footer />
		</div >

	);
}