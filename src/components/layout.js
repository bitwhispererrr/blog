/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"

import "../assets/scss/layout.scss"
import "../assets/scss/colors.scss"
import "../assets/scss/animations.scss"

const Layout = ({ children, wrapperClass = "" }) => {
  return (
    <>
      <Navbar />
      <main className="bg-dark">
        <div className={`content-wrapper ${wrapperClass} `}>{children}</div>
      </main>
      {/* <footer style={{textAlign:"center", width: "100%" }}>
        © {new Date().getFullYear()} Elias Nasrallah
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
