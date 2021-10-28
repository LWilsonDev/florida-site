import React from "react"
import { graphql } from "gatsby"
import { StaticQuery } from "gatsby"

const Cont = ({ data }) => (
  <div
    className="html-content"
    dangerouslySetInnerHTML={{ __html: data }}
  ></div>
)
export default function HomeHTMLContent() {
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
