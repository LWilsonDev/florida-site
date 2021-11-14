import { graphql } from "gatsby"
import React, { useEffect } from "react"

import Gallery from "@browniebroke/gatsby-image-gallery"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Spacer from "../components/spacer"
import ContentWithMargin from "../components/contentWithMargin"

const MyPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
  }))
  useEffect(() => {
    console.log(images)
  }, [])
  // `images` is an array of objects with `thumb` and `full`
  return (
    <Layout title="Gallery">
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
    images: allFile(sort: { fields: [base], order: ASC }) {
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
