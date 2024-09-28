import React from "react"
import HomeSection from "./HomeSection"
import AboutUsSection from "./AboutUsSection"
import ServicesSection from "./ServicesSection"
import SkillSection from "./SkillSection"
import ContactSection from "./ContactSection"
import ProjectSection from "./ProjectSection"
import GallerySection from "./GallerySection"
import { Element } from "react-scroll"

function Home() {
  return (
    <>
      <Element className="">
        <HomeSection />
      </Element>
      <Element className="bg-white">
        <AboutUsSection />
      </Element>
      <Element className="bg-white">
        <ServicesSection />
      </Element>
      <Element className="bg-white">
        <ProjectSection />
      </Element> 
      <Element className="bg-white">
        <SkillSection />
      </Element>
      <Element className="bg-white">
        <GallerySection />
      </Element>
      <Element className="bg-white">
        <ContactSection />
      </Element>
    </>
  )
}

export default Home
