import React from "react"
import { ImageCard } from "./../../../components"
import "./style.css"
import {
  Services1,
  Services2,
  Services3
} from "../../../assets/services"

function ServicesSection() {
  const data = [
    {
      image: <img className="image" src={Services1} />,
      heading: "Backend Development",
      body: "Our web development services cater to various website types, from static to dynamic applications, using advanced technologies to create user-friendly and effective websites."
    },
    {
      image: <img className="image" src={Services2} />,
      heading: "Frontend Development",
      body: "We specialize in developing high-performance, feature-rich mobile apps for iOS, Android, and cross-platform solutions, ensuring user engagement and retention."
    },
    {
      image: <img className="image" src={Services3} />,
      heading: "Other Technologies",
      body: "Our team of talented designers specializes in creating intuitive, visually appealing, and engaging user interfaces and that drive adoption and success in software products."
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
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
export default ServicesSection
