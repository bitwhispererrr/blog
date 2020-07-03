import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout wrapperClass="w-100">
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", flexWrap: "wrap", height: "100%" }}>
                <div id="contact-prompt">
                    <h1>Want to build</h1>
                    <div class="words">
                        <h1 className="word active">cool apps</h1>
                        <h1 className="word">the web</h1>
                        <h1 className="word">great things</h1>
                    </div>
                    <h1>together?</h1>
                </div>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="input-row">
                        <input className="w-50" type="text" placeholder="Name" name="name" id="name" style={{ marginRight: "5px" }} />
                        <input className="w-50" type="email" placeholder="E-mail" name="email" id="email" />
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
            </div>
        </Layout>
    )
}

export default Contact
