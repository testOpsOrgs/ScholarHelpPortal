import React from 'react';
import '../components/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon">Facebook</a>
            <a href="#" className="icon">Twitter</a>
            <a href="#" className="icon">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
