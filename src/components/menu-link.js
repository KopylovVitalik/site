import React from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const MenuLink = ({ children, to, direction = "top", className }) => (
  <AniLink
    className={className}
    to={to}
    activeClassName="is-link-active"
    cover
    // paintDrip
    // swipe
    top="exit"
    direction={direction}
    duration={1.2}
    bg="#009FFD"
  >
    {children}
  </AniLink>
);

export default MenuLink;
