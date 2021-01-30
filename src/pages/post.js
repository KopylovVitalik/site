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
      <SEO title="About" />
      <section className="hero is-fullheight-with-navbar is-primary is-bold">
        <div className="hero-body">
          <div className="inner">
            <div className="posts">
              {data.allMarkdownRemark.edges.map((post, i) => {
                return (
                  <div className="posts__item">
                    <PostCard
                      title={post.node.frontmatter.title}
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
