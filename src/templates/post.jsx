import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Img from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        thumbnail {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              originalImg
            }
          }
        }
      }
      html
    }
  }
`;

const Post = props => (
  <>
    <SEO title={props.data.markdownRemark.frontmatter.title} />
    <section className="single-post-page">
      <div className="single-post-page__inner inner">
        <div className="single-post-page__header">
          <div className="single-post-page__title">
            <h1 className="page-title">
              {props.data.markdownRemark.frontmatter.title}
            </h1>
          </div>
          <div className="single-post-page__date">
            {props.data.markdownRemark.frontmatter.date}
          </div>
        </div>
        <div className="single-post-page__thumbnail">
          <Img
            src={
              props.data.markdownRemark.frontmatter.thumbnail.childImageSharp
                .fluid.originalImg
            }
          />
        </div>
        <div className="single-post-page__content">
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: props.data.markdownRemark.html,
            }}
          />
        </div>
      </div>
    </section>
  </>
);

export default Post;
