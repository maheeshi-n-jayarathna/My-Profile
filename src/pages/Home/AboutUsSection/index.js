import React from "react"
import { Subheading } from "../../../components"
import "./style.css"
import {
  image,
  image1,
  image2
} from "../../../assets/aboutUsPageImages"
import { Button, Checkbox, Col, Input, Row } from "antd"

function AboutUsSection() {
  return (
    <div id={'about_id'} className="about_container">
      <h1 className="section_title">
        <span className="text-primary">About </span> Me
      </h1>
      <div className="about_content">
          <div className="text_container">
            <div className="text-desc">
              <p>
                At Octal Technologies, we stand out with our innovative approach,
                unwavering commitment to quality, and dedication to client
                satisfaction. Embracing emerging technologies and adapting swiftly to
                the ever-evolving digital landscape, we prioritize collaboration to
                deliver exceptional results.
              </p>
            </div>
            <Button
                  className="btn_contact_submit"
                  // onClick={handleSubmit}
                >
                  Download CV
                </Button>
            <h1 className="education-text">Education</h1>
            <div className="education">
              <Row>
                <Col>
                  <img src={image2} />
                </Col>
                <Col>
                  <h2>BSc (Hons) in Computer Science at IJSE</h2>
                  <h3>Institute of Software Engineering</h3>
                  <h4><i class="fa-solid fa-calendar-days"></i>2022 Present</h4>
                </Col>
              </Row>

              <Row>
                <Col>
                  <img src={image1} />
                </Col>
                <Col>
                  <h2>Ordinary Level</h2>
                  <h3>St'Joseph's Balika Maha Vidyalaya - Kegalle</h3>
                  <h4><i class="fa-solid fa-calendar-days"></i>2006-2016</h4>
                </Col>
              </Row>

              <Row>
                <Col>
                  <img src={image1} />
                </Col>
                <Col>
                  <h2>Advanced Level</h2>
                  <h3>St'Joseph's Balika Maha Vidyalaya - Kegalle</h3>
                  <h4><i class="fa-solid fa-calendar-days"></i>2016-2019</h4>
                </Col>
              </Row>
            </div>
          </div>

          <div className="img_container">
            <div className="img">
              <img src={image}/>
            </div>
          </div>
          </div>
    </div>
  )
}
export default AboutUsSection
