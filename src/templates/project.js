import React from "react";
import { graphql } from "gatsby";
import MenuLink from "../components/menu-link";
import SEO from "../components/seo";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }) => <span>{children}</span>;
const Text = ({ children }) => <p>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      slug
      tag
      href
      category
      image {
        fluid {
          src
        }
      }
      childContentfulProjectDescriptionRichTextNode {
        json
      }
    }
  }
`;

const Project = props => {
  const { contentfulProject: project } = props.data;
  const projectNameRaw = project.name;
  const projectName = projectNameRaw.split("");
  return (
    <>
      <SEO />
      <section className={`project-page project-page--${project.category}`}>
        <div className="project-page__inner inner">
          <div className="project-page__grid">
            <div className="project-page__left">
              <div
                className={`single-project-image single-project-image--${project.category}`}
              >
                <div className="single-project-image__image-wrapper">
                  <img
                    src={props.data.contentfulProject.image.fluid.src}
                    alt=""
                  />
                </div>
              </div>

              <MenuLink className={`btn-link`} to="/portfolio/" direction="up">
                <span>Back to all projects</span>
              </MenuLink>
            </div>
            <div className="project-page__right">
              <div className="content">
                {/* <h1 className="title">
                  {projectName.map(el => (
                    <span class="char">{el}</span>
                  ))}
                </h1> */}
                <h1 className="title" data-anim="title-wrapper">
                  <span data-anim="title">{projectNameRaw}</span>
                </h1>
                {project.childContentfulProjectDescriptionRichTextNode.json &&
                  documentToReactComponents(
                    project.childContentfulProjectDescriptionRichTextNode.json,
                    options
                  )}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <a
                  href={project.href}
                  className={`btn btn--${props.data.contentfulProject.category}`}
                  target="_blank"
                >
                  <span className="btn__text">Link to project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
