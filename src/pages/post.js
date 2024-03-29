import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="About" />
      <section className="hero is-fullheight-with-navbar is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              {data.allMarkdownRemark.edges.map((post, i) => {
                return (
                  <div className="column" key={i}>
                    <div className="card is-rounded">
                      <header className="card-header">
                        <h3 className="is-size-4 card-header-title">
                          {post.node.frontmatter.title}
                        </h3>
                      </header>
                      <div className="card-content">
                        <div className="content">
                          <p>{post.node.frontmatter.date}</p>
                          <Link className="button is-info is-outlined" to={`/post/${post.node.fields.slug}`}>Read post</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage