import React from 'react'
import CodePattern from "../components/codePattern"
import Logo from "../components/logo"
import Page from "../components/page"
import Layout from '../components/layout'

const Home = () => {
    return (
        <Layout>
            <section className="page bg-dark">
                <CodePattern />
                <div id="hero">
                    <Logo />
                    <div className="light">
                        <h1>elias nasrallah</h1>
                        <p className="text-center">Fullstack web developer mostly dabbling with python, django, and react.</p>
                        <div className="social">
                            <a href="https://twitter.com/thebitwhisperer" target="_blank"><i className="ri-twitter-line"></i></a>
                            <a href="https://www.linkedin.com/in/elias-nasrallah/" target="_blank"><i className="ri-linkedin-fill"></i></a>
                            <a href="https://www.instagram.com/thebitwhisperer/" target="_blank"><i className="ri-instagram-line"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home
