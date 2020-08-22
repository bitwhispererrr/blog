import React from 'react'
import { Link } from '@reach/router'
import Image from "gatsby-image"
// import { withAssetPrefix } from 'gatsby'

const Card = ({ article }) => {
    return (
        <div class="card enter-bottom">
            <div className="card-image">
                <Image fluid={article.displayImage.image} style={{ display: "block", width: "100%", maxWidth: "100%", height:"165px" }} />
            </div>
            <div className="card-header bg-grey">
                <Link to={`/blog/${article.slug}`}>
                    <h3>{article.title}</h3>
                </Link>
                <small>{article.createdAt}</small>
            </div>
        </div>
    )
}
export default Card;
