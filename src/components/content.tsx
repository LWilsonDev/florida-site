import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Cont = ({ data }) => (
  <div
    className="html-content"
    dangerouslySetInnerHTML={{ __html: data }}
  ></div>
)
export default function ContText() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
            html
          }
        }
      `}
      render={data => {
        return <Cont data={data.markdownRemark.html} />
      }}
    />
  )
}
