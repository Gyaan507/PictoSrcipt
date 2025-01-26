import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="/logo.png"
            alt="PictoScript"
            className="logo-image"
          />
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="nav-link">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          {/* <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li> */}
        </ul>
        <Link to="/login" className="sign-in-button">
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

