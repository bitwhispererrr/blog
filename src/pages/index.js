import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Elias Nasrallah - Fullstack Web Developer"
      description="Hi, I am Elias, and this is my personal portfolio and blog where I share tutorials and tips on several web development topics including backend and frontend technologies, web app security, best practices, and much more."
      meta={[
        {
          name: "google-site-verification",
          content: "gfaOkMSvzEx6d4S5b6IUbfmCgtxqxJJ6GGRXcieKLvk",
        },
      ]}
    />
    <div id="hero">
      <Logo />
      <div className="light hero-text">
        <h1 className="text-center" style={{ margin: "0" }}>
          elias nasrallah
        </h1>
        <p className="text-center px-15">
          Fullstack web developer mostly dabbling with python, django, and
          react.
        </p>
        <div className="social text-center">
          <a
            href="https://twitter.com/thebitwhisperer"
            target="_blank"
            rel="noreferrer"
            className="pop-in"
          >
            <i className="ri-twitter-line"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/elias-nasrallah/"
            target="_blank"
            rel="noreferrer"
            className="pop-in"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/thebitwhisperer/"
            target="_blank"
            rel="noreferrer"
            className="pop-in"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://www.github.com/bitwhispererrr/"
            target="_blank"
            rel="noreferrer"
            className="pop-in"
          >
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
