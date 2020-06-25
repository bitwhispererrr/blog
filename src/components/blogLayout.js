import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const BlogLayout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <footer style={{ textAlign: "center", width: "100%" }}>
                © {new Date().getFullYear()} Elias Nasrallah
            </footer>
        </>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BlogLayout
