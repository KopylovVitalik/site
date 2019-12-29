import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="About" />
    <section className="hero is-fullheight-with-navbar is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">About title</h1>
          <h2 className="subtitle">About subtitle</h2>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
