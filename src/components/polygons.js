import React, { useEffect } from 'react'


const renderPolygon = () => {
    const size = (Math.random() * (80 - 30) + 30)
    const vw = window.innerWidth
    const vh = window.innerHeight
    const randX = 0
    const randY = 0
    return (
        <svg className="bg-polygon" width={`${size}`} height={`${size}`} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{
                position: "absolute",
                transform: `translate3d(${randX}, ${randY})`
            }}
        >
            <path d="M60 0L119.5 59.5L100 120H20L0.5 59.5L60 0Z" fill="#85FF8A" />
        </svg>
    )
}

const animatePolygons = () => {
    // const vw = window.innerWidth
    // const vh = window.innerHeight
    const polygons = document.querySelectorAll('.bg-polygon')
    polygons.forEach((p, k) => {
        p.classList.toggle('fading')
    })

}

const Polygons = () => {
    useEffect(() => {
        const fadeInterval = setInterval(animatePolygons, 1500)
        return () => {
            clearInterval(fadeInterval)
        }
    })
    return (
        <div id="squares" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}>
            {Array(5).fill('').map(p => renderPolygon())}
        </div>
    )
}

export default Polygons
