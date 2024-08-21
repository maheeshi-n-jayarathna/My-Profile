import { Button } from "antd"
import React from "react"
import { Link } from "react-router-dom"
// import LogoWithName from "../../../assets/logo_with_name.png"
import HtmlComponent from "../../HtmlComponent"
import { FaArrowLeft } from "react-icons/fa"

function HtmlLayout({ children, htmlCode, backToHome = false }) {
  return (
    <>
      <div
        style={{
          margin: "50px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {backToHome && (
          <Link to="/">
            <Button
              style={{
                width: "250px",
                height: "100px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <FaArrowLeft size={30} color="#000" />
              <img
                src={
                  "https://storage.googleapis.com/beecele-images/static-web/logo_with_name.webp"
                }
                alt="logo"
              />
            </Button>
          </Link>
        )}
        {children}
      </div>
      <HtmlComponent htmlContent={htmlCode} />
    </>
  )
}

export default HtmlLayout
