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

import "./layout.scss"
import "./colors.scss"

const Layout = ({ children, wrapperClass }) => {
  return (
    <>
      <Navbar>
        <NavItem name={'home'} path='/' icon="home" />
        <NavItem name={'skills'} icon="terminal-box" />
        <NavItem name={'blog'} path='/posts' icon="edit" />
        <NavItem name={'about'} icon="account-box" />
        <NavItem name={'contact'} icon="mail" />
      </Navbar>
      <main className="bg-dark">
        <div className={"content-wrapper " + wrapperClass}>
          {children}
        </div>
      </main>
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
