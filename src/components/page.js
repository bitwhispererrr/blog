import React from 'react'
import PropTypes from "prop-types"

const Page = ({ children, id, active, position, bgColor }) => {
    return (
        <section className={`page offscreen ${active ? 'active ' : ''} ${position} bg-${bgColor}`} id={id}>
            {children}
        </section>
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
}

export default Page;