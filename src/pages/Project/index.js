import React from "react"
import { MainPageContainer, MainSection } from "../../components"
import ProjectMainImage from "../../assets/project_main_image"

function Home() {
  const scrollToSection = () => {
    const section = document.getElementById("download_section")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }

  return (
    <div>
      <MainPageContainer
        mainSectionElement={
          <MainSection
            headingText="Octal Works"
            subheadingText="Welcome to Octal Works, where innovation meets execution. Explore our portfolio to see the trans formative solutions we've delivered for clients across industries."
            buttonText="Let’s go"
            image={<ProjectMainImage />}
            onClick={scrollToSection}
          />
        }
      />
    </div>
  )
}

export default Home
