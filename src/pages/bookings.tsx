import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/layout"
import Table from "react-bootstrap/Table"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../components/sectionTitle"
import Subtitle from "../components/subtitle"
import Hr from "../components/hr"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import Spacer from "../components/spacer"

const Bookings = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const bookings = data.allCalendar.edges[0].node.childrenCalendarEvent
  const rates = content.rates

  const localizer = momentLocalizer(moment)
  return (
    <Layout>
      <Container className={"pt-4"}>
        <SectionTitle title="Booking information" />
        <Subtitle text="Rates:" />
        <Table responsive="sm" striped bordered>
          <thead>
            <tr>
              <th>Season</th>
              <th>Start</th>
              <th>End</th>
              <th>Nightly</th>
              <th>Min-nights</th>
            </tr>
          </thead>
          <tbody>
            {rates.map(rate => {
              return (
                <tr>
                  <td>{rate.season}</td>
                  <td>{rate.start}</td>
                  <td>{rate.end}</td>
                  <td>{rate.nightly}</td>
                  <td>{rate.minNight}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Hr />
        <Row>
          <Col>
            <Subtitle text="Availability:" />
            <p>
              Please note, for the most up-to-date availability please{" "}
              <Link to={"contact"}>contact us</Link> and we will respond as soon
              as possible
            </p>
            <Spacer size={"medium"} />
            <div className={"text-center"}>
              <Calendar
                localizer={localizer}
                views={["month"]}
                events={bookings}
                startAccessor={booking => moment(booking.start.dateTime)}
                endAccessor={booking => moment(booking.end.dateTime)}
                style={{ height: 500 }}
              />
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
    allCalendar {
      edges {
        node {
          childrenCalendarEvent {
            summary
            start {
              dateTime
            }
            end {
              dateTime
            }
          }
          summary
        }
      }
    }
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
              rates {
                season
                start
                end
                nightly
                minNight
              }
            }
          }
        }
      }
    }
  }
`
