import * as React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import { Container } from "react-bootstrap"
import Footer from "./footer"
import Spacer from "./spacer"
import SEO from "./seo"

const Layout = ({ children, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div id="page-container">
          <SEO title={"title"} />
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />

          {children}

          <Spacer size="medium" />
          <Footer />
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
