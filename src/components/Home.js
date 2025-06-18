import React, { useCallback, useState } from "react"
// import { useNavigate } from "react-router-dom"
import { UploadIcon as FileUpload, X } from "lucide-react"
import { useImage } from "../context/ImageContext"

function Home() {
  const [isDragging, setIsDragging] = useState(false)
  const { selectedImage, setSelectedImage, removeImage } = useImage()
  // const navigate = useNavigate()

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file && file.type.startsWith("image/")) {
        setSelectedImage(URL.createObjectURL(file))
      }
    },
    [setSelectedImage],
  )

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedImage) {
      console.log("Analyzing image:", selectedImage)
      // Here you would typically send the image to your backend for analysis
    } else {
      alert("Please select an image to analyze")
    }
  }

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Start Analyzing Images</h1>
        <form onSubmit={handleSubmit} className="image-upload-form">
          <div
            className={`image-drop-area ${isDragging ? "dragging" : ""} ${selectedImage ? "has-image" : ""}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input type="file" accept="image/*" onChange={handleImageChange} id="image-upload" className="file-input" />
            {selectedImage ? (
              <div className="image-preview-container">
                <img src={selectedImage || "/placeholder.svg"} alt="Selected" className="preview-image" />
                <button type="button" onClick={removeImage} className="remove-button" aria-label="Remove image">
                  <X size={20} />
                </button>  
              </div>
            ) : (
              <div className="upload-prompt">
                <FileUpload size={48} />
                <p>Drag & Drop your image here or click to browse</p>
              </div>
            )}
          </div>
          <button type="submit" className="analyze-button" disabled={!selectedImage}>
            Analyze Image
          </button> 
        </form>
      </div>
      <div className="hero-image">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mqghUBNJeGuH73b7RNzoicdSllxSlO.png"
          alt="AI Robot"
        />
      </div>
    </div>
  )
}

export default Home

