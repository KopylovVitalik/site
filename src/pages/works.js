import MenuLink from "../components/menu-link"
import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
import Isotope from "isotope-layout/js/isotope"

import Image from "../components/image"
import SEO from "../components/seo"

const ContentfulProjects = ({ data }) => {
  // store the isotope object in one state
  const [isotope, setIsotope] = React.useState(null)
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = React.useState("*")

  // initialize an Isotope object with configs
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsotope(
        new Isotope(".projects", {
          itemSelector: ".projects__item",
          layoutMode: "fitRows",
        })
      )
    }
  }, [])

  // handling filter key change
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (isotope) {
        filterKey === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${filterKey}` })
      }
    }
  }, [isotope, filterKey])

  const controllers = [
    {
      title: "All",
      filter: "*",
      modifier: "",
    },
    {
      title: "HTML/CSS",
      filter: "css",
      modifier: "css",
    },
    {
      title: "Game landings",
      filter: "game-landing",
      modifier: "game-landing",
    },
    {
      title: "Wordpress",
      filter: "wordpress",
      modifier: "wordpress",
    },
    {
      title: "Frameworks",
      filter: "react_vue",
      modifier: "frameworks",
    },
  ]

  return (
    <>
      <SEO title="Works" />
      {typeof window !== "undefined" && (
        <section className="hero has-background-light is-fullheight-with-navbar">
          <div className="hero-body hero-body--projects">
            <div className="container">
              <h1 className="page-title is-1 title is-text-bold">Works</h1>
              <hr />
              <div className="controllers">
                {controllers.map(({ title, filter, modifier }, i) => (
                  <div className="controller">
                    <button
                      className={`btn ${modifier ? "btn--" + modifier : ""} ${
                        filterKey === filter ? "is-active" : ""
                      }`}
                      onClick={() => setFilterKey(filter)}
                    >
                      <span className="btn__text">{title}</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="projects">
                {data.allContentfulProject.edges.map((project, i) => {
                  const category = project.node.category
                  return (
                    <div
                      className={`projects__item ${category}`}
                      key={project.node.id}
                    >
                      <div className={`project-card project-card--${category}`}>
                        <div className="project-card__bg-wrapper">
                          <div
                            className="project-card__bg"
                            style={{
                              backgroundImage: `url(${project.node.image.fluid.src})`,
                            }}
                          ></div>
                        </div>
                        <div className="project-card__inner">
                          <header className="project-card__header">
                            <h3 className="is-size-4 project-card__title">
                              {project.node.name}
                            </h3>
                          </header>
                          <div className="project-card__content">
                            <div className="content">
                              <MenuLink
                                className={`button is-small is-rounded is-success button--${category}`}
                                to={`/works/${project.node.slug}`}
                                direction="top"
                              >
                                More about
                              </MenuLink>
                            </div>
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
      )}
    </>
  )
}

export const query = graphql`
  query {
    allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          href
          image {
            fluid {
              src
            }
          }
          id
          slug
          name
          category
        }
      }
    }
  }
`

export default ContentfulProjects
