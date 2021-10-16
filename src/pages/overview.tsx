import React from "react"
import Layout from "../components/layout"

const Overview = ({ data, location }) => {
  return (
    <Layout title={"Overview"} location={location}>
      <h1>I’m in a layout!</h1>
    </Layout>
  )
}

export default Overview
