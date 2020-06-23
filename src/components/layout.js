/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import NavItem from "./navItem"

import "./layout.css"
import "./colors.css"

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
      <Navbar>
        <NavItem name={'home'} icon="home" />
        <NavItem name={'skills'} icon="terminal-box" />
        <NavItem name={'blog'} icon="edit" />
        <NavItem name={'about'} icon="account-box" />
        <NavItem name={'contact'} icon="mail" />
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
