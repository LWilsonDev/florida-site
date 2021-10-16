import React, { useEffect } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Hr from "../components/hr"
import { Container, Row, Col } from "react-bootstrap"
import ContText from "../components/content"

const Index = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const bannerImg = content.banner_image.childImageSharp.gatsbyImageData
  const img1 = content.image_1.childImageSharp.gatsbyImageData
  const img2 = content.image_2.childImageSharp.gatsbyImageData

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
          <Col md={6}>
            <ContText />
          </Col>
          <Col md={6}>
            <GatsbyImage
              imgStyle={{ maxHeight: 360, borderRadius: 15, marginBottom: 15 }}
              image={img1}
              alt={"Florida apartment"}
            />
          </Col>
        </Row>
        <Row>
          <Col className="mt-2 mb-2" md={6}>
            <GatsbyImage
              imgStyle={{ maxHeight: 400, borderRadius: 15, marginBottom: 15 }}
              image={img2}
              alt={"Florida apartment"}
            />
          </Col>
          <Col className="mt-2 mb-2" md={6}>
            <ContText />
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
              banner_image {
                childImageSharp {
                  gatsbyImageData(
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
            }
          }
        }
      }
    }
  }
`
