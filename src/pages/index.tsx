import React from "react"

import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Hr from "../components/hr"
import { Container, Row, Col } from "react-bootstrap"
import AtAGlance from "../components/atAGlance"
import ContentWithMargin from "../components/contentWithMargin"

const Index = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const img1 = content.image_1.childImageSharp.gatsbyImageData
  const img2 = content.image_2.childImageSharp.gatsbyImageData
  const img3 = content.image_3.childImageSharp.gatsbyImageData

  return (
    <Layout title="Home">
      <div style={{ display: "grid" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          src="../../static/img/banner.jpg"
          formats={["auto", "webp", "avif"]}
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid",
          }}
        >
          <div className={" intro colorBg "}>
            <p className={"prefix"}>{content.prefix}</p>
            <h1 className={"title"}>{content.title}</h1>
          </div>
        </div>
      </div>

      <ContentWithMargin>
        <Container>
          <Row className={"justify-content-md-center text-center"}>
            <Col md={"8"}>
              <h2 className={"mt-4 subtitle"}>{content.subtitle}</h2>
              <Hr />
            </Col>
          </Row>
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
            <Col className="mt-4 mb-4" lg={6}>
              <p className={"mb-4"}>{content.intro_3}</p>
              <p className={"mb-4"}>{content.intro_4}</p>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2" lg={6}>
              <p className={"mb-4"}>{content.intro_5}</p>
              <p className={"mb-4"}>{content.intro_6}</p>
              <h3>Key features:</h3>
              <AtAGlance />
              <div className="mt-2 mb-2 mx-auto">
                <Link to={"overview"}>View full property details</Link>
              </div>
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
      </ContentWithMargin>
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
              intro_6
              image_1 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
                publicURL
              }
              image_2 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
                publicURL
              }
              image_3 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
                publicURL
              }
            }
          }
        }
      }
    }
  }
`
