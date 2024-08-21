import { Col, Row } from "antd"
import React from "react"
import { Heading, Subheading } from "../Text"
import { MainButton } from "../Button"
import "./Section.css"

function MainSection({
  type,
  headingText,
  subheadingText,
  buttonText,
  onClick,
  imageSrc,
  imageAlt,
  image
}) {
  return (
    <main className="main_container">
      <Row justify="space-between" style={{ width: "100%" }}>
        <Col
          xs={{
            span: 24,
            order: 2
          }}
          md={{ span: 12, order: 1 }}
          className="main_left_container"
        >
          {headingText && <Heading type={type}>{headingText}</Heading>}
          {headingText && <div style={{ marginTop: "3%" }}></div>}
          {subheadingText && <div style={{ marginTop: "6%" }}></div>}
          {subheadingText && <Subheading>{subheadingText}</Subheading>}
          {buttonText && (
            <div style={{ marginTop: "10%" }}>
              <MainButton onClick={onClick}>{buttonText}</MainButton>
            </div>
          )}
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          md={{ span: 12, order: 2 }}
          className="main_right_container"
        >
          {imageSrc && (
            <img src={imageSrc} alt={imageAlt} className="main_section_image" />
          )}
          {image && image}
        </Col>
      </Row>
    </main>
  )
}

export default MainSection
