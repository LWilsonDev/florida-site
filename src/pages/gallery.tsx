import { graphql } from "gatsby"
import React, { useEffect } from "react"

import Gallery from "@browniebroke/gatsby-image-gallery"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Spacer from "../components/spacer"
import ContentWithMargin from "../components/contentWithMargin"
import { Button } from "react-bootstrap"

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
        <div className="text-center mb-4">
          <Button
            className={"button"}
            href="https://kuula.co/share/collection/7Z8Ds?logo=-1&info=0&fs=1&vr=1&zoom=1&gyro=0&initload=0&autorotate=0.3&thumbs=3"
            size="lg"
          >
            View virtual 360° tour
          </Button>
        </div>
        <p className="lead mb-4 text-center">
          Click on any image to open up the full gallery view
        </p>
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
