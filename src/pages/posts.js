import React from 'react'
import Page from "../components/page"
import BlogCards from "../components/blogCards"
import Layout from '../components/layout'

const Posts = () => {
    return (
        <Layout>
            <Page bgColor="dark" id="blog">
                <BlogCards></BlogCards>
            </Page>
        </Layout>
    )
}

export default Posts