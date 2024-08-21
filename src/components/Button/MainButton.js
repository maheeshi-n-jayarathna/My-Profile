import React from "react"

function MainButton({ children, onClick }) {
  return (
    <button className="main_button" onClick={onClick}>
      {children}
    </button>
  )
}

export default MainButton
