import { Link } from "gatsby";
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types";
import React from "react";
import MenuLink from "../menu-link";
import Logo from "./logo";
import ThemeToggler from "./theme-toggler";

const Header = ({ siteTitle }) => {

  const [menuOpen, toggleMenu] = React.useState(false);

  const menuLinks = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Portfolio",
      to: "/portfolio",
    },
    {
      title: "Posts",
      to: "/post",
    },
  ];

  return (
    <header className="header">
      <div className="header__inner inner">
        <div className="header__logo">
          <h1>
            <MenuLink className="logo" to="/">
              <Logo />
            </MenuLink>
          </h1>
        </div>
        <div className="header__menu">
          <nav className="main-menu">
            <ul className="main-menu__list">
              {menuLinks.map(el => (
                <li
                  className="main-menu__item"
                  onClick={() => toggleMenu(false)}
                  key={el.title}
                >
                  <MenuLink to={el.to} className="main-menu__link">
                    {el.title}
                  </MenuLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header__theme-toggler">
          <ThemeToggler />
        </div>
        <div className="header__mobile-toggler">
          <a className="navbar-burger" onClick={() => toggleMenu(!menuOpen)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
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
