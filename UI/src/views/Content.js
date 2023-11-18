import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../views/Content.css";

export default function Content() {
    const { year, semester, subject } = useParams();
    const navigate = useNavigate();
    const navigatetoDownload = (type) => {
        navigate(`/${year}/${semester}/${subject}/${type}`);
    }



    const [notes, setNotes] = useState(null);
    const [paper, setPaper] = useState(null);

    const [nloading, setnLoading] = useState(true);
    const [ploading, setpLoading] = useState(true);



    useEffect(() => {

        const fetchFilenotes = async () => {
            let y = "2y";
            if (year == 'year4') {
                y = '4y';
            }
            try {
                const response = await fetch(`http://localhost:4000/data/${y}/${semester}/${subject}/notes`); // Replace with your actual API endpoint
                const result = await response.json();
                console.log(result);
                setNotes(result);
                setnLoading(false);
            } catch (error) {
                console.error('Error fetching file:', error);
                setnLoading(false);
            }
        };

        const fetchFilepaper = async () => {
            let y = "2y";
            if (year == 'year4') {
                y = '4y';
            }
            try {
                const response = await fetch(`http://localhost:4000/data/${y}/${semester}/${subject}/paper`); // Replace with your actual API endpoint
                const result = await response.json();
                console.log(result);
                setPaper(result);
                setpLoading(false);
            } catch (error) {
                console.error('Error fetching file:', error);
                setpLoading(false);
            }
        };

        fetchFilenotes();
        fetchFilepaper();

        return () => {
            // Any cleanup code goes here
        };
    }, []);

    const generateDownloadUrl = (type,fileName) => {
        let y="2y";
        if(year=='year4'){
            y='4y';
        }

        return `http://localhost:4000/data/${y}/${semester}/${subject}/${type}/${fileName}`;
      };



    return (
        <div>
            <Header />

            <div className="glow-containerC">
                <div className="glow-titleC" >
                    <h2>Notes</h2>
                    {nloading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>

                            <p>List of file:</p>
                            {notes && (
                                <ul>
                                    {notes.folderItems.map((fileName, index) => (

                                        <li key={index}>
                                            <a href={generateDownloadUrl('notes',fileName)} download={fileName}>
                                                {fileName}
                                            </a> 
                                        </li>

                                    ))}
                                </ul>
                            )}


                        </div>
                    )}
                </div>
                <div className="glow-titleC">
                    <h2>Paper</h2>
                    {ploading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>

                            <p>List of file:</p>
                            {paper&& (
                                <ul>
                                    {paper.folderItems.map((fileName, index) => (

                                        <li key={index}>
                                            <a href={generateDownloadUrl('paper',fileName)} download={fileName}>
                                                {fileName}
                                            </a>
                                        </li>

                                    ))}
                                </ul>
                            )}


                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}
