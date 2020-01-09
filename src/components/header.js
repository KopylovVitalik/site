import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import MenuLink from "./menu-link"
import GlobalContext from "../context/globalContext"

const Header = ({ siteTitle }) => {
  const globalContext = React.useContext(GlobalContext)
  const { theme, setTheme } = globalContext

  function changeThemeToggle(e, theme) {
    switch (theme) {
      case "light":
        setTheme("dark")
        break
      case "dark":
        setTheme("gradient")
        break
      case "gradient":
        setTheme("light")
        break
      default:
        setTheme("light")
        break
    }
  }

  return (
    <header className="header">
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
            <button
              className={`theme-toggler button is-theme-${theme} is-outlined`}
              onClick={e => changeThemeToggle(e, theme)}
            >
              <span>{theme}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
