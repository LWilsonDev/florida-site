import React from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import ContentWithMargin from "../components/contentWithMargin"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"

const Contact = ({ data, location }) => {
  return (
    <Layout>
      <ContentWithMargin>
        <SectionTitle title="Contact us" />
        <Row className={"justify-content-md-center"}>
          <Col md={"8"} lg={"6"}>
            <p className="lead mb-4">
              For all booking enquiries please use the form below. We will get
              back to you as soon as possible.
            </p>
            <Form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
              action="/thanks"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label className={"pr-4"}>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
              </Form.Group>
              <Button className={"button"} type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </ContentWithMargin>
    </Layout>
  )
}

export default Contact
