import { graphql, Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import MyMapComponent from "../components/googleMap"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Subtitle from "../components/subtitle"
import AtAGlance from "../components/atAGlance"
import ContentWithMargin from "../components/contentWithMargin"

const Overview = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const amenities = content.amenities
  const houseRules = content.house_rules
  const nearby = content.nearby

  return (
    <Layout title="Overview">
      <ContentWithMargin>
        <Container className={"pt-4"}>
          <SectionTitle title="Overview" />
          <Subtitle text="At a glance:" />
          <Row>
            <Col>
              <AtAGlance />
              <div className="mt-2 mb-2 mx-auto">
                <Link to={"/gallery"}>View image gallery</Link>
              </div>
            </Col>
          </Row>
          <Subtitle text="Location:" />
          <p>{content.location_description}</p>
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2wGHwYIoo8mm0LNaWVamI1HHWx_PMIKs&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <Subtitle text="Amenities:" />
          <Row>
            {amenities.map((amenity, i) => {
              return (
                <Col md={4} sm={6} className={"pb-2"}>
                  <p className="bold">{amenity.amenity}</p>
                  <ul>
                    {amenity.details.map(item => {
                      return <li>{item.detail}</li>
                    })}
                  </ul>
                </Col>
              )
            })}
          </Row>
          <hr />
          <Subtitle text="What's nearby:" />
          <Row>
            {nearby.map((near, i) => {
              return (
                <Col md={4} sm={6} className={"pb-2"}>
                  <p className="bold">{near.category}</p>
                  <ul>
                    {near.details.map(item => {
                      return <li>{item.detail}</li>
                    })}
                  </ul>
                </Col>
              )
            })}
          </Row>
          <hr />
          <Subtitle text="House rules:" />
          <Row>
            {houseRules.map((rule, i) => {
              return (
                <Col md={4} sm={6} className={"pb-2"}>
                  <p className="bold">{rule.house_rule}</p>
                  <ul>
                    {rule.details.map(item => {
                      return <li>{item.detail}</li>
                    })}
                  </ul>
                </Col>
              )
            })}
          </Row>
        </Container>
      </ContentWithMargin>
    </Layout>
  )
}

export default Overview

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "overview" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              location_description
              amenities {
                amenity
                details {
                  detail
                }
              }
              house_rules {
                house_rule
                details {
                  detail
                }
              }
              nearby {
                category
                details {
                  detail
                }
              }
            }
          }
        }
      }
    }
  }
`
