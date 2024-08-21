import "./style.css"
import React, { useState, useEffect } from 'react';
import {
    Gallery,
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9
  } from "../../../assets/gallery"
import { Button } from "antd"
import { FaArrowRight } from "react-icons/fa6"
import { Subheading } from "../../../components"

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textItems = ['Frontend Developer', 'Web Developer', 'UI/UX Designer', 'Software Engineer'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2000);

    return () => clearInterval(intervalId);
    }, [textItems]);
  return (
    <div className="gallery_container">
      {/* <div class="full-img" id="fullImgBox">
            <img src="assets/image/gallery1.jpg" id="fullImg"/>
            <span onclick="closeFullImg()">X</span>
        </div> */}
        <div class="img-gallery">
            <img src={Gallery1} />
            <img src={Gallery2} />
            <img src={Gallery3} />
            <img src={Gallery4} />
            <img src={Gallery5} />
            <img src={Gallery6} />
            <img src={Gallery7} />
            <img src={Gallery8} />
            <img src={Gallery9} />
        </div>
    </div>
  )
}
export default GallerySection
