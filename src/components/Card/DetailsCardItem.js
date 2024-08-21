import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

function DetailsCardItem({ title, body }) {
  const [isShow, setShow] = useState(false)
  return (
    <div
      className="details_card_item"
      onClick={() => {
        setShow(!isShow)
      }}
    >
      <div className="details_card_item_head_section">
        <span>{title}</span>
        {isShow ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div
        style={{ display: isShow ? "" : "none" }}
        className="details_card_item_body"
      >
        {body}
      </div>
    </div>
  )
}

export default DetailsCardItem
