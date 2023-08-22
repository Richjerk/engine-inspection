import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ChatBot } from "./ChatBot" // Replace with your ChatBot component

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <ChatBot /> {/* Include your ChatBot component here */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Township Business ChatBot`, // Update with your site title
}

export default Header
