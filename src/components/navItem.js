import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'gatsby'

const NavItem = ({ name, icon, path = null }) => {
    const switchPage = function (pageID) {
        const nav = document.querySelector('nav')
        const pages = Array.from(document.querySelectorAll('.page'))
        pages.map(p => {
            if (p.id === pageID) {
                p.classList.add('active');
                (p.classList.contains('bg-dark')
                    ? nav.classList.remove('bg-dark')
                    : nav.classList.add('bg-dark'))
            }
            else { p.classList.remove('active') }
        })
    }

    const isActive = function (name){
        const location = document.location.pathname.split('/')[1]
        return (location == name || location=='' && name=='home') ? 'active' : ''
    }

    return (
        <div className={`nav-item ${isActive(name)}`} data-target={name} onClick={() => switchPage(name)}>
            <Link to={path ? path : `/${name}`}>
                <i className={`ri-${icon}-line`} style={{ fontSize: "25px" }}></i>
                <span>{name}</span>
            </Link>
        </div>
    )
}
export default NavItem;