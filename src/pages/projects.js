import MenuLink from "../components/menu-link"
import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
import Isotope from "isotope-layout/js/isotope";

import Image from "../components/image"
import SEO from "../components/seo"

const ContentfulProject = ({ data }) => {
  // store the isotope object in one state
  const [isotope, setIsotope] = React.useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    setIsotope(
      new Isotope(".projects", {
        itemSelector: ".projects__item",
        layoutMode: "fitRows"
      })
    );
  }, []);

  // handling filter key change
  React.useEffect(
    () => {
      if (isotope) {
        filterKey === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${filterKey}` });
      }
    },
    [isotope, filterKey]
  );

  const controllers = [
    {
      title: "All",
      filter: "*",
      modifier: ""
    },
    {
      title: "HTML/CSS",
      filter: "css",
      modifier: "css"
    },
    {
      title: "Game landings",
      filter: "game-landing",
      modifier: "game-landing"
    },
    {
      title: "Wordpress",
      filter: "wordpress",
      modifier: "wordpress"
    },
    {
      title: "Frameworks",
      filter: "react_vue",
      modifier: "frameworks"
    }
  ]

  return (
    <>
      <SEO title="About" />
      <section className="hero is-fullheight-with-navbar is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="controllers">
              {controllers.map(({ title, filter, modifier }, i) => (
                <div className="controller">
                  <button
                    className={`btn ${ modifier ? "btn--" + modifier : ''}`}
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
                // const isShow = category === projects || projects === "all"
                return (

                  <div className={`projects__item ${category}`} key={i}>
                    <div className={`project-card project-card--${category}`}>
                      <div className="project-card__bg-wrapper">
                        <div
                          className="project-card__bg"
                          style={{
                            backgroundImage: `url(${project.node.image.fluid.src})`,
                          }}
                        >
                        </div>
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
                              className="button is-success is-outlined"
                              to={`/projects/${project.node.slug}`}
                              direction="top"
                            >
                              About project
                              </MenuLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)

              })}
            </div>
          </div></div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          href
          childContentfulProjectDescriptionRichTextNode {
            content {
              content {
                value
              }
            }
          }
          image {
            fluid {
              src
            }
          }
          id
          slug
          tag
          name
          category
        }
      }
    }
  }

`

export default ContentfulProject
