import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import MenuLink from "./menu-link"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav
      className="navbar has-shadow is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <h1>
            <Link
              className="is-size-2 has-text-danger has-text-weight-bold"
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="navbar-end">
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/blog/">Blogs</MenuLink>
          <MenuLink to="/contentful-blog/">Contentful Blogs</MenuLink>
          <MenuLink to="/about/">About</MenuLink>
          <MenuLink to="/contact-us/">Contacts</MenuLink>
          <MenuLink to="/projects/">Projects</MenuLink>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
