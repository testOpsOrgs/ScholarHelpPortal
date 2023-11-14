import React from 'react';
import '../components/Header.css'
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className="header">
    <div className="logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <nav className="nav">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
       
      </ul>
    </nav>
    <div className="auth">
      <Link to ='/Login'> Admin Login</Link>
    </div>

    <div className="register">
      <Link to='/register'>Admin Register</Link>
    </div>


  </header>
  )
}
