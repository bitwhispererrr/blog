/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../../src/images/logo-img.png"

function SEO({ description, lang, meta, title, image, pathname, keywords }) {
  const { site, ogImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
        ogImage: allFile(filter: { name: { eq: "banner" } }) {
          bannerImage: nodes {
            publicURL
          }
        }
      }
    `
  )

  const pageDescription = description
    ? description
    : site.siteMetadata.description
  const banner = `${site.siteMetadata.siteUrl}/${ogImage.bannerImage[0].publicURL}`
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  const pageTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title
  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `keywords`,
          content: keywords ? keywords : site.siteMetadata.keywords,
        },
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
        {
          name: `twitter:image`,
          content: image ? image : banner,
        },
        {
          name: `og:image`,
          content: image ? image : banner,
        },
        {
          name: `image`,
          content: image ? image : banner,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
