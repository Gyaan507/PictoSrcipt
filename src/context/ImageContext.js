import React, { createContext, useState, useContext, useEffect } from "react"

const ImageContext = createContext()

export function ImageProvider({ children }) {
  const [selectedImage, setSelectedImage] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem("selectedImage")
    return saved || null
  })

  // Update localStorage when selectedImage changes
  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem("selectedImage", selectedImage)
    } else {
      localStorage.removeItem("selectedImage")
    }
  }, [selectedImage])

  const removeImage = () => {
    setSelectedImage(null)
  }

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage, removeImage }}>{children}</ImageContext.Provider>
  )
}

export function useImage() {
  const context = useContext(ImageContext)
  if (!context) {
    throw new Error("useImage must be used within an ImageProvider")
  }
  return context
}

