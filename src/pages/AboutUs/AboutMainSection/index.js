import React from "react"
import "./style.css"


function AboutMainSection() {
  return (
    <div className="aboutus_container">
      <div className="aboutus_container_wrapper">
        <main className="main_container">
          <div className="aboutus_main_section">
            <h4 className="Page_title">
              Our<span className="text-primary">  Story</span>
            </h4>
            <h1 className="heading">
              Discover Our Journey and Meet the Team Behind Our Success
            </h1>
            <div className="about_desc">
              <h6 className="desc">

                After gaining invaluable experience, our founder and his team decided to realize our collective potential to innovate and make a significant impact. With a shared vision and a passion for excellence, we established Octal Technologies, a dynamic startup that delivers top-notch digital solutions.

                At Octal Technologies, we believe in harnessing our diverse skills and industry knowledge to offer comprehensive services that cater to the unique needs of our clients. Our journey began with a clear mission: to transform ideas into reality through creativity, precision, and a deep understanding of the digital landscape.

              </h6>

            </div>
          </div>
          <div className="sub_container">
            <img
              src={
                "https://additiveanalytics.com/wp-content/uploads/2022/09/pexels-fauxels-3184325.jpg"
              }
              alt="home"
            />
          </div>
        </main>
        
      </div>
      
    </div>

  )
}

export default AboutMainSection
