import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import MyMapComponent from "../components/googleMap"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Subtitle from "../components/subtitle"
import {
  FaBed,
  FaBath,
  FaChild,
  FaUserFriends,
  FaSwimmingPool,
} from "react-icons/fa"

const Overview = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const amenities = content.amenities

  useEffect(() => {
    console.log("contnet", content)
  }, [content])
  return (
    <Layout>
      <Container className={"pt-4"}>
        <SectionTitle title="Overview" />
        <Subtitle text="At a glance:" />
        <Row>
          <Col>
            <div className="pill">
              <FaUserFriends className="pill-icon" size={"18"} />
              <p className="pill-text">10 guests</p>
            </div>
            <div className="pill">
              <FaBed className="pill-icon" size={"18"} />
              <p className="pill-text">4 bedrooms</p>
            </div>
            <div className="pill">
              <FaBath className="pill-icon" size={"18"} />
              <p className="pill-text">3 bathrooms</p>
            </div>
            <div className="pill">
              <FaSwimmingPool className="pill-icon" size={"18"} />
              <p className="pill-text">Private pool</p>
            </div>

            <div className="pill">
              <FaChild className="pill-icon" size={"18"} />
              <p className="pill-text">Child-friendly</p>
            </div>
          </Col>
        </Row>
        <Subtitle text="Location:" />
        {/* HTML content? */}
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
        <Subtitle text="House Rules:" />
        {/* list */}
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
              amenities {
                amenity
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
