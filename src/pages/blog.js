import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestArticles from "../components/latestArticles"

const SecondPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div class="blog-wrapper">
      <h1>Le blog</h1>
      <LatestArticles></LatestArticles>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
