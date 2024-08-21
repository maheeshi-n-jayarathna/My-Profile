import { Button } from "antd"
import React from "react"
import { Link } from "react-router-dom"

function Error() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh"
      }}
    >
      <h2 style={{ fontSize: "28px" }}>Page Not Found </h2>
      <p className="mb-2">
        Oops! 😖 The requested URL was not found on this server.
      </p>
      <Link to={"/"}>
        <Button type="primary" className="btn-sm-block mb-1">
          Back to home
        </Button>
      </Link>
    </div>
  )
}

export default Error
