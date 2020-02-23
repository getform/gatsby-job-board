/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios')

exports.createPages = async ({ actions: { createPage } }) => {

    const { data } = await axios.get(process.env.API_ENDPOINT)
    // Create a page that lists all submissions.
    
    createPage({
      path: `/`,
      component: require.resolve("./src/templates/pages-template.js"),
      context: { pages: data.data.submissions },
    })
    // Create a page for each submission.
    data.data.submissions.forEach(page => {
      createPage({
        path: `/post/${page.url}/`,
        component: require.resolve("./src/templates/page-template.js"),
        context: { page },
      })
    })
  }
  