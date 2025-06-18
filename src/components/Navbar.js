"use client"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={user ? "/" : "/features"} className="navbar-logo">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-JGYMPFBVrJ8WlvVRL0khpczsMDr9rp.png"
            alt="PictoScript"
            className="logo-image"
          />
        </Link>
        <ul className="navbar-menu">
          {user && (
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          )}
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
        </ul>
        <div className="navbar-auth">
          {user ? (
            <div className="user-menu">
              <span className="user-email">{user.email}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-link">
                Login
              </Link>
              <Link to="/register" className="register-button">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
