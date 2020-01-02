import React from "react"
import { graphql } from "gatsby"
import MenuLink from "../components/menu-link"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

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
      <section className="hero is-success is-fullheight-with-navbar is-bold">
        <div className="hero-body hero-body--projects">
          <div className="container">
            <div className="columns">
              <div className="is-one-third column">
                <img src={props.data.contentfulProject.image.fluid.src} alt="" />
              </div>
              <div className="two-thirds column">
                <h1 className="title">{project.name}</h1>
                {project.childContentfulProjectDescriptionRichTextNode.json &&
                  documentToReactComponents(
                    project.childContentfulProjectDescriptionRichTextNode.json,
                    options
                  )}
                <a href={project.href} className="button is-link is-light" target="_blank">Link to project</a>
                <MenuLink
                  className="button is-danger is-outlined"
                  to="/projects/"
                  direction="up"
                >
                  To all projects
              </MenuLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>)
}

export default Project
