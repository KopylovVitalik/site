import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import MenuLink from "./menu-link"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav
      className="navbar has-shadow is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <h1>
            <MenuLink
              className="is-size-4 has-text-success has-text-weight-bold"
              to="/"
            >
              {siteTitle}
            </MenuLink>
          </h1>
        </div>
        <div className="navbar-end">
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/blog/">Blog</MenuLink>
          <MenuLink to="/about/">About</MenuLink>
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
