import React from "react"

function DetailsCard({ title, bodyElement }) {
  return (
    <div className="details_card">
      <div className="details_card_title">{title}</div>
      <div className="details_card_wrapper">{bodyElement}</div>
    </div>
  )
}

export default DetailsCard
