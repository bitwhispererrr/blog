import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Page from "../components/page"
import BlogCards from "../components/blogCards"
import CodePattern from "../components/codePattern"
import Logo from "../components/logo"

const IndexPage = () => (
  <Layout>
    <SEO title="Elias Nasrallah | Full Stack Web Developer" />
    <Page active={true} position="left" bgColor="dark" id="home">
      <CodePattern />
      <div id="summary">
        <Logo />
        <div className="light">
          <h1>elias nasrallah</h1>
          <p>Fullstack web developer dabbling with python, django, and react.</p>
          <div className="social">
            <a href="https://www.instagram.com/thebitwhisperer/" target="_blank"><i className="ri-twitter-line"></i></a>
            <a href="https://www.linkedin.com/in/elias-nasrallah/" target="_blank"><i className="ri-linkedin-fill"></i></a>
            <a href="" target="_blank"><i className="ri-instagram-line"></i></a>
          </div>
        </div>
      </div>
    </Page>
    <Page bgColor="grey" id="skills"></Page>
    <Page bgColor="dark" id="blog">
      <BlogCards></BlogCards>
    </Page>
    <Page bgColor="grey" id="about"></Page>
    <Page bgColor="dark" id="contact"></Page>
  </Layout>
)

export default IndexPage
