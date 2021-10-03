import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Index = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <img src={data.image} />
        </div>
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
              title
              intro
              image
            }
          }
        }
      }
    }
  }
`
