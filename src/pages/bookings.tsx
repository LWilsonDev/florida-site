import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

import { Button, Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../components/sectionTitle"
import Subtitle from "../components/subtitle"

//import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment-timezone"
import Spacer from "../components/spacer"

const Bookings = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  //const bookings = data.allCalendar.edges[0].node.childrenCalendarEvent

  moment.tz.setDefault("GMT")

  //const localizer = momentLocalizer(moment)
  return (
    <Layout>
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
              {/* <Calendar
                localizer={localizer}
                views={["month"]}
                events={bookings}
                startAccessor={booking => moment(booking.start.dateTime)}
                endAccessor={booking => moment(booking.end.dateTime)}
                style={{ height: 500 }}
              /> */}
              <Spacer size={"large"} />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Bookings
export const availQuery = graphql`
  query {
    # allCalendar {
    #   edges {
    #     node {
    #       childrenCalendarEvent {
    #         summary
    #         start {
    #           dateTime
    #         }
    #         end {
    #           dateTime
    #         }
    #       }
    #       summary
    #     }
    #   }
    # }
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
