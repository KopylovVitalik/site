import MenuLink from "../components/menu-link";
import { useStaticQuery, graphql } from "gatsby";
import React, { useState, useRef, useEffect, useContext } from "react";
import Isotope from "isotope-layout/js/isotope";
import ProjectCard from "../components/ProjectCard";

import GlobalContext from "../context/globalContext";
import Image from "../components/image";
import SEO from "../components/seo";

const ContentfulProjects = ({ data }) => {
  const globalContext = React.useContext(GlobalContext);
  const { category, setCategory } = globalContext;
  // store the isotope object in one state
  const [isotope, setIsotope] = React.useState(null);
  // store the filter keyword in another state
  // const [filterKey, setFilterKey] = React.useState("*")

  // initialize an Isotope object with configs
  React.useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setIsotope(
        new Isotope(".projects", {
          itemSelector: ".projects__item",
          layoutMode: "fitRows",
          transitionDuration: "0.2s",
        })
      );
    }
  }, []);

  // handling filter key change
  React.useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if (isotope) {
        category === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${category}` });
      }
    }
  }, [isotope, category]);

  const controllers = [
    {
      title: "All",
      filter: "*",
      modifier: "",
    },
    {
      title: "Frameworks",
      filter: "react_vue",
      modifier: "frameworks",
    },
    {
      title: "Wordpress",
      filter: "wordpress",
      modifier: "wordpress",
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
  ];

  return (
    <>
      <SEO title="Works" />
      {typeof window !== "undefined" && (
        <section className="projects-page">
          <div className="projects-page__calc">
            <div className="projects-page__calc-inner inner">
              <div className="projects-page__calc-wrapper">
                <div className="projects-page__calc-grid">
                  <div className="projects-page__calc-left">
                    <div className="single-project-image single-project-image--calc"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-page__inner inner">
            <div className="projects-page__header">
              <div className="projects-page__title">
                <h1 className="page-title">Projects</h1>
              </div>
              <div className="projects-page__controllers">
                <div className="controllers">
                  {controllers.map(({ title, filter, modifier }, i) => (
                    <div className="controller">
                      <button
                        className={`btn ${modifier ? "btn--" + modifier : ""} ${
                          category === filter ? "is-active" : ""
                        }`}
                        onClick={() => setCategory(filter)}
                      >
                        <span className="btn__text">{title}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="projects-page__projects">
              <div className="projects">
                {data.allContentfulProject.edges.map((project, i) => {
                  const category = project.node.category;
                  return (
                    <div
                      className={`projects__item ${category}`}
                      key={project.node.id}
                    >
                      <ProjectCard project={project} category={category} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

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
`;

export default ContentfulProjects;
