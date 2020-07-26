import React from 'react'
import Card from "../components/card"
import { useStaticQuery, graphql } from "gatsby"


const BlogCards = ({ selected_tags }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulArticle(limit: 4) {
        articles: nodes {
          title
          slug
          tags:tag { name }
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
  const article_list = data.allContentfulArticle.articles
  return (
    <div class="cards">
      {article_list.map(a =>
        < Card article={a} />
      )}
    </div>
  )
}

export default BlogCards;