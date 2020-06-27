import React from 'react'
import { Link } from '@reach/router'
import Image from "gatsby-image"
// import { withAssetPrefix } from 'gatsby'

const Card = ({ article }) => {
    const cardContentStyles = {
        display: "flex",
        flexDirection: "column"
        // height: "100%",
        // width: "100%",
    }

    const cardHeaderStyles = {
        padding: "15px",
        color: "white",
        textAlign: "left",
    }

    return (
        <div class="card">
            <Link to={`/blog/${article.slug}`}>
                <div class="card-content" style={cardContentStyles}>
                    <div className="card-image">
                        <Image fluid={article.displayImage.image} />
                    </div>
                    <div className="card-header bg-grey" style={cardHeaderStyles}>
                        <article>
                            <h3>{article.title}</h3>
                            <small>{article.createdAt}</small>
                        </article>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Card;
