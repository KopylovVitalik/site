import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import PostCard from "../components/PostCard";

import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              thumbnail {
                childImageSharp {
                  fluid {
                    originalImg
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <SEO title="Posts" />
      <section className="posts-page">
        <div className="posts-page__inner inner">
          <div className="posts-page__header">
            <div className="posts-page__title">
              <h1 className="page-title">Blog</h1>
            </div>
          </div>
          <div className="posts-page__posts">
            <div className="posts">
              {data.allMarkdownRemark.edges.map((post, i) => {
                return (
                  <div className="posts__item">
                    <PostCard
                      title={post.node.frontmatter.title}
                      image={post.node.frontmatter.thumbnail.childImageSharp.fluid.originalImg}
                      key={i}
                      slug={post.node.fields.slug}
                      date={post.node.frontmatter.date}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
