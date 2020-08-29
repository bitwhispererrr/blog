import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/Share"
import moment from "moment"

const ArticleTemplate = ({ data: { article, site } }) => {
  const location = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <Layout wrapperClass="bg-grey">
      <SEO
        title={article.title}
        description={article.description}
        pathname={location}
      />
      <article className="px-15 pb-2">
        <h1 className="article-title">{article.title}</h1>
        <small>
          Published on {article.createdAt} -{" "}
          {moment(article.createdAt).fromNow()}{" "}
        </small>
        <Share
          socialConfig={{
            twitterHandle: site.siteMetadata.twitterHandle,
            config: {
              url: `${site.siteMetadata.url}/blog/${article.slug}`,
              title: article.title,
            },
          }}
          tags={article.tags.map(tag => tag.name)}
        />
        <div className="image-wrapper">
          <Image fluid={article.displayImage.image} />
        </div>
        <div
          style={{ marginBottom: "2rem" }}
          dangerouslySetInnerHTML={{
            __html: article.body.childMarkdownRemark.html,
          }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query getSingleArticle($slug: String) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      slug
      tags: tag {
        name
      }
      createdAt(fromNow: true, formatString: "MMM DD YYYY")
      daysAgo: createdAt(fromNow: true)
      body {
        childMarkdownRemark {
          html
        }
      }
      displayImage {
        image: fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
        url: siteUrl
        twitterHandle
      }
    }
  }
`
export default ArticleTemplate
