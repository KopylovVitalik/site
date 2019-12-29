import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const MenuLink = ({ children, to, direction = "right", className="navbar-item" }) => (
  <AniLink
    className={className}
    to={to}
    activeClassName="has-text-danger"
    cover
    direction={direction}
    duration={0.7}
    bg="#009FFD"
  >
    {children}
  </AniLink>
)

export default MenuLink


