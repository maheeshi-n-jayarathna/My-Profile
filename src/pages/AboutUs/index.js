import React from "react" 
import AboutMainSection from "./AboutMainSection"
import ChooseUsSection from "./ChooseUsSection"
import FoundersSection from "./FoundersSection"
import TeamSection from "./TeamSection"
import { Element } from "react-scroll"


function AboutUs() {
  return (
    <>
    <Element className="aboutus_page_wrapper">
      <AboutMainSection />
    </Element>
    <Element className="bg-white">
      <FoundersSection />
    </Element>
    <Element className="bg-white">
      <ChooseUsSection />
    </Element>
    <Element className="bg-white">
      <TeamSection />
    </Element>
     
  </>
  )
}

export default AboutUs
