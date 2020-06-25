import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import BlogLayout from '../components/blogLayout'
import Image from "gatsby-image"

const ArticleTemplate = ({ data: { article } }) =>

    <BlogLayout>
        <h1>{article.title}</h1>
        <small>{article.createdAt}</small>
        <Image fluid={article.displayImage.image} />
        <p>{documentToReactComponents(article.body.json)}</p>
    </BlogLayout>

export const query = graphql`
query getSingleArticle($slug:String) {
  article: contentfulArticle(slug: {eq:$slug}) {
      title
      createdAt
      body{
        json
      }
      displayImage {
        image:fluid {
            ...GatsbyContentfulFluid
        }
      }
    }
}

`
export default ArticleTemplate