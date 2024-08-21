import React from "react"

function CardHeading({ children }) {
  return (
    <div
      style={{
        fontSize: "24px",
        fontWeight: "700",
        textAlign: "center",
        marginTop: "5%"
      }}
    >
      {children}
    </div>
  )
}

export default CardHeading
