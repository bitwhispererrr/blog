import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => {
    // const animatePrompt= function(){
    //     const words = ['cool apps ?', 'awesome shit ?']
    //     words.map(word => {
    //         const wordElement = document.querySelector('.word')
    //         wordElement.classList.toggle('hidden')
    //         wordElement.innerHTML = word;
    //         setTimeout(2000, ()=>wordElement.classList.toggle('hidden'))
    //         setTimeout(1000, ()=>console.log('blah'))
            
    //     })
    // }

    // setInterval(animatePrompt, 4000)
    return (
        <Layout >
            <SEO title="Elias Nasrallah - Fullstack Web Developer | Contact Me" description="Contact me. Want to collaborate on a project or lookign to hire a fullstack web developer? You can reach me on elias.nsralah[AT]gmail[dOt]com. You can also find me on twitter and instagram: @thebitwhisperer"/>
            <div className="px-15">
                <h1 className="highlight left enter-left">Contact Me</h1>
                <div id="contact-prompt" className="enter-left">
                    <h1>Let's get in touch!</h1>
                </div>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="fade-in-up">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="input-row pt-1 pb-1">
                        <input className="w-50" type="text" placeholder="Name" name="name" id="name" style={{ marginRight: "5px" }} />
                        <input className="w-50" type="email" placeholder="E-mail" name="email" id="email" />
                    </div>
                    <div className="input-row pt-1 pb-1">
                        <input type="text" name="subject" placeholder="Subject" id="subject" style={{ width: "100%" }} />
                        <span className="" />
                    </div>
                    <div className="input-row pt-1 pb-1">
                        <textarea name="message" placeholder="Message" id="message" rows="5" style={{ width: "100%" }} />
                    </div>
                    <div className="input-row content-right pt-1 pb-1">
                        <button type="submit" className="btn btn-outline-primary mt-2">Send&nbsp;<i className="ri-mail-send-line" style={{ verticalAlign: "middle" }} /></button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Contact
