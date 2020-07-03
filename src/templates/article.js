import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

const ArticleTemplate = ({ data: { article } }) =>

  <Layout>
    <div className="article-wrapper">
      <article className="bg-grey">
        <h1>{article.title}</h1>
        <small>{article.createdAt}</small>
        <div className="image-wrapper">
          <Image fluid={article.displayImage.image} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: article.body.childMarkdownRemark.html
          }}
        />
      </article>
    </div>
  </Layout>

export const query = graphql`
query getSingleArticle($slug:String) {
  article: contentfulArticle(slug: {eq:$slug}) {
      title
      createdAt(fromNow: true, formatString: "MMM DD YYYY")
      body{ 
        childMarkdownRemark {
          html
        }
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