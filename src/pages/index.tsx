import React, { useEffect } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Index = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const bannerImg = content.banner_image.childImageSharp.gatsbyImageData
  const img1 = content.image_1.childImageSharp.gatsbyImageData

  return (
    <Layout bannerImg={bannerImg}>
      <div className={"text-center intro"}>
        <p className={"prefix"}>{content.prefix}</p>
        <h1 className={"title"}>{content.title}</h1>
        {/* <hr
          className={"hr"}
          style={{
            backgroundColor: "#4c7796",
            width: 300,
            height: 4,
            margin: "40px auto",
          }}
        /> */}
        <p className={"lead mt-4"}>{content.subtitle}</p>
      </div>
      <div style={{ width: "100%" }}>
        <GatsbyImage
          imgStyle={{ borderRadius: 15 }}
          image={img1}
          alt={"Florida apartment"}
        />
      </div>
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
              intro
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
            }
          }
        }
      }
    }
  }
`
