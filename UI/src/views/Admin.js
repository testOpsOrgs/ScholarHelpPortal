import React from 'react';
import { useState } from 'react';
import '../views/Admin.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext } from '../UserContext';
import Header from '../components/Header';
import { useContext } from 'react';
import { useEffect } from 'react';

export default function Admin() {
   const {user}= useContext(UserContext);
 
let options=[
  {
    year:"2Y",
    semesters:[
      {semester:'sem1',
        subjects:[
          {
            subject:"devops"
          },
          {
            subject:"os"
          },
          {
            subject:"2 A 3"
          },
          {
            subject:"2 A 4"
          }
        ]

      },
      {semester:'Second',
        subjects:[
          {
            subject:"2 B 1"
          },
          {
            subject:"2 B 2"
          },
          {
            subject:"2 B 3"
          },
          {
            subject:"2 B 4"
          }
        ]
      },
      {semester:'Third',
      subjects:[
        {
          subject:"2 C 1"
        },
        {
          subject:"2 C 2"
        },
        {
          subject:"2 C 3"
        },
        {
          subject:"2 C 4"
        }
      ]
    },
      {semester:'Fourth',
        subjects:[
          {
            subject:"2 D 1"
          },
          {
            subject:"2 D 2"
          },
          {
            subject:"2 D 3"
          },
          {
            subject:"2 D 4"
          }
        ]
      }
    ]  
  },

  {
    year:"4Y",
    semesters:[
      {semester:'First',
        subjects:[
          {
            subject:"4 A 1"
          },
          {
            subject:"4 A 2"
          },
          {
            subject:"4 A 3"
          },
          {
            subject:"4 A 4"
          }
        ]

      },
      {semester:'Second',
        subjects:[
          {
            subject:"4 B 1"
          },
          {
            subject:"4 B 2"
          },
          {
            subject:"4 B 3"
          },
          {
            subject:"4 B 4"
          }
        ]
      },
      {semester:'Third',
      subjects:[
        {
          subject:"4 C 1"
        },
        {
          subject:"4 C 2"
        },
        {
          subject:"4 C 3"
        },
        {
          subject:"4 C 4"
        }
      ]
    },
      {semester:'Fourth',
        subjects:[
          {
            subject:"4 D 1"
          },
          {
            subject:"4 D 2"
          },
          {
            subject:"4 D 3"
          },
          {
            subject:"4 D 4"
          }
        ]
      },
      {semester:'Fivth',
        subjects:[
          {
            subject:"4 E 1"
          },
          {
            subject:"4 E 2"
          },
          {
            subject:"4 E 3"
          },
          {
            subject:"4 E 4"
          }
        ]

      },
      {semester:'Sixth',
        subjects:[
          {
            subject:"4 F 1"
          },
          {
            subject:"4 F 2"
          },
          {
            subject:"4 F 3"
          },
          {
            subject:"4 F 4"
          }
        ]
      },
      {semester:'Seventh',
      subjects:[
        {
          subject:"4 G 1"
        },
        {
          subject:"4 G 2"
        },
        {
          subject:"4 G 3"
        },
        {
          subject:"4 G 4"
        }
      ]
    },
      {semester:'Eigth',
        subjects:[
          {
            subject:"4 H 1"
          },
          {
            subject:"4 H 2"
          },
          {
            subject:"4 H 3"
          },
          {
            subject:"4 H 4"
          }
        ]
      }
    ]  
  }
];



const [selectedYear, setSelectedYear] = useState(options[0].year);
const [selectedSemester, setSelectedSemester] = useState(options[0].semesters[0].semester);
const [selectedSubject, setSelectedSubject] = useState(options[0].semesters[0].subjects[0].subject);
const [selectedContent,setSelectedContent] = useState('notes');

const onSelect = (selectedYear, selectedSemester, selectedSubject) => {
  // Define your logic for handling the selected year, semester, and subject here
  // console.log(`Selected Year: ${selectedYear}, Selected Semester: ${selectedSemester}, Selected Subject: ${selectedSubject}`);
  console.log(`/:${selectedYear}/:${selectedSemester}/:${selectedSubject}`);
};

const handleYearChange = (event) => {
  const selectedYear = event.target.value;
  setSelectedYear(selectedYear);
  const defaultSemester = options.find((option) => option.year === selectedYear).semesters[0].semester;
  setSelectedSemester(defaultSemester);
  const defaultSubject = options.find((option) => option.year === selectedYear).semesters[0].subjects[0].subject;
  setSelectedSubject(defaultSubject);
  onSelect(selectedYear, defaultSemester, defaultSubject);
};

const handleSemesterChange = (event) => {
  const selectedSemester = event.target.value;
  setSelectedSemester(selectedSemester);
  const defaultSubject = options
    .find((option) => option.year === selectedYear)
    .semesters.find((semester) => semester.semester === selectedSemester).subjects[0].subject;
  setSelectedSubject(defaultSubject);
  onSelect(selectedYear, selectedSemester, defaultSubject);
};

const handleSubjectChange = (event) => {
  const selectedSubject = event.target.value;
  setSelectedSubject(selectedSubject);
  onSelect(selectedYear, selectedSemester, selectedSubject);
};

const handleContentChange = (event) =>{
  const selectedContent = event.target.value;
  setSelectedContent(selectedContent);
  console.log(selectedContent);

}



/****************************Uploading********************************* */

  
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    // const api=`/:${selectedYear}/:${selectedFile}/:${selectedSubject}`;
    const api= 'http://localhost:4000/upload/data/2Y/sem1/devops/notes'
    console.log(api);
    axios.post(`${api}`, formData)
      .then((response) => {
        console.log(response.data);
        toast.success(response.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.success(error, {
          position: toast.POSITION.BOTTOM_CENTER
        });
      });
  };

  useEffect(() => {
    if (!user) {
      // Redirect to login page if not authenticated
      window.location.href = '/Login'; // Replace with your login page route
    }
  }, [user]);

  
  return (
    <div className='AdminPage'>
      <Header>/</Header>
      <h1 className='head'>Welcome to Admin Page</h1>

      <div className='selection'>
        <div className='year'>
          <label htmlFor="year">Select Year:</label>
          <select id="year" value={selectedYear} onChange={handleYearChange}>
            {options.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </select>
        </div>

        <div className='semester'>
          <label htmlFor="semester">Select Semester:</label>
          <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
            {options.find((option) => option.year === selectedYear).semesters.map((semester) => (
              <option key={semester.semester} value={semester.semester}>
                {semester.semester}
              </option>
            ))}
          </select>
        </div>

        <div className='subject'>
          <label htmlFor="subject">Select Subject:</label>
          <select id="subject" value={selectedSubject} onChange={handleSubjectChange}>
            {options
              .find((option) => option.year === selectedYear)
              .semesters.find((semester) => semester.semester === selectedSemester).subjects.map((subject) => (
                <option key={subject.subject} value={subject.subject}>
                  {subject.subject}
                </option>
              ))}
          </select>
        </div>
        <div className='content'>
          <label htmlFor="content">Content Type:</label>
          <select id="contentType" value={selectedContent} onChange={handleContentChange}>
            <option value="notes" key="notes">Notes</option>
            <option value="paper" key="paper">Paper</option>

          </select>
          

        </div>

        <div className='upload'>
          <label htmlFor="upload">Upload Content:</label>
          <input type="file" onChange={handleFileUpload} />

        </div>

       

        <button onClick={handleUpload}>Upload</button>

      </div>
      <ToastContainer/>
	</div>
  );
}