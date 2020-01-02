import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const MenuLink = ({ children, to, direction = "right", className="navbar-item is-size-5 has-text-weight-bold has-text-dark" }) => (
  <AniLink
    className={className}
    to={to}
    activeClassName="is-colored"
    cover
    direction={direction}
    duration={0.8}
    bg="#009FFD"
  >
    {children}
  </AniLink>
)

export default MenuLink


