import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import "./layout.scss"
// import "./colors.scss"

const Layout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <footer style={{ textAlign: "center", width: "100%" }}>
                © {new Date().getFullYear()} Elias Nasrallah
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
