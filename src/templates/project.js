import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      slug
      tag
      image {
        fluid {
          src
        }
      }
      childContentfulProjectDescriptionRichTextNode {
        content {
          content {
            value
          }
        }
      }
    }
  }
`

const Project = props => (
  <>
  <section className="hero is-success is-fullheight-with-navbar is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="is-one-third">
              <img src={props.data.contentfulProject.image.fluid.src} alt=""/>
            </div>
            <div className="two-thirds">
              <h1 className="title">{props.data.contentfulProject.name}</h1>
              <p dangerouslySetInnerHTML={{
            __html: props.data.contentfulProject.childContentfulProjectDescriptionRichTextNode.content.value}}>
               
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </>
)

export default Project
