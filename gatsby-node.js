// gatsby-node.js
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Change the node internal type from 'allMarkdownRemark' to 'MarkdownRemark'
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@fullcalendar\/react/,
            use: loaders.null(),
          },
          {
            test: /@fullcalendar\/daygrid/,
            use: loaders.null(),
          },
          {
            test: /@fullcalendar\/google-calendar/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
