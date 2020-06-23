import React from 'react'
import { withAssetPrefix } from 'gatsby'

const Card = ({ title, summary, date, imgURL }) => {
    title = "Testing Some Title..."
    summary = "First article in the ReactJS beginner series >"
    date = "Jan 21 2020"
    imgURL = "https://picsum.photos/700/600"
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
        background: `url(${imgURL})`
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
            <div class="card-content" style={cardContentStyles}>
                <div class="card-bg" style={cardBgStyles}>
                </div>
                <div className="card-header bg-grey" style={cardHeaderStyles}>
                    <h3>{title}</h3>
                    <small>{date}</small>
                    <div>{summary}</div>
                </div>
            </div>

        </div>
    )
}
export default Card;
