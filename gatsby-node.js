const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log(JSON.stringify(node, undefined, 4));
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/project.js`)
  const res = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            href
            slug
            tag
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
  `)
  res.data.allContentfulProject.edges.forEach(element => {
    createPage({
      component: projectTemplate,
      path: `/projects/${element.node.slug}`,
      context: {
        slug: element.node.slug,
      },
    })
  })

  const blogTemplate = path.resolve(`src/templates/blog.js`)
  const blog = await graphql(`
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
  blog.data.allContentfulBlogPost.edges.forEach(element => {
    createPage({
      component: blogTemplate,
      path: `/blog/${element.node.slug}`,
      context: {
        slug: element.node.slug,
      },
    })
  })
}
