// import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

// const Blog = props => (
//   <>
//     <section className="hero is-success">
//       <div className="hero-body">
//         <div className="container">
//           <h1 className="title">{props.data.contentfulBlogPost.title}</h1>
//           <div
//             className="body"
//             dangerouslySetInnerHTML={{
//               __html:
//                 props.data.contentfulBlogPost
//                   .childContentfulBlogPostMarkdownTextNode.childMarkdownRemark
//                   .html,
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   </>
// );

// export const query = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       id
//       slug
//       title
//       publishedDate
//       childContentfulBlogPostMarkdownTextNode {
//         childMarkdownRemark {
//           html
//         }
//       }
//       image {
//         fluid {
//           src
//         }
//       }
//     }
//   }
// `;

// export default Blog;
