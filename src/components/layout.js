/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import "./colors.css"
import Navbar from "./navbar"
import NavItem from "./navItem"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Navbar>
        <NavItem name={'home'} />
        <NavItem name={'work'} />
        <NavItem name={'blog'} />
        <NavItem name={'about'} />
      </Navbar>
      <main>{children}</main>
      <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
        © {new Date().getFullYear()} Elias Nasrallah
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
