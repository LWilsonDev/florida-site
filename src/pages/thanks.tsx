import { Link } from "gatsby"
import React from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"

const Thanks = ({ data, location }) => {
  return (
    <Layout>
      <SectionTitle title="Thanks!" />
      <p className="lead mb-2">We will get back to you as soon as possible</p>
      <Link to={"home"}>Back to home</Link>
    </Layout>
  )
}

export default Thanks
