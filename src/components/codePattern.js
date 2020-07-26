import React from 'react'

// const renderSquare = () => {

//     return (
//         <span style={{ width: "15px", height: "15px", backgroundColor: "#00ee4f", opacity: `${Math.random().toFixed(2)}`, borderRadius: "2px" }}></span>
//     )
// }

const codePattern = () => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    // const columns = Array(Math.round(vw / 25)).fill('x')
    // const rows = Array(Math.round(vh / 35)).fill('x')
    return (
        <div id="squares" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}>
            {/* {rows.map(s => columns.map(c => renderSquare()))} */}
        </div>
    )
}

export default codePattern
