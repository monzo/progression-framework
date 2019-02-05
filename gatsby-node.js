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
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  console.log('Head components will follow:')
  console.log(headComponents)

  /*
      {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-63104269-1');
      ga('set', 'appName', 'Progression at Monzo');
      ga('send', 'pageview');`}
   */

  replaceHeadComponents(headComponents)
}