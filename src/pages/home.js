import React from 'react'
import CodePattern from "../components/codePattern"
import Logo from "../components/logo"
import Page from "../components/page"
import Layout from '../components/layout'

const Home = () => {
    return (
        <Layout>
            <Page active={true} position="left" bgColor="dark" id="home">
                <CodePattern />
                <div id="summary">
                    <Logo />
                    <div className="light">
                        <h1>elias nasrallah</h1>
                        <p>Fullstack web developer dabbling with python, django, and react.</p>
                        <div className="social">
                            <a href="https://twitter.com/thebitwhisperer" target="_blank"><i className="ri-twitter-line"></i></a>
                            <a href="https://www.linkedin.com/in/elias-nasrallah/" target="_blank"><i className="ri-linkedin-fill"></i></a>
                            <a href="https://www.instagram.com/thebitwhisperer/" target="_blank"><i className="ri-instagram-line"></i></a>
                        </div>
                    </div>
                </div>
            </Page>
        </Layout>
    )
}

export default Home