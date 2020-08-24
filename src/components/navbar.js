import React from 'react'
import NavItem from "./navItem"

const Navbar = () => {
    return (
        <nav className="bg-grey">
            <NavItem name={'home'} path='/' icon="home" />
            <NavItem name={'skills'} icon="terminal-box" />
            <NavItem name={'blog'} icon="edit" />
            {/* <NavItem name={'about'} icon="account-box" /> */}
            <NavItem name={'contact'} icon="mail" />
        </nav>

    )
}
export default Navbar;