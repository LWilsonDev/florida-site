import React from "react"
import Layout from "../components/layout"

const Map = ({ data, location }) => {
  return (
    <Layout title={"Map"} location={location}>
      <h1>I’m in a layout!</h1>
    </Layout>
  )
}

export default Map
