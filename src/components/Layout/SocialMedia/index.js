import { Flex } from "antd"
import "./style.css"
import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import animationFBData from "./../../../assets/animated_fb.json"
import animationLDData from "./../../../assets/animated_linkedn.json"
import animationWData from "./../../../assets/animated_whatsapp.json"
import animationInstaData from "./../../../assets/animated_instagram.json"
import { useEffect, useState } from "react"

const socialMediaData = [
  {
    animationData: animationFBData,
    link: "https://www.facebook.com/beecele",
    borderless: true
  },
  {
    animationData: animationLDData,
    link: "https://au.linkedin.com/company/beecele?trk=public_profile_topcard-current-",
    borderless: true
  },
  {
    animationData: animationWData,
    link: "https://wa.me/your-whatsapp-number"
  },
  {
    animationData: animationInstaData,
    link: "https://www.instagram.com/beecele_/"
  }
]

function SocialMedia() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % socialMediaData.length)
        setFadeOut(false)
      }, 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentData = socialMediaData[currentIndex]

  const getIconSize = () => {
    if (window.innerWidth <= 600) {
      return currentData.borderless ? "40px" : "20px"
    } else {
      return currentData.borderless ? "60px" : "31px"
    }
  }

  const getIconMargin = () => {
    if (window.innerWidth < 768) {
      return currentData.borderless ? "0" : "5px"
    } else {
      return currentData.borderless ? "0" : "10px"
    }
  }

  return (
    <div className="social_media_wrapper">
      <Flex align="center" className="social_icons_wrapper">
        <Link
          to={currentData.link}
          className={`social_media_icon  ${fadeOut ? "fade-out" : "fade-in"}`}
          target="_blank"
          style={{
            border: currentData.borderless ? "" : "4px solid #faaca8"
          }}
        >
          <Lottie
            animationData={currentData.animationData}
            loop={true}
            className={`social_media_icon_wrapper`}
            style={{
              width: getIconSize(),
              height: getIconSize(),
              margin: getIconMargin()
            }}
          />
          {console.log(getIconSize())}
        </Link>
      </Flex>
    </div>
  )
}

export default SocialMedia
