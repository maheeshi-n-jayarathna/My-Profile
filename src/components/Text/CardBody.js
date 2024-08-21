import React from "react"

function CardBody({ children }) {
  return (
    <div
      style={{
        fontSize: "16px",
        fontWeight: "400",
        textAlign: "center",
        marginTop: "4%"
      }}
    >
      {children}
    </div>
  )
}

export default CardBody
