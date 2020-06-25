import React from 'react'
import Page from "../components/page"
import ContactForm from "../components/contactForm"
import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout>
            <Page bgColor="dark" id="contact"> <ContactForm /> </Page>
        </Layout>
    )
}

export default Contact
