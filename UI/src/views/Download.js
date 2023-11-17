import React from 'react'
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';



export default function Download() {
    const {year,semester,subject,type}= useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);



  
    useEffect(() => {
       
      const fetchFile = async () => {
        let y="2y";
        if(year=='year4'){
            y='4y';
        }
        try {
          const response = await fetch(`http://localhost:4000/data/${y}/${semester}/${subject}/${type}`); // Replace with your actual API endpoint
          const result = await response.json();
          console.log(result);
          setData(result);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching file:', error);
          setLoading(false);
        }
      };
  
      fetchFile();

      return () => {
        // Any cleanup code goes here
      };
    }, []);

    const generateDownloadUrl = (fileName) => {
        let y="2y";
        if(year=='year4'){
            y='4y';
        }

        return `http://localhost:4000/data/${y}/${semester}/${subject}/${type}/${fileName}`;
      };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>

          <p>List of file:</p>
          {data && (
            <ul>
                {data.folderItems.map((fileName, index) => (
                  
                  <li key={index}>
                    <a href={generateDownloadUrl(fileName)} download={fileName}>
                    {fileName}
                    </a>
                    </li>
                
                ))}
            </ul>
          )}
        

        </div>
      )}

    
    </div>
  )
}
