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

function SEO({
  description,
  lang,
  meta,
  title,
  metaImage,
  pathname,
  keywords,
}) {
  const { site } = useStaticQuery(
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
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const image = logo
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  return (
    <Helmet>
      <title>{`%s` || site.siteMetadata.title}</title>
      <link rel="canonical" href={canonical}></link>
      <meta name="keywords" content={keywords || site.siteMetadata.keywords} />
      <meta name="description" content={description || metaDescription} />
      <meta name="subject" content="your website's subject" />
      <meta name="language" content="EN" />
      <meta name="robots" content="index,follow" />
      {/* <meta name="abstract" content="" />
      <meta name="topic" content="" />
      <meta name="summary" content="" /> */}
      <meta name="author" content="Elias Nasrallah, elias.nsralah@gmail.com" />
      <meta name="owner" content="Elias Nasrallah" />
      <meta name="url" content={site.siteMetadata.siteUrl} />
      <meta name="identifier-URL" content={site.siteMetadata.siteUrl} />
      <meta name="directory" content="submission" />
      <meta name="category" content="Blog" />
      <meta http-equiv="Cache-Control" content="no-cache" />

      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:type" content="site" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Elias Nasrallah" />
      <meta
        property="og:description"
        content={description || metaDescription}
      />

      <meta name="twitter:title" content={title}></meta>
      <meta
        name="twitter:description"
        content={description || metaDescription}
      ></meta>
      <meta name="twitter:image" content={image}></meta>
      <meta name="twitter:card" content="summary"></meta>

      <meta name="og:email" content="elias.nsralah@gmail.com" />
      <meta name="og:country-name" content="Lebanon" />
    </Helmet>
    // <Helmet
    //   defer={false}
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   title={title}
    //   titleTemplate={`%s` || site.siteMetadata.title}
    //   link={
    //     canonical
    //       ? [
    //           {
    //             rel: "canonical",
    //             href: canonical,
    //           },
    //         ]
    //       : []
    //   }
    //   meta={[
    //     {
    //       name: `keywords`,
    //       content: keywords || site.siteMetadata.keywords,
    //     },
    //     {
    //       name: `description`,
    //       content: description || metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: description || metaDescription,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       name: `twitter:card`,
    //       content: image ? `summary_large_image` : `summary`,
    //     },
    //     {
    //       name: `twitter:creator`,
    //       content: site.siteMetadata.author,
    //     },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },
    //     {
    //       name: `twitter:description`,
    //       content: description || metaDescription,
    //     },
    //     {
    //       name: `twitter:image`,
    //       content: image,
    //     },
    //     {
    //       name: `og:image`,
    //       content: image,
    //     },
    //     {
    //       name: `image`,
    //       content: image,
    //     },
    //   ]
    //     .concat(
    //       metaImage
    //         ? [
    //             {
    //               property: "og:image",
    //               content: image,
    //             },
    //             {
    //               property: "og:image:width",
    //               content: metaImage.width,
    //             },
    //             {
    //               property: "og:image:height",
    //               content: metaImage.height,
    //             },
    //             {
    //               name: "twitter:card",
    //               content: "summary_large_image",
    //             },
    //           ]
    //         : [
    //             {
    //               name: "twitter:card",
    //               content: "summary",
    //             },
    //           ]
    //     )
    //     .concat(meta)}
    // />
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
