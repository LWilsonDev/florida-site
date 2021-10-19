import React from "react"
import Hr from "./hr"

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center mt-4 mb-4">
      <h2 className="title-inner">{title}</h2>
      <Hr />
    </div>
  )
}

export default SectionTitle
