import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Features from "./components/Features"
import About from "./components/About"
import Footer from "./components/Footer"
import { ImageProvider } from "./context/ImageContext"
import "./App.css"

function App() {
  return (
    <ImageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ImageProvider>
  )
}

export default App

