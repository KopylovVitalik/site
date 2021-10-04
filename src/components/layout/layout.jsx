import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./TheFooter";
import GlobalContext from "../../context/globalContext";
import Canvas from "../canvas";

import "../../sass/style.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const globalContext = React.useContext(GlobalContext);
  const { theme } = globalContext;

  return (
    <>
      <div className="page-wrapper" data-theme={theme}>
        {/* <Canvas /> */}
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
        {theme === "gradient" && (
          <ul className="gradient-bg">
            {/* <li></li>
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
            <li></li> */}
          </ul>
        )}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
