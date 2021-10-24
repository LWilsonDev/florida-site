import React from "react"
import {
  FaUserFriends,
  FaBed,
  FaBath,
  FaSwimmingPool,
  FaChild,
} from "react-icons/fa"

const AtAGlance = () => {
  return (
    <>
      <div className="pill">
        <FaUserFriends className="pill-icon" size={"18"} />
        <p className="pill-text">10 guests</p>
      </div>
      <div className="pill">
        <FaBed className="pill-icon" size={"18"} />
        <p className="pill-text">4 bedrooms</p>
      </div>
      <div className="pill">
        <FaBath className="pill-icon" size={"18"} />
        <p className="pill-text">3 bathrooms</p>
      </div>
      <div className="pill">
        <FaSwimmingPool className="pill-icon" size={"18"} />
        <p className="pill-text">Private pool</p>
      </div>
      <div className="pill">
        <FaChild className="pill-icon" size={"18"} />
        <p className="pill-text">Child-friendly</p>
      </div>
    </>
  )
}

export default AtAGlance
