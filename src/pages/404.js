import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <img src="./images/empty.png" />
    <p>Nothing to look at here :(</p>
    <Link to="/">go home</Link>
  </>
)

export default NotFoundPage
