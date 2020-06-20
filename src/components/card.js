import React from 'react'

const Card = ({ title, summary, imgURL }) => {
    title = "Testing Some Title..."
    summary = "First article in the ReactJS beginner series >"
    imgURL = "https://picsum.photos/200/300"
    const cardStyles = { width: "33.3%", height: "100%", padding: "0 15px 0 15px" };
    const cardContentStyles = {
        outline: "1px solid red",
        position: "relative",
        height: "100%",
        width: "100%",
    }
    const cardBgStyles = {
        background: `url(${imgURL})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto"
    }
    const cardHeaderStyles = { position: "absolute", bottom: "0", height: "40%", width: "100%" }
    return (
        <div class="card" style={cardStyles}>
            <div class="card-content" style={cardContentStyles}>
                <div className="card-header bg-grey" style={cardHeaderStyles}>
                    <div>{title}</div>
                    <div>{summary}</div>
                </div>
            </div>

        </div>
    )
}
export default Card;
