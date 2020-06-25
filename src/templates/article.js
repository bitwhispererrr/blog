import React from "react"
import { graphql } from "gatsby"
import BlogLayout from '../components/blogLayout'

const ArticleTemplate = ({ data }) =>

    <BlogLayout>
        <h1>Article</h1>{JSON.stringify(data, null, 4)}
    </BlogLayout>

export const query = graphql`
query getSingleArticle($slug:String) {
  article: contentfulArticle(slug: {eq:$slug}) {
      title
      createdAt
      body {
        body
      }
      displayImage {
        fluid {
          srcSet
          tracedSVG
        }
      }
    }
}

`
export default ArticleTemplate