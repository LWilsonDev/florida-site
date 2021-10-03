import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const Footer = () => (
  <footer className={"footer"}>
    <p>
      © {new Date().getFullYear()} Website by{" "}
      <a className={"footer-link"} href="https://lucywilson.me">
        Lucy Wilson
      </a>
    </p>
  </footer>
)

export default Footer
