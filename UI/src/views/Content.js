import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Content() {
const {year , semester , subject } = useParams();
const navigate = useNavigate();
const navigatetoDownload=(type)=>{
    navigate(`/${year}/${semester}/${subject}/${type}`);
}



  return (
    <div>
        <Header/>

        <div className="glow-container">
				<h1 className="glow-title" onClick={()=>navigatetoDownload('notes')}>Notes</h1>
				<h2 className="glow-title"  onClick={()=>navigatetoDownload('paper')}>Paper</h2>
		</div>
        <Footer/>
    </div>
  )
}
