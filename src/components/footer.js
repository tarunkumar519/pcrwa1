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
      <br></br>
       <p>       <a href="https://pcrwa.org/contact">Contact Us</a></p>
       <a href="https://tarunx.me">Tarun Reddy</a>
<br></br>
      <p>
        Created by <a href="https://pcrwa.org/gallery">Gallery</a></p>
    </div>
  </footer>
)

export default Footer
