import { graphql } from "gatsby"
import React from "react"

import Gallery from "@browniebroke/gatsby-image-gallery"
import Layout from "../components/layout"

const MyPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
  }))
  // `images` is an array of objects with `thumb` and `full`
  return (
    <Layout>
      <Gallery images={images} />
    </Layout>
  )
}

// query MyQuery {
//   allFile {
//     edges {
//       node {
//         id
//         childImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//   }
// }

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
