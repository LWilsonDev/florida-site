import React, { useEffect } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Index = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const img = content.banner_image.childImageSharp.gatsbyImageData
  useEffect(() => {
    console.log("DATA", data)
  }, [])
  return (
    <Layout bannerImg={img}>
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
        <p className={"lead mt-4"}>{content.intro}</p>
      </div>
      <div style={{ width: "100%" }}>
        <GatsbyImage
          imgStyle={{ borderRadius: 15 }}
          image={img}
          alt={"Florida Beach"}
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
              intro
              banner_image {
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
