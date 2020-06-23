import React from 'react'
import Card from "../components/card"
import { Link } from "@reach/router"

const BlogCards = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "80%", height: "300px" }}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}
export default BlogCards;