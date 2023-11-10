import React from 'react';
import '../components/Header.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const navigateToAdmin =()=>{
    navigate('/Admin', {replace:true});
  };

  return (
    <header className="header">
    <div className="logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <nav className="nav">
      <ul>
        <li><a href="#">Home</a></li>
       
      </ul>
    </nav>
    <div className="auth">
      <a href="#" onClick={navigateToAdmin}>Admin Login</a>
    </div>
  </header>
  )
}
