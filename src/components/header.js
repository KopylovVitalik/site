import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import MenuLink from "./menu-link"

const Header = ({ siteTitle, changeTheme, theme }) => {
  function changeThemeToggle(e, theme) {
    switch (theme) {
      case "light":
        changeTheme("dark")
        break
      case "dark":
        changeTheme("gradient")
        break
      case "gradient":
        changeTheme("light")
        break
      default:
        changeTheme("light")
        break
    }
  }

  const [menuOpen, toggleMenu] = React.useState(false)

  // const clickHandler = () => toggleMenu(!menuOpen)

  return (
    <header className="header">
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-inner">
            <div className="navbar-brand">
              <h1>
                <MenuLink
                  className="is-size-3 is-size-5-mobile has-text-weight-bold logo-text"
                  to="/"
                >
                  {siteTitle}
                </MenuLink>
              </h1>
            </div>
            <div className={`navbar-end ${menuOpen ? "is-open" : "is-closed"}`}>
              <div onClick={() => toggleMenu(false)}>
                <MenuLink to="/">Home</MenuLink>
              </div>
              <div onClick={() => toggleMenu(false)}>
                <MenuLink to="/works/">Works</MenuLink>
              </div>
              {/* <Link to="/blog/" onClick={() => toggleMenu(!menuOpen)}>Blog</Link> */}
              <button
                className={`theme-toggler button is-theme-${theme} is-outlined`}
                onClick={e => changeThemeToggle(e, theme)}
              >
                <span>{theme}</span>
              </button>
            </div>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={() => toggleMenu(!menuOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
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
