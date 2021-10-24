import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <footer className={"footer"}>
    <div className={"socials pt-2"}>
      <a
        aria-label="facebook"
        href="https://facebook.com/afamilydisneyescape"
        className="mx-4"
      >
        <FaFacebook size="48" color="white" />
      </a>
      <a
        aria-label="instagram"
        href="https://instagram.com/a.family.disney.escape"
        className="mx-4"
      >
        <FaInstagram size="48" color="white" />
      </a>
    </div>

    <p className="footer-text">
      © {new Date().getFullYear()} Website by{" "}
      <a className={"footer-link"} href="https://lucywilson.me">
        Lucy Wilson
      </a>
    </p>
  </footer>
)

export default Footer
