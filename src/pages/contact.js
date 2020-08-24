import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
    const animatePrompt= function(){
        const words = ['cool apps ?', 'awesome shit ?']
        words.map(word => {
            const wordElement = document.querySelector('.word')
            wordElement.classList.toggle('hidden')
            wordElement.innerHTML = word;
            setTimeout(2000, ()=>wordElement.classList.toggle('hidden'))
            setTimeout(1000, ()=>console.log('blah'))
            
        })
    }

    // setInterval(animatePrompt, 4000)
    return (
        <Layout >
            <div className="px-15">
                <h1 className="highlight left">Contact Me</h1>
                <div id="contact-prompt">
                    <h1>Want to build &nbsp;</h1>
                    <h1 className="word"> cool apps ?</h1>
                </div>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="fade-in-up">
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
                        <button type="submit" className="btn btn-outline-primary mt-2">Send&nbsp;<i className="ri-mail-send-line" style={{ verticalAlign: "middle" }} /></button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Contact
