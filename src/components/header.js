import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import MenuLink from "./menu-link"

const Header = ({ siteTitle }) => (
  <header className='header'>
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <h1>
            <MenuLink
              className="is-size-3 has-text-weight-bold logo-text"
              to="/"
            >
              {siteTitle}
            </MenuLink>
          </h1>
        </div>
        <div className="navbar-end">
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/works/">Works</MenuLink>
          <MenuLink to="/blog/">Blog</MenuLink>
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
