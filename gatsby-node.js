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

  const projectTemplate = path.resolve(`src/templates/project.jsx`);
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
      path: `/portfolio/${element.node.slug}`,
      context: {
        slug: element.node.slug,
        category: element.node.category,
      },
    });
  });

  const postTemplate = path.resolve(`src/templates/post.jsx`);
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

exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  // const config = getConfig();
  // config.module.rules = [
  //   ...config.module.rules.filter(
  //     rule => String(rule.test) !== String(/\.jsx?$/)
  //   ),
  //   {
  //     ...loaders.js(),
  //     test: /\.jsx?$/,
  //     exclude: /node_modules\/(?!three)/,
  //   },
  // ];
  // config.resolve = {
  //   alias: {
  //     "@images": path.resolve(__dirname, "src/images"),
  //   },
  //   extensions: [".js", ".jsx"],
  // };
  // actions.replaceWebpackConfig(config);
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, "src/images"),
        "@components": path.resolve(__dirname, "src/components"),
      },
      extensions: [".js", ".jsx"],
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.jsx?$/,
    //       exclude: /node_modules\/(?!three)/,
    //       loader: "babel-loader",
    //     },
    //   ],
    // },
  });
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
