import "./style.css"
import {
  Certificate1,
  Certificate2,
  Certificate3,
  Certificate4,
  Certificate5,
  Certificate6,
  Certificate7,
  Certificate8
} from "../../../assets/achievement"
import { Button, Checkbox, Col, Input, Row } from "antd"

function TechnologiesSection() {
  return (
    <div className="technologies_container">
      <h1 className="section_title text-center margin-0">
        <span style={{ color: "#16205F" }}>My Skills</span>
      </h1>
      <div className="tech_logo_wrapper">
        <img
          src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
          alt="HTML"
          title="HTML"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
          alt="CSS"
          title="CSS"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"
          alt="Bootstrap"
          title="Bootstrap"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
          alt="Tailwind CSS"
          title="Tailwind CSS"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
          alt="Firebase"
          title="Firebase"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
          alt="JavaScript"
          title="JavaScript"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
          alt="React"
          title="React"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
          alt="TypeScript"
          title="TypeScript"
        />
        <img
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png"
          alt="Vite"
          title="Vite"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png"
          alt="Java"
          title="Java"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png"
          alt="Spring"
          title="Spring"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png"
          alt="Spring Boot"
          title="Spring Boot"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/117207242-07d5a700-adf4-11eb-975e-be04e62b984b.png"
          alt="Maven"
          title="Maven"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png"
          alt="Python"
          title="Python"
        />
        <img
          src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
          alt="MySQL"
          title="MySQL"
        />
      </div>

      <Row>
        <Col lg={8} sm={24}>
        <div className="certificate">
                    <a href="https://www.sololearn.com/certificates/CT-EMJ0NYGL">
                        <div class="hover-effect">
                            <img class="solo-learn-img" src={Certificate1}
                                alt="java solo learn certificate"/>
                            <div class="overlay">
                                <h2>Java Sololearn Certificate</h2>
                            </div>
                        </div>
                    </a>
                </div>
        </Col>

        <Col lg={8} sm={24} >
        <div class="certificate">
                    <a href="https://www.sololearn.com/certificates/CT-UOPECNRW">
                        <div class="hover-effect">
                            <img class="solo-learn-img" src={Certificate2}
                                alt="javaScript solo learn certificate"/>
                            <div class="overlay">
                                <h2>JavaScript Sololearn Certificate</h2>
                            </div>
                        </div>
                    </a>
                </div>
        </Col>

        <Col lg={8} sm={24} >
        <div class="certificate">
                    <a href="https://www.sololearn.com/certificates/CT-UOPECNRW">
                        <div class="hover-effect">
                            <img class="solo-learn-img" src={Certificate3}
                                alt="javaScript solo learn certificate"/>
                            <div class="overlay">
                                <h2>JavaScript Sololearn Certificate</h2>
                            </div>
                        </div>
                    </a>
                </div>
        </Col>

        <Col lg={8} sm={24} >
        <div class="certificate">
                    <a href="https://www.sololearn.com/certificates/CC-MXE3BOJC">
                        <div class="hover-effect">
                            <img class="solo-learn-img" src={Certificate4}
                                alt="css solo learn certificate"/>
                            <div class="overlay">
                                <h2>css Sololearn Certificate</h2>
                            </div>
                        </div>
                    </a>
                </div>
        </Col>

        <Col lg={8} sm={24}>
        <div class="certificate">
                    <a href="https://www.sololearn.com/certificates/CC-XC6F8WLR">
                        <div class="hover-effect">
                            <img class="solo-learn-img" src={Certificate5}
                                alt="html solo learn certificate"/>
                            <div class="overlay">
                                <h2>Html Sololearn Certificate</h2>
                            </div>
                        </div>
                    </a>
                </div>
        </Col>
        <Col lg={8} sm={24}>
        <div class="certificate">
                    <a href="https://www.sololearn.com/certificates/CT-ADCWW2JR">
                        <div class="hover-effect">
                            <img class="solo-learn-img" src={Certificate6}
                                alt="sql solo learn certificate"/>
                            <div class="overlay">
                                <h2>Sql Sololearn Certificate</h2>
                            </div>
                        </div>
                    </a>
                </div>
        </Col>
        <Col lg={8} sm={24}>
        <div class="certificate">
                    <a href="https://www.sololearn.com/certificates/CT-2UJWAOJQ">
                        <div class="hover-effect">
                            <img class="solo-learn-img" src={Certificate7}
                                alt="sql solo learn certificate"/>
                            <div class="overlay">
                                <h2>React Sololearn Certificate</h2>
                            </div>
                        </div>
                    </a>
                </div>
        </Col>
        <Col lg={8} sm={24}>
        <div class="certificate">
                    <a href="https://www.sololearn.com/certificates/CT-2UJWAOJQ">
                        <div class="hover-effect">
                            <img class="solo-learn-img" src={Certificate8}
                                alt="sql solo learn certificate"/>
                            <div class="overlay">
                                <h2>React Sololearn Certificate</h2>
                            </div>
                        </div>
                    </a>
                </div>
        </Col>
      </Row>         
    </div>
  )
}
export default TechnologiesSection
