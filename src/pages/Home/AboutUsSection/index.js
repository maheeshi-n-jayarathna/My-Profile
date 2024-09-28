import React from "react"
import { Subheading } from "../../../components"
import "./style.css"
import {
  image,
  image1,
  image2
} from "../../../assets/aboutUsPageImages"
import { Button, Checkbox, Col, Input, Row } from "antd"
import CVPath from '../../../assets/pdf/Maheeshi Jayarathna - CV.pdf';

function AboutUsSection() {
  const handleSubmit = () => {
    // Replace with the actual URL to your CV file
    const cvUrl = CVPath;
    window.open(cvUrl, '_blank');
};
  return (
    <div id={'about_id'} className="about_container">
      <h1 className="section_title">
        <span className="text-primary">About </span> Me
      </h1>
      <div className="about_content">
          <div className="text_container">
            <div className="text-desc">
              <p>
                Hello, I’m Maheeshi Jayarathna. I’m 23 years old. I’m a developer living in Kegalle,
                Sri Lanka. I’m currently studying in Institute Software Engineering (IJSE).
                I also have knowledge of web development,
                UI / UX designing, database management and frameworks.
                I am dedicated to quest of developing solutions that leverage on best practise technologies to deliver over the top user experience. Also Contact me to get the
                service you need in these areas creatively, efficiently and cleanly.
                Also, if you want to receive services in a very friendly manner,
                <b> please</b>
                    <a href="http://wa.me/+94704042310?text=Hello,Ishara" target="_blank"> Contact Me</a>
                    <b> or</b> <a href="mailto:maheeshijayarathna@gmail.com" target="_blank"> Send an E-mail </a> <b>for
                    me.</b>
              </p>
            </div>
            <a href="" download>
            <Button
                  className="btn_contact_submit"
                  onClick={handleSubmit}
                >
                  Download CV
                </Button>
                </a>
            <h1 className="education-text">Education</h1>
            <div className="education">
              <Row className="edu">
                <Col>
                  <img src={image2} />
                </Col>
                <Col>
                  <h2>BSc (Hons) in Computer Science at IJSE</h2>
                  <h3>Institute of Software Engineering</h3>
                  <h4><i class="fa-solid fa-calendar-days"></i>2022 Present</h4>
                </Col>
              </Row>

              <Row className="edu">
                <Col>
                  <img src={image1} />
                </Col>
                <Col>
                  <h2>Ordinary Level</h2>
                  <h3>St'Joseph's Balika Maha Vidyalaya - Kegalle</h3>
                  <h4><i class="fa-solid fa-calendar-days"></i>2006-2016</h4>
                </Col>
              </Row>

              <Row className="edu">
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
