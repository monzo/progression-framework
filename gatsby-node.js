exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(md|txt)$/i,
          use: 'raw-loader'
        },
        {
          test: /\.(yaml|framework)$/i,
          use: `js-yaml-loader`
        },
        {
          test: /\.(csv|list)$/i,
          use: `dsv-loader`,
        },
      ],
    },
  })
}
const path = require("path")
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const FrameworkView = path.resolve(`src/views/FrameworkView.js`)
  graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              yaml
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: FrameworkView,
        context: {
          isYaml: node.frontmatter.yaml
        },
      })
    })
  })
}
