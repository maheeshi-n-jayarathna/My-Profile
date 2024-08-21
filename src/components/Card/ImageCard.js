import React from "react"
import { CardBody, CardHeading } from "../Text"

function ImageCard({ imageSrc, imageAlt, heading, body, image }) {
  return (
    <div className="card">
      {image ? (
        <div style={{ width: "100%" }}>{image}</div>
      ) : (
        <img src={imageSrc} alt={imageAlt} />
      )}
      <CardHeading>{heading}</CardHeading>
      <CardBody>{body}</CardBody>
    </div>
  )
}

export default ImageCard
