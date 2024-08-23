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
      body: "Develop robust and scalable backend systems using modern frameworks and technologies to ensure high performance and security.",
      heading1: <div className="">
              <Button >Java</Button>
              <div className={'service-name'} >NodeJs</div>
              <div className={'service-name'} >Spring</div>
              <div className={'service-name'} >SpringBoot</div>
              <div className={'service-name'} >Python</div>
              <div className={'service-name'} >NestJs</div>
              <div className={'service-name'} >MongoDB</div>
              <div className={'service-name'} >MySQL</div>
              <div className={'service-name'} >PostgreSQL</div>
          </div>
    },
    {
      image: <img className="image" src={Services2} />,
      heading: "Frontend Development",
      body: "We specialize in developing high-performance, feature-rich mobile apps for iOS, Android, and cross-platform solutions, ensuring user engagement and retention.",
      text: <div className="">
              <Button >Java</Button>
              <div className={'service-name'} >NodeJs</div>
              <div className={'service-name'} >Spring</div>
              <div className={'service-name'} >SpringBoot</div>
              <div className={'service-name'} >Python</div>
              <div className={'service-name'} >NestJs</div>
              <div className={'service-name'} >MongoDB</div>
              <div className={'service-name'} >MySQL</div>
              <div className={'service-name'} >PostgreSQL</div>
          </div>
    },
    {
      image: <img className="image" src={Services3} />,
      heading: "Other Technologies",
      body: "Our team of talented designers specializes in creating intuitive, visually appealing, and engaging user interfaces and that drive adoption and success in software products.",
      text: <div className="">
              <Button >Java</Button>
              <div className={'service-name'} >NodeJs</div>
              <div className={'service-name'} >Spring</div>
              <div className={'service-name'} >SpringBoot</div>
              <div className={'service-name'} >Python</div>
              <div className={'service-name'} >NestJs</div>
              <div className={'service-name'} >MongoDB</div>
              <div className={'service-name'} >MySQL</div>
              <div className={'service-name'} >PostgreSQL</div>
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
            heading1={obj.heading1}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
export default ServicesSection
