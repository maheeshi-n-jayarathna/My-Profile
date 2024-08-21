import React from "react"
import { ImageCard } from "./../../../components"
// import ServiceImage1 from "../../../assets/backend-database.png"
// import ServiceImage2 from "../../../assets/frontend.png"
// import ServiceImage3 from "../../../assets/other-tech.png"
import "./style.css"

function ServicesSection() {
  const data = [
    {
      image: <img src="../../../assets/backend-database.png" />,
      heading: "Backend Development",
      body: "Our web development services cater to various website types, from static to dynamic applications, using advanced technologies to create user-friendly and effective websites."
    },
    {
      image: <img src="../../../assets/frontend.png"/>,
      heading: "Frontend Development",
      body: "We specialize in developing high-performance, feature-rich mobile apps for iOS, Android, and cross-platform solutions, ensuring user engagement and retention."
    },
    {
      image: (
        <div>
          <img src="../../../assets/other-tech.png"/>
        </div>
      ),
      heading: "Other Technologies",
      body: "Our team of talented designers specializes in creating intuitive, visually appealing, and engaging user interfaces and that drive adoption and success in software products."
    }
  ]

  return (
    <div className="service_container">
      <h1 className="section_title text-center">
        <span className="text-primary">My</span> Services
      </h1>
      <div style={{ marginTop: "50px" }} className="card_container">
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
