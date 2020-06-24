import React from 'react'
import { Link } from '@reach/router'
// import { withAssetPrefix } from 'gatsby'

const Card = ({ article }) => {
    const cardStyles = { width: "33.3%", height: "100%", padding: "0 15px 0 15px", overflow: "hidden" };
    const cardContentStyles = {
        overflow: "hidden",
        position: "relative",
        height: "100%",
        width: "100%",
    }
    const cardBgStyles = {
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        background: `url(${article.displayImage.image.src})`
    }

    const cardHeaderStyles = {
        position: "absolute",
        bottom: "0",
        padding: "0 15px",
        height: "40%",
        width: "100%",
        color: "white",
        textAlign: "left",
    }
    return (
        <div class="card" style={cardStyles}>
            <Link to={`/blog/${article.slug}`}>
                <div class="card-content" style={cardContentStyles}>
                    <div class="card-bg" style={cardBgStyles}>
                    </div>
                    <div className="card-header bg-grey" style={cardHeaderStyles}>
                        <h3>{article.title}</h3>
                        <small>{article.date}</small>
                        <div>{article.description}</div>
                    </div>
                </div>

            </Link>
        </div>
    )
}
export default Card;
