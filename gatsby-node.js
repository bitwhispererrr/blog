const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetArticles {
      articles: allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.articles.nodes.forEach(article => {
    createPage({
      path: `/blog/${article.slug}`,
      component: path.resolve("src/templates/article.js"),
      context: {
        slug: article.slug,
      },
    })
  })
}
