import React from 'react'
import Page from "../components/page"
import BlogCards from "../components/blogCards"
import Layout from '../components/layout'

const Posts = () => {
    return (
        <Layout>
            <section className="page bg-dark">
                <BlogCards></BlogCards>
            </section>
        </Layout>
    )
}

export default Posts