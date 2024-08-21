import React from "react"
import { CustomButton } from "../Button"

function DownloadSection({ appleDownloadLink, androidDownloadLink }) {
  const handleAppleButtonClick = () => {
    window.open(appleDownloadLink, "_blank")
  }

  const handleAndroidButtonClick = () => {
    window.open(androidDownloadLink, "_blank")
  }

  return (
    <div id="download_section" className="bottom_container">
      <div>
        <CustomButton onClick={handleAppleButtonClick}>
          <img
            src={
              "https://storage.googleapis.com/beecele-images/static-web/Apple_Logo.webp"
            }
            alt="apple log"
          />
          <span>App Store</span>
        </CustomButton>
      </div>
      <div>
        <CustomButton onClick={handleAndroidButtonClick}>
          <img
            src={
              "https://storage.googleapis.com/beecele-images/static-web/Android_OS.webp"
            }
            alt="android log"
          />
          <span>Google Play</span>
        </CustomButton>
      </div>
    </div>
  )
}

export default DownloadSection
