import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="hero has-background-white-bis is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="content is-medium">
                <h1 className="title">About me</h1>
                <p>I'm Vitalii Kopylov, front-end developer.</p>
                <p>
                  At this moment I have 1.5 years experience in creating
                  web-sites.
                </p>
                <p>
                  My main tech stack:
                  <ul>
                    <li>HTML Templating - Nunjucks</li>
                    <li>CSS Templating - .SASS</li>
                    <li>JavaScript - ES2015 with webpack</li>
                    <li>Wordpress - Timber(TWIG) / ACF</li>
                  </ul>
                </p>
                <p>
                  Also I have experience in React/Vue, my main goal at 2020 to
                  use this JS as my main technology
                </p>
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
