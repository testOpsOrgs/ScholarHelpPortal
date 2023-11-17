import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../views/FourYearPage.css';
import { useNavigate } from "react-router-dom";

export default function FourYearPage() {
	const subject = {

		year4: {
			sem1: {
				subject1: "ABC",
				subject2: "XYZ",
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
			},
			sem5: {
				subject1: "ABC",
				subject2: "XYZ",
				subject3: "PQR",
				subject4: "EFG",
			},
			sem6: {
				subject1: "ABC2",
				subject2: "XYZ2",
				subject3: "PQR2",
				subject4: "EFG2",
			},
			sem7: {
				subject1: "ABC",
				subject2: "XYZ",
				subject3: "PQR",
				subject4: "EFG",
			},
			sem8: {
				subject1: "ABC",
				subject2: "XYZ",
				subject3: "PQR",
				subject4: "EFG",
			}
		}
	};

	const navigate = useNavigate();
	const year = "year4";

	const handleSemesterClick = (semester) => {
		navigate(`/semester/${year}/${semester}`);
	};
	const handleContent = (semester, subject) => {
		navigate(`/${year}/${semester}/${subject}`);
	}
	const semesterSubjects = subject["year4"] || {};

	return (
		<div>
			<Header />
			<div className="main-container4Y">
				<div className="row4Y">
					<div className="square4Y">
						<h2 className="header4Y">Sem 1</h2>
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
					<div className="square4Y">
						<h2 className="header4Y">Sem 2</h2>
						<ol>
						{Object.values(semesterSubjects.sem1).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem2', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
					</div>
					<div className="square4Y">
						<h2 className="header4Y">Sem 3</h2>
						<ol>
						{Object.values(semesterSubjects.sem1).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem3', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
					</div>
					<div className="square4Y" >
						<h2 className="header4Y">Sem 4</h2>
						<ol>
						{Object.values(semesterSubjects.sem1).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem4', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
					</div>
				</div>
				<div className="row4Y">
					<div className="square4Y" >
						<h2 className="header4Y">Sem 5</h2>
						<ol>
						{Object.values(semesterSubjects.sem1).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem5', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
					</div>
					<div className="square4Y" >
						<h2 className="header4Y">Sem 6</h2>
						<ol>
						{Object.values(semesterSubjects.sem1).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem6', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
					</div>
					<div className="square4Y">
						<h2 className="header4Y">Sem 7</h2>
						<ol>
						{Object.values(semesterSubjects.sem1).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem7', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
					</div>
					<div className="square4Y">
						<h2 className="header4Y">Sem 8</h2>
						<ol>
						{Object.values(semesterSubjects.sem1).map((subject, index) => (
							<h2><li key={index}>
								<div className='subject' onClick={() => handleContent('sem8', subject)}>
									{subject}
								</div>
							</li></h2>
						))}
					</ol>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}