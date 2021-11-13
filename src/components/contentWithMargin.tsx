import React from "react"
import { Container } from "react-bootstrap"

function ContentWithMargin({ children }) {
  return (
    <Container className="mt-4" id="content-wrap">
      {children}
    </Container>
  )
}

export default ContentWithMargin
