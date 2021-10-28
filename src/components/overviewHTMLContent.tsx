import React from "react"
import { graphql } from "gatsby"
import { StaticQuery } from "gatsby"

const Cont = ({ data }) => (
  <div
    className="html-content"
    dangerouslySetInnerHTML={{ __html: data }}
  ></div>
)
export default function OverviewHTMLContent() {
  return (
    <StaticQuery
      query={graphql`
        query OverviewContentQuery {
          markdownRemark(frontmatter: { templateKey: { eq: "overview" } }) {
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
