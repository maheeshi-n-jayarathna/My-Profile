import React from "react"
import "./NotificationPage.css"

function NotificationPage({ titleElement, image, bodyText }) {
  return (
    <div className="notification_container">
      <div className="notification_wrapper">
        <div className="notification_title">{titleElement}</div>
        <div className="notification_image">
          <img src={image} alt="notification alert" width="100%" />
        </div>
        <div className="notification_body">{bodyText}</div>
      </div>
    </div>
  )
}

export default NotificationPage
