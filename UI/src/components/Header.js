import React from 'react';
import '../components/Header.css'

export default function Header() {
  return (
    <header className="header">
    <div className="logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <nav className="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
      </ul>
    </nav>
    <div className="auth">
      <a href="#">Login / Signup</a>
    </div>
  </header>
  )
}
