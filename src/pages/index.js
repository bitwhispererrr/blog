import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import Polygons from "../components/polygons"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Polygons />
    <div id="hero">
      <Logo />
      <div className="light hero-text">
        <h1 className="text-center">elias nasrallah</h1>
        <p className="text-center">Fullstack web developer mostly dabbling with python, django, and react.</p>
        <div className="social text-center">
          <a href="https://twitter.com/thebitwhisperer" target="_blank" rel="noreferrer" className="pop-in"><i className="ri-twitter-line"></i></a>
          <a href="https://www.linkedin.com/in/elias-nasrallah/" target="_blank" rel="noreferrer" className="pop-in"><i className="ri-linkedin-fill"></i></a>
          <a href="https://www.instagram.com/thebitwhisperer/" target="_blank" rel="noreferrer" className="pop-in"><i className="ri-instagram-line"></i></a>
          <a href="https://www.github.com/bitwhispererrr/" target="_blank" rel="noreferrer" className="pop-in"><i className="ri-github-fill"></i></a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
