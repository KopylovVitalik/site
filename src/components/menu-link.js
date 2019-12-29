import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import TransitionLink from "gatsby-plugin-transition-link"
const MenuLink = ({ children, to, direction = "right" }) => (
  <AniLink
    className="navbar-item"
    to={to}
    activeClassName="has-text-danger"
    cover
    direction={direction}
    duration={1.2}
    bg={`
    linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%)
    center / cover   
    no-repeat
    
    `}
  >
    {children}
  </AniLink>
)

export default MenuLink

// const MenuLink = ({ children, to }) => (
//   <TransitionLink
//   to={to}
//   className="navbar-item"
//   activeClassName="has-text-danger"
//   exit={{
//     trigger: ({ exit, node }) => console.log(exit, node),
//     length: 1
//   }}
//   entry={{
//     delay: 0.6
//   }}
// >
//   {children}
// </TransitionLink>
// )

// export default MenuLink
