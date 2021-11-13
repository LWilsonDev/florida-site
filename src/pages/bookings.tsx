import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/layout"

import { Button, Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../components/sectionTitle"
import Subtitle from "../components/subtitle"

import Spacer from "../components/spacer"
import ContentWithMargin from "../components/contentWithMargin"
import loadable from "@loadable/component"

const FullCalendar = loadable(() => import("@fullcalendar/react")) // must go before plugins
const dayGridPlugin = loadable(() => import("@fullcalendar/daygrid"))
const googleCalendarPlugin = loadable(
  () => import("@fullcalendar/google-calendar")
)

const Bookings = ({ data }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const apiKey = process.env.GATSBY_GOOGLE_CAL_API

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
                {apiKey ? (
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
                ) : null}

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
