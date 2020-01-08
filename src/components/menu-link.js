import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const MenuLink = ({
  children,
  to,
  direction = "top",
  className = "navbar-item is-size-5 has-text-weight-bold"
}) => (
  <AniLink
    className={className}
    to={to}
    activeClassName="is-link-active"
    cover
    direction={direction}
    duration={0.8}
    bg="#009FFD"
  >
    {children}
  </AniLink>
)

export default MenuLink
