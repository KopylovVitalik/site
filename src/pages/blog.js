import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";

// const ContentfulBlog = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
//         edges {
//           node {
//             title
//             slug
//             publishedDate(formatString: "DD MM YYYY")
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <>
//       <SEO title="About" />
//       <section className="hero is-fullheight-with-navbar">
//         <div className="hero-body">
//           <div className="container">
//             <h1 className="page-title is-1 title is-text-bold">Blogs</h1>
//             <div className="columns">
//               {data.allContentfulBlogPost.edges.map((blog, i) => {
//                 return (
//                   <div className="column is-half-desktop is-one-third-widescreen" key={i}>
//                     <div className="card">
//                       <div class="card-image">
//                         <figure class="image is-4by3">
//                           <img
//                             src="https://bulma.io/images/placeholders/1280x960.png"
//                             alt="Placeholder image"
//                           />
//                         </figure>
//                       </div>
//                       <header className="card-header">
//                         <h3 className="is-size-4 card-header-title">
//                           {blog.node.title}
//                         </h3>
//                       </header>
//                       <div className="card-content">
//                         <div className="content">
//                           <p>{blog.node.publishedDate}</p>
//                           <Link
//                             className="button is-info is-outlined"
//                             to={`/blog/${blog.node.slug}`}
//                           >
//                             Read blog
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

const ContentfulBlog = () => "hello";

export default ContentfulBlog;
