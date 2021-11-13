import { Link } from "gatsby"
import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import ContentWithMargin from "../components/contentWithMargin"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Contact from "./contact"

const Thanks = () => {
  return (
    <Layout title="Thanks">
      <ContentWithMargin>
        <SectionTitle title="Thanks!" />
        <Container className={"text-center"}>
          <p className="lead mb-2">
            We will get back to you as soon as possible
          </p>
          <Link to={"home"}>Back to home</Link>
        </Container>
      </ContentWithMargin>
    </Layout>
  )
}

export default Thanks
