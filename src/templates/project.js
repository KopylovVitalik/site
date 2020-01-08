import React from "react"
import { graphql } from "gatsby"
import MenuLink from "../components/menu-link"
import SEO from "../components/seo"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span>{children}</span>
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

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
`

const Project = props => {
  const { contentfulProject: project } = props.data;
  return (
    <>
      <SEO />
      <section className={`hero is-fullheight-with-navbar hero--${project.category}`}>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-8 is-variable">
              <div className="is-half column">
                <img src={props.data.contentfulProject.image.fluid.src} alt="" className="single-project-image" />
                <MenuLink
                  className={`button is-text is-small`}
                  to="/works/"
                  direction="up"
                >
                  <span class="icon is-small">
                    <i class="fas fa-arrow-left"></i>
                  </span>
                  <span>Back to all projects</span>
                </MenuLink>
              </div>
              <div className="is-half column column--project-content">
                <div className="content">
                  <h1 className="title">{project.name}</h1>
                  {project.childContentfulProjectDescriptionRichTextNode.json &&
                    documentToReactComponents(
                      project.childContentfulProjectDescriptionRichTextNode.json,
                      options
                    )}
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <a href={project.href} className="button is-outlined" target="_blank">
                    <span>Link to project</span>
                    <span class="icon is-small">
                      <i class="fas fa-arrow-right"></i>
                    </span>
                  </a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>)
}

export default Project
