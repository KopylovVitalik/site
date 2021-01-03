import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Post = props => (
  <>
    <div className="container">
      <div className="notification">
        <h2>{props.data.markdownRemark.frontmatter.title}</h2>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        ></div>
      </div>
    </div>
  </>
)

export default Blog