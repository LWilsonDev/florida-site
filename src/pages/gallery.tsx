import React from "react"
import Layout from "../components/layout"

const Gallery = ({ data, location }) => {
  return (
    <Layout title={"Gallery"} location={location}>
      <h1>I’m in a layout!</h1>
    </Layout>
  )
}

export default Gallery
