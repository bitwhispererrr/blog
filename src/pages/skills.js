import React from 'react'
import Layout from '../components/layout'
import Devicons from '../components/devicons'
import SEO from '../components/seo'


const Skills = () => {
    return (
        <Layout>
            <SEO title="Elias Nasrallah - Fullstack Web Developer | Skills and Experience" description="I am a fullstack web developer experienced in building web applications, APIs, and custom CMS. My skills include Django Framework, ReactJS, Redux, Webpack, MySQL, MongoDB, and AWS."/>
            <div className="skills px-15">
                <h1 className="highlight left">Skills and Experience</h1>
                <p className="mb-2 fade-in-up">
                    My main area of expertise is web development using <b>Django</b> along with <b>MySQL</b>, <b>MongoDB</b> and <b>Redis</b> on the backend.
                    On the frontend, I mostly work  with <b>ReactJS</b> along with tools including <b>Redux</b>, <b>Webpack</b>, and <b>Sass</b>.
                </p>
                <p className="mb-2">
                    I have utilized these tools in building web applicatins and API driven services, responsive and intuitive frontends, custom CMSs and administration interfaces.
                </p>
                <p className="mb-2">
                    Other languages/technologies I'm familiar with include <b>AWS</b>, <b>Firebase</b>, <b>GraphQL</b>, <b>Pandas</b>, <b>Matplotlib</b>, <b>C++</b> and <b>Java</b>.
                </p>
                <p className="mb-2">
                    While web development is my focus, I also enjoy dabbling in different areas of tech, mainly electronics, networking and security.
                </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <Devicons icon="python" />
                <Devicons icon="javascript" />
                <Devicons icon="django" styles={{ width: "100px" }} />
                <Devicons icon="react" />
                <Devicons icon="redux" />
                <Devicons icon="html" />
                <Devicons icon="css" />
                <Devicons icon="mysql" />
                <Devicons icon="mongo" />
                <Devicons icon="jquery" />
                <Devicons icon="webpack" />
                <Devicons icon="sass" />
                <Devicons icon="bootstrap" />
            </div>
        </Layout>
    )
}

export default Skills
