import React from 'react'
import Layout from '../components/layout'
import Devicons from '../components/devicons'


const Skills = () => {
    return (
        <Layout wrapperClass="w-100">
            <section className="page bg-dark">
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                    <Devicons icon="python" />
                    <Devicons icon="django" styles={{ width: "100px" }} />
                    <Devicons icon="mysql" />
                    <Devicons icon="javascript" />
                    <Devicons icon="html" />
                    <Devicons icon="css" />
                    <Devicons icon="jquery" />
                    <Devicons icon="react" />
                    <Devicons icon="sass" />
                    <Devicons icon="webpack" />
                    <Devicons icon="bootstrap" />
                    {/* <Devicons icon="git" /> */}
                </div>
            </section>
        </Layout>
    )
}

export default Skills
