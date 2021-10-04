import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import { Container } from "react-bootstrap"
import Footer from "./footer"
import { GatsbyImage } from "gatsby-plugin-image"

// const Layout = ({ location, title, children }) => {
//   const rootPath = `${__PATH_PREFIX__}/`
//   const isRootPath = location.pathname === rootPath
//   let header

//   if (isRootPath) {
//     header = (
//       <div>
//         <h1 className="main-heading">
//           <Link to="/">Home</Link>
//         </h1>

//         <Link className="header-link-home" to="/overview">
//           Overview
//         </Link>
//         <Link className="header-link-home" to="/map">
//           Map
//         </Link>
//         <Link className="header-link-home" to="/gallery">
//           Gallery
//         </Link>
//         <Link className="header-link-home" to="/rates">
//           Rates
//         </Link>
//         <Link className="header-link-home" to="/availability">
//           Availability
//         </Link>
//         <Link className="header-link-home" to="/reviews">
//           Reviews
//         </Link>
//         <Link className="header-link-home" to="/contact">
//           Contact
//         </Link>
//       </div>
//     )
//   } else {
//     header = (
//       <Link className="header-link-home" to="/">
//         {title}
//       </Link>
//     )
//   }

//   return (
//     <div className="global-wrapper" data-is-root-path={isRootPath}>
//       <header className="global-header">{header}</header>
//       <main>{children}</main>
//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href="https://www.gatsbyjs.com">Gatsby</a>
//       </footer>
//     </div>
//   )
// }

const Layout = ({ children, bannerImg }) => (
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
          <Helmet
            title={"title"}
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" },
            ]}
          ></Helmet>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          {bannerImg ? (
            <Container
              fluid
              style={{ maxHeight: 500, overflow: "hidden", padding: 0 }}
            >
              <GatsbyImage image={bannerImg} alt={"Florida Beach"} />
            </Container>
          ) : null}

          <Container id="content-wrap">{children}</Container>
          <Footer />
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
