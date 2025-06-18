import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Features from "./components/Features"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext"
import { ImageProvider } from "./context/ImageContext"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <ImageProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              {/* Public routes - accessible without authentication */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />

              {/* Protected routes - require authentication */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ImageProvider>
    </AuthProvider>
  )
}

export default App
