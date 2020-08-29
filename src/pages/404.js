import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import notFoundImage from "../images/empty.png"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <h1 style={{ width: "100%", textAlign: "center" }}>That's a bummer :(</h1>
      <img src={notFoundImage} style={{ width: "30%", margin: "0 auto" }} />
      <p style={{ width: "100%", textAlign: "center" }}>
        There's nothing much here.
      </p>
    </Layout>
  </>
)

export default NotFoundPage
