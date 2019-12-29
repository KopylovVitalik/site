const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log(JSON.stringify(node, undefined, 4));
    createNodeField({ node, name: "slug", value: slug })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`src/templates/blog.js`)
  const res = await graphql(`
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
  `)
  res.data.allMarkdownRemark.edges.forEach(element => {
    createPage({
      component: blogTemplate,
      path: `/blog/${element.node.fields.slug}`,
      context: {
        slug: element.node.fields.slug,
      },
    })
  })
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`src/templates/contentful-blog.js`)
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
              slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach(element => {
    createPage({
      component: blogTemplate,
      path: `/blog/${element.node.slug}`,
      context: {
        slug: element.node.slug,
      },
    })
  })
}
