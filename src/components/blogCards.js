import React from 'react'
import Card from "../components/card"
import { useStaticQuery, graphql } from "gatsby"


const BlogCards = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulArticle(limit: 4) {
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
        <div style={{ display: "flex", justifyContent: "center", width: "80%", height: "300px" }}>
            {articles.map(a =>
                <Card article={a} />
            )}
        </div>
    )
}

export default BlogCards;