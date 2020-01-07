import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import RichText from '../components/rich-text'

const Blog = props => (
  <>
  <section className="hero is-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{props.data.contentfulBlogPost.title}</h1>
          <RichText content={props.data.contentfulBlogPost.childContentfulBlogPostBodyRichTextNode.json} />
        </div>
      </div>
    </section>
  </>
)

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      publishedDate
      childContentfulBlogPostBodyRichTextNode {
        json
      }
      image {
        fluid {
          src
        }
      }
    }
  }
`

export default Blog
