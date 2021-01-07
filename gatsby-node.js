const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    // const slug = createFilePath({ node, getNode, basePath: `post` });
    const slug = path.basename(node.fileAbsolutePath, ".md");
    // console.log(node);
    // const slug = createFilePath({ node, getNode });

    if (slug) {
      console.log("md:", slug);
      createNodeField({ node, name: "slug", value: slug });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(`src/templates/project.js`);
  const res = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            href
            slug
            tag
            category
            image {
              fluid {
                src
              }
            }
            name
          }
        }
      }
    }
  `);
  res.data.allContentfulProject.edges.forEach(element => {
    createPage({
      component: projectTemplate,
      path: `/works/${element.node.slug}`,
      context: {
        slug: element.node.slug,
        category: element.node.category,
      },
    });
  });

  // Blog Depracated
  // const blogTemplate = path.resolve(`src/templates/blog.js`);
  // const blog = await graphql(`
  //   query {
  //     allContentfulBlogPost {
  //       edges {
  //         node {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `);
  // blog.data.allContentfulBlogPost.edges.forEach(element => {
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blog/${element.node.slug}`,
  //     context: {
  //       slug: element.node.slug,
  //     },
  //   });
  // });

  const postTemplate = path.resolve(`src/templates/post.js`);
  const post = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  post.data.allMarkdownRemark.edges.forEach(element => {
    createPage({
      component: postTemplate,
      path: `/post/${element.node.fields.slug}`,
      context: {
        slug: element.node.fields.slug,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /isotope/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
