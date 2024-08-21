import React from "react"
import { ImageCard } from "../../components"
import ServiceImage1 from "../../assets/service_1_image"
import ServiceImage2 from "../../assets/service_2_image"
import ServiceImage3 from "../../assets/service_3_image"
import "./style.css"

function Home() {
  const data = [
    {
      image: <ServiceImage1 />,
      heading: "Web Development",
      body: "Our web development services cater to various website types, from static to dynamic applications, using advanced technologies to create user-friendly and effective websites."
    },
    {
      image: <ServiceImage2 />,
      heading: "Mobile App Development",
      body: "We specialize in developing high-performance, feature-rich mobile apps for iOS, Android, and cross-platform solutions, ensuring user engagement and retention."
    },
    {
      image: (
        <div>
          <ServiceImage3 />
        </div>
      ),
      heading: "UI/UX Design",
      body: "Our team of talented designers specializes in creating intuitive, visually appealing, and engaging user interfaces and that drive adoption and success in software products."
    }
  ]

  return (
    <div className="service_container">
      <h1 className="section_title text-center">
        <span className="text-primary">Our</span> Service
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

export default Home
