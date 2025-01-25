import React from "react"
import { useNavigate } from "react-router-dom"

function Features() {
  const navigate = useNavigate()

  return (
    <div className="features-page">
      <div className="features-hero">
        <h1>Multi-Model Image Analysis</h1>
        <p>
          An advanced AI-powered tool that provides detailed and accurate captions for any image using multiple vision
          models.
        </p>
        <button
          className="discover-button"
          onClick={() => document.getElementById("features-section").scrollIntoView({ behavior: "smooth" })}
        >
          Discover Features
        </button>
      </div>

      <div className="features-section" id="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card blue">
            <h3>Multi-Model Analysis</h3>
            <p>
              Leverage multiple state-of-the-art vision models to generate comprehensive and accurate image descriptions
              from different perspectives.
            </p>
          </div>
          <div className="feature-card mint">
            <h3>Instant Caption Generation</h3>
            <p>
              Get detailed captions instantly for any image you upload. Our system processes images in real-time using
              advanced AI models.
            </p>
          </div>
          <div className="feature-card yellow">
            <h3>Cross-Model Validation</h3>
            <p>
              Compare and combine results from multiple vision models to ensure the highest accuracy and reliability in
              image understanding.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Start Analyzing Your Images Today!</h2>
        <p>Experience the power of multi-model image captioning and get detailed descriptions for your images.</p>
        <button className="try-it-now" onClick={() => navigate("/")}>
          Try It Now
        </button>
      </div>
    </div>
  )
}

export default Features

