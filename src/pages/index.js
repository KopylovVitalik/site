import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="hero has-background-transparent is-fullheight-with-navbar is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Home title</h1>
          <h2 className="subtitle">Home subtitle</h2>
          <Link to="/page-2/">Page 2</Link>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
