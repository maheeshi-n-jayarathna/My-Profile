import React from "react"
import { ImageCard } from "./../../../components"
import "./style.css"
import {
  Services1,
  Services2,
  Services3
} from "../../../assets/services"
import { Button } from "antd"

function ServicesSection() {
  const data = [
    {
      image: <img className="image" src={Services1} />,
      heading: "Backend Development",
      body: <div className="">
              Develop robust and scalable backend systems using modern
              frameworks and technologies to ensure high performance and security.
              <div className="body-button">
                <Button >Java</Button>
                <Button >Spring</Button>
                <Button >SpringBoot</Button>
              </div>
              <div className="body-button">
                <Button >MySQL</Button>
              </div>
            </div>
    },
    {
      image: <img className="image" src={Services2} />,
      heading: "Frontend Development",
      body: <div className="">
              Create dynamic and responsive user interfaces with cutting-edge
              frontend technologies to provide an exceptional user experience.
              <div className="body-button">
                <Button >HTML5</Button>
                <Button >CSS3</Button>
                <Button >Javascript</Button>
              </div>
              <div className="body-button">
                <Button >Typescript</Button>
                <Button >React</Button>
                <Button >Bootstrap</Button>
              </div>
              <div className="body-button">
                <Button >Next.js</Button>
                <Button >SCSS</Button>
                <Button >Reactstrap</Button>
              </div>
              <div className="body-button">
                <Button >Tailwind CSS</Button>
                <Button >JQuery</Button>
                <Button >Ajex</Button>
              </div>
              <div className="body-button">
                <Button >Axios</Button>
              </div>
            </div>
    },
    {
      image: <img className="image" src={Services3} />,
      heading: "Other Technologies",
      body: <div className="">
              Leverage a wide range of tools & platforms to deliver comprehensive
              solutions, including version control, integration.
              <div className="body-button">
                <Button >Git</Button>
                <Button >GitHub</Button>
                <Button >Firebase</Button>
              </div>
            </div>
    }
  ]

  return (
    <div id={'service_id'} className="service_container">
      <h1 className="section_title text-center">
        <span className="text-primary">My</span> Services
      </h1>
      <div style={{ marginTop: "0px" }} className="card_container">
        {data.map((obj, index) => (
          <ImageCard
            image={obj.image}
            heading={obj.heading}
            body={obj.body}
            text={obj.text}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
export default ServicesSection
