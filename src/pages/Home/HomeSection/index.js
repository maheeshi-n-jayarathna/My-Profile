import "./style.css"
import React, { useState, useEffect } from 'react';
import { Button } from "antd"
import { FaArrowRight } from "react-icons/fa6"
import { Subheading } from "../../../components"

function HomeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textItems = ['Frontend Developer', 'Web Developer', 'UI/UX Designer', 'Software Engineer'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2000);

    return () => clearInterval(intervalId);
    }, [textItems]);
  return (
    <div id={'home_id'} className="home_container">
      {/* <img
        src={
          "https://res.cloudinary.com/dqlhu94pv/image/upload/v1718082980/home_bg_ube7fm.png"
        }
        alt="home background"
      /> */}
      <div className="home_container_wrapper">
        <main className="main_container">
          <div className="home_main_section">
            <h1 className="heading">
              I'm Maheeshi Jayarathna 
              <br />a {' '}
        <span
          className="text"
        >
          {textItems[currentIndex]}
        </span>
            </h1>
            <p>
            I'm a Software Engineer from Sri Lanka, specializing in Frontend Development, Web
            Development, and UX/UI designing.
            </p>
            <br />
            <br />
            {/* <BlueLine width="100%" height="2px" /> */}
            <br />
            <br />
            {/* <Button className="btn_home">
              <span>Let’s get started!</span>
              <FaArrowRight size={15} />
            </Button> */}
          </div>
        </main>
      </div>
    </div>
  )
}
export default HomeSection
