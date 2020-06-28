import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" style={{ padding: "15px" }}>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="input-row">
                    <input type="text" placeholder="Name" name="name" id="name" style={{ marginRight: "5px", width: "50%" }} />
                    <input type="email" placeholder="E-mail" name="email" id="email" style={{ width: "50%" }} />
                </div>
                <div className="input-row">
                    <input type="text" name="subject" placeholder="Subject" id="subject" style={{ width: "100%" }} />
                    <span className="" />
                </div>
                <div className="input-row">
                    <textarea name="message" placeholder="Message" id="message" rows="5" style={{ width: "100%" }} />
                </div>
                <div className="input-row content-right">
                    <button type="submit" className="btn btn-outline-primary px-5">Send&nbsp;<i className="ri-mail-send-line" style={{ verticalAlign: "middle" }} /></button>
                </div>
            </form>
        </Layout>
    )
}

export default Contact
