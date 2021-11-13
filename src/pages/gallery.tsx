import { graphql } from "gatsby"
import React from "react"

import Gallery from "@browniebroke/gatsby-image-gallery"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Spacer from "../components/spacer"
import ContentWithMargin from "../components/contentWithMargin"

const MyPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
  }))
  // `images` is an array of objects with `thumb` and `full`
  return (
    <Layout>
      <ContentWithMargin>
        <Spacer size="medium" />
        <SectionTitle title="Gallery" />
        <Gallery images={images} />
        <Spacer size="medium" />
      </ContentWithMargin>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
export default MyPage
