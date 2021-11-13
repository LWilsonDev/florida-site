import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/layout"

import { Button, Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../components/sectionTitle"
import Subtitle from "../components/subtitle"

import Spacer from "../components/spacer"
import ContentWithMargin from "../components/contentWithMargin"
import { Helmet } from "react-helmet"

import FullCalendar from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!
import googleCalendarPlugin from "@fullcalendar/google-calendar"

const Bookings = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const apiKey = process.env.GOOGLE_CAL_API

  return (
    <Layout title="Bookings">
      <ContentWithMargin>
        <Container className={"pt-4"}>
          <SectionTitle title="Booking information" />
          <div className="text-center">
            <Button className={"button"} href="/contact" size="lg">
              BOOK NOW
            </Button>
          </div>

          <Row>
            <Col>
              <Subtitle text="Availability:" />
              <p>
                {content.booking_info} <Link to={"/contact"}>contact us</Link>
              </p>
              <Spacer size={"medium"} />
              <div className={"text-center"}>
                <FullCalendar
                  plugins={[dayGridPlugin, googleCalendarPlugin]}
                  initialView="dayGridMonth"
                  dayHeaderClassNames={"customDates"}
                  googleCalendarApiKey={apiKey}
                  events={{
                    googleCalendarId:
                      "trpnc55gk43d2onm08rt90nbmnh2uv9t@import.calendar.google.com",
                  }}
                  displayEventTime={false}
                  eventDisplay={"block"}
                  eventTextColor={"#4c7796"}
                  eventColor={"#4c7796"}
                />
                <Spacer size={"large"} />
              </div>
            </Col>
          </Row>
        </Container>
      </ContentWithMargin>
    </Layout>
  )
}

export default Bookings
export const availQuery = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "bookings" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              booking_info
            }
          }
        }
      }
    }
  }
`
