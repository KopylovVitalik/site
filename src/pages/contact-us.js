import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Contacts" />
    <section className="hero is-success is-fullheight-with-navbar is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Contacts title</h1>
          <h2 className="subtitle">Contacts subtitle</h2>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
