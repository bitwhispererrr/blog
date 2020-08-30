import React from "react"
import Card from "../components/card"
import { useStaticQuery, graphql } from "gatsby"

const BlogCards = ({ selectedTags }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulArticle {
        articles: nodes {
          title
          slug
          description
          tags: tag {
            name
          }
          body {
            body
          }
          displayImage {
            title
            description
            image: fluid {
              ...GatsbyContentfulFluid
            }
          }
          createdAt(fromNow: true, formatString: "MMM DD YYYY")
          updatedAt(fromNow: true, formatString: "MMM DD YYYY")
        }
      }
    }
  `)
  const article_list = data.allContentfulArticle.articles
  return (
    <div class="cards">
      {article_list.map(article => {
        const articleTags = article.tags ? article.tags.map(a => a.name) : []
        const tagNames = selectedTags.map(t => t.name)
        const includedArticles = tagNames.filter(tag =>
          articleTags.includes(tag)
        )
        return includedArticles.length || !tagNames.length ? (
          <Card article={article} />
        ) : null
      })}
    </div>
  )
}

export default BlogCards
