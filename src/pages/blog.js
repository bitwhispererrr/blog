import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../components/blogLayout"
import SEO from "../components/seo"

const SecondPage = () => (
  <BlogLayout>
    <SEO title="Elias Nasrallah | Blog" />
    <h1>Le Blog</h1>
    <Link to="/">Go back to the homepage</Link>
  </BlogLayout>
)

export default SecondPage
