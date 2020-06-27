import React from 'react'
import { Link } from '@reach/router'
import Image from "gatsby-image"
// import { withAssetPrefix } from 'gatsby'

const ArticlePreview = ({ article }) => {

    return (
        <div class="article-preview">
            <div className="image-wrapper">
                <Image fluid={article.displayImage.image} />
            </div>
            <article>
                <h3>{article.title}</h3>
                <small>{article.createdAt}</small>
            </article>
            <div><span className="read-more">
                <Link to={`/blog/${article.slug}`}>Continue Reading</Link></span>
            </div>
        </div>
    )
}
export default ArticlePreview;
