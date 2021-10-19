import { graphql } from "gatsby"
import React from "react"

import Gallery from "@browniebroke/gatsby-image-gallery"
import Layout from "../components/layout"

const MyPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // Use original name as caption.
    // The `originalName` is queried in a nested field,
    // but the `Gallery` component expects `caption` at the top level.
    caption: node.childImageSharp.meta.originalName,
  }))
  // `images` is an array of objects with `thumb` and `full`
  return (
    <Layout>
      <Gallery images={images} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
            meta: fixed {
              originalName
            }
          }
        }
      }
    }
  }
`
export default MyPage
