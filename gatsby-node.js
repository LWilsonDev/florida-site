// gatsby-node.js
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Change the node internal type from 'allMarkdownRemark' to 'MarkdownRemark'
}
