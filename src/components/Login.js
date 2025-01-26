import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Here you would typically send a request to your authentication API
    console.log("Login attempt with:", email, password)
    // Simulating an API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to home page after successful login
      navigate("/")
    }, 2000)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login to PictoScript</h2>
        <p className="login-description">Enter your email and password to access your account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="login-footer">
          <button className="secondary-button" onClick={() => navigate("/signup")}>
            Create an account
          </button>
          <button className="link-button" onClick={() => navigate("/forgot-password")}>
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

