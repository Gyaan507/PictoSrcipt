import React from "react"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>RedesAI</h2>
          <p>Empowering businesses with social media intelligence.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p>demo@gmail.com</p>
          <p>+91 9876543210</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 RedesAI. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

