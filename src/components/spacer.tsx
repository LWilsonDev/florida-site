import React from "react"

interface spacerProps {
  size: "medium" | "large"
}

const Spacer: React.FC<spacerProps> = ({ size }) => {
  return <div style={{ height: size === "medium" ? "1.5rem" : "2rem" }} />
}

export default Spacer
