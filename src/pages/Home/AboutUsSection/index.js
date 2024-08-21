import React from "react"
import { Subheading } from "../../../components"
import "./style.css"

function AboutUsSection() {
  return (
    <div id={'about_id'} className="about_container">
      <h1 className="section_title">
        <span className="text-primary">About </span> Me
      </h1>
      <div className="about_desc">
        <div className="text-desc">
          <Subheading>
            At Octal Technologies, we stand out with our innovative approach,
            unwavering commitment to quality, and dedication to client
            satisfaction. Embracing emerging technologies and adapting swiftly to
            the ever-evolving digital landscape, we prioritize collaboration to
            deliver exceptional results.
          </Subheading>
        </div>
        <div className="img">
          <img src=""/>
        </div>
      </div>
    </div>
  )
}
export default AboutUsSection
