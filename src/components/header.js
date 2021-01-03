import { Link } from "gatsby";
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types";
import React from "react";
import MenuLink from "./menu-link";
import GlobalContext from "../context/globalContext";

const Header = ({ siteTitle }) => {
  const globalContext = React.useContext(GlobalContext);
  const { theme, setTheme } = globalContext;

  function changeThemeToggle(e, theme) {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("gradient");
        break;
      case "gradient":
        setTheme("light");
        break;
      default:
        setTheme("light");
        break;
    }
  }

  const [menuOpen, toggleMenu] = React.useState(false);

  // const clickHandler = () => toggleMenu(!menuOpen)

  return (
    <header className="header">
      <div className="header__inner inner">
        <nav
          className="main-menu"
          role="navigation"
          aria-label="main navigation"
        >
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
            {/* <div onClick={() => toggleMenu(false)}>
              <MenuLink to="/blog/">Blog</MenuLink>
            </div> */}

            <div onClick={() => toggleMenu(false)}>
              <MenuLink to="/post/">Posts</MenuLink>
            </div>

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
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
