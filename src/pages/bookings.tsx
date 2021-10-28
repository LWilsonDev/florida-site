import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Table from "react-bootstrap/Table"

const Bookings = ({ data, location }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const rates = content.rates
  return (
    <Layout>
      <Table responsive="sm" striped bordered>
        <thead>
          <tr>
            <th>Season</th>
            <th>Start</th>
            <th>End</th>
            <th>Nightly</th>
            <th>Min-nights</th>
          </tr>
        </thead>
        <tbody>
          {rates.map(rate => {
            return (
              <tr>
                <td>{rate.season}</td>
                <td>{rate.start}</td>
                <td>{rate.end}</td>
                <td>{rate.nightly}</td>
                <td>{rate.minNight}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Layout>
  )
}

export default Bookings
export const availQuery = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "bookings" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              rates {
                season
                start
                end
                nightly
                minNight
              }
            }
          }
        }
      }
    }
  }
`
