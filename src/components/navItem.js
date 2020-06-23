import React from 'react'
import 'remixicon/fonts/remixicon.css'

const NavItem = ({ name, icon }) => {
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
    return (
        <div class="nav-item" data-target={name} onClick={() => switchPage(name)}>
            <i className={`ri-${icon}-line`} style={{ fontSize: "25px" }}></i>
            <span>{name}</span>
        </div>
    )
}
export default NavItem;