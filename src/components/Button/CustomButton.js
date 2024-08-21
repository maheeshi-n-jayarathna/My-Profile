import React from "react"
import "./Button.css"

function CustomButton({ children, onClick }) {
  return (
    <button className="custom_button" onClick={onClick}>
      {children}
    </button>
  )
}

export default CustomButton
