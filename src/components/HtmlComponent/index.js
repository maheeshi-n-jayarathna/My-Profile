import React from "react"

const HtmlComponent = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}

export default HtmlComponent
