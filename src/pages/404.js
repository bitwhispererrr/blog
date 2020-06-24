import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Nothing to see here :(</p>
    <Link to="/">go home</Link>
  </>
)

export default NotFoundPage
