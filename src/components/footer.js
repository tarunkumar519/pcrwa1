/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
       <p><a href="https://pcrwa.org/contact">Contact Us</a> </p>
       <a href="https://tarunx.me">Gallery</a>
      <p>
      © PCRWA 2022   Created by <a href="https://tarunx.me">Tarun Reddy</a></p>
    </div>
  </footer>
)

export default Footer
