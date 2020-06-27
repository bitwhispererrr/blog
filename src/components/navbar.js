import React, { Children } from 'react'

const Navbar = ({ children }) => {
    return (
        <nav className="bg-grey">
            {children}
        </nav>

    )
}
export default Navbar;