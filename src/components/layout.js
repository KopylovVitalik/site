import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import "./bulma.scss"
import "../sass/custom.sass"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, changeTheme] = useState("gradient")

  return (
    <div className="page-wrapper" data-theme={theme}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        changeTheme={changeTheme}
        theme={theme}
      />
      <main>{children}</main>
      <Footer />
      {theme === "gradient" && (
        <ul className="gradient-bg">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
