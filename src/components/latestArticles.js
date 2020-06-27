import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ArticlePreview from './articlePreview'

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulArticle(limit: 1) {
        articles: nodes {
          title
          slug
          description
          body {
            body
          }
          displayImage {
            title
            description
            image:fluid {
              ...GatsbyContentfulFluid
            }
          }
          createdAt(fromNow: true, formatString: "MMM DD YYYY")
          updatedAt(fromNow: true, formatString: "MMM DD YYYY")
        }
      }
    }
  `)
  const articles = data.allContentfulArticle.articles
  console.log(articles)
  return (
    <>
      {articles.map(a =>
        <ArticlePreview article={a} />
      )}
    </>
  )
}

export default LatestArticles;