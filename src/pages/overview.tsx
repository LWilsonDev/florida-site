import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import MyMapComponent from "../components/googleMap"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Subtitle from "../components/subtitle"
import AtAGlance from "../components/atAGlance"

const Overview = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const amenities = content.amenities
  const houseRules = content.house_rules
  const nearby = content.nearby

  return (
    <Layout>
      <Container className={"pt-4"}>
        <SectionTitle title="Overview" />
        <Subtitle text="At a glance:" />
        <Row>
          <Col>
            <AtAGlance />
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
              <Col md={4} sm={6}>
                <p>{amenity.amenity}</p>
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
        <Subtitle text="House Rules:" />
        <Row>
          {houseRules.map((rule, i) => {
            return (
              <Col md={4} sm={6}>
                <p>{rule.house_rule}</p>
                <ul>
                  {rule.details.map(item => {
                    return <li>{item.detail}</li>
                  })}
                </ul>
              </Col>
            )
          })}
        </Row>
        <hr />
        <Subtitle text="Nearby:" />
        <Row>
          {nearby.map((near, i) => {
            return (
              <Col md={4} sm={6}>
                <p>{near.category}</p>
                <ul>
                  {near.details.map(item => {
                    return <li>{item.detail}</li>
                  })}
                </ul>
              </Col>
            )
          })}
        </Row>
      </Container>
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
