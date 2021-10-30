import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Navbar expand="lg" style={{ backgroundColor: "#e3f2fd" }}>
      <Container>
        <Navbar.Brand href="#home" className={"logo"}>
          {siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="" id="basic-navbar-nav">
          <Nav as={"ul"} className="ms-auto ">
            {menuLinks.map(link => {
              return (
                <Nav.Item key={link.name} as={"li"}>
                  <Link
                    activeClassName={"active"}
                    className={"nav-link"}
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
