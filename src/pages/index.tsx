import React, { useEffect } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Hr from "../components/hr"
import { Container, Row, Col, Button } from "react-bootstrap"
import ContText from "../components/content"
import AtAGlance from "../components/atAGlance"

const Index = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const bannerImg = content.banner_image.childImageSharp.gatsbyImageData
  const img1 = content.image_1.childImageSharp.gatsbyImageData
  const img2 = content.image_2.childImageSharp.gatsbyImageData
  const img3 = content.image_3.childImageSharp.gatsbyImageData

  return (
    <Layout bannerImg={bannerImg}>
      <div className={"text-center intro"}>
        <p className={"prefix"}>{content.prefix}</p>
        <h1 className={"title"}>{content.title}</h1>
        <Hr />
        <h2 className={"mt-4 subtitle"}>{content.subtitle}</h2>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <p className={"mb-4"}>{content.intro_1}</p>
            <p className={"mb-4"}>{content.intro_2}</p>
          </Col>
          <Col className={"pb-4"} lg={6}>
            <div style={{ maxHeight: 400, overflow: "hidden" }}>
              <GatsbyImage
                imgStyle={{ maxHeight: 400, borderRadius: 15 }}
                image={img1}
                alt={"Florida apartment"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2 " lg={6}>
            <GatsbyImage
              imgStyle={{ maxHeight: 400, borderRadius: 15 }}
              image={img2}
              alt={"Florida apartment"}
            />
          </Col>
          <Col className="mt-2 mb-2" lg={6}>
            <p className={"mb-4"}>{content.intro_3}</p>
            <p className={"mb-4"}>{content.intro_4}</p>
            <p>{content.intro_5}</p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2 mb-2" lg={6}>
            <h3>Features:</h3>
            <AtAGlance />
            <div className="mt-2 mb-2 mx-auto">
              <Link to={"overview"}>View property details</Link>
            </div>
            <ContText />
          </Col>
          <Col className={"pb-4"} lg={6}>
            <div style={{ maxHeight: 400, overflow: "hidden" }}>
              <GatsbyImage
                imgStyle={{ maxHeight: 400, borderRadius: 15 }}
                image={img3}
                alt={"Florida apartment"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              prefix
              title
              subtitle
              intro_1
              intro_2
              intro_3
              intro_4
              intro_5
              banner_image {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              image_1 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              image_2 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              image_3 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
