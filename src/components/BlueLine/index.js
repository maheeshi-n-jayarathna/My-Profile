import React from "react"

function BlueLine({ width, height }) {
  return (
    <div
      style={{
        background: "linear-gradient(to right,#4070f4, #fff)",
        height: height,
        width: width
      }}
    ></div>
  )
}

export default BlueLine
