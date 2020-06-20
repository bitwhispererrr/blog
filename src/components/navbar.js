import React, { Children } from 'react'

const Navbar = ({ children }) => {
    return (
        <nav>
            {children}
        </nav>

    )
}
export default Navbar;