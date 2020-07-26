import React, { useState } from 'react'
import BlogCards from "../components/blogCards"
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"



const Posts = () => {
    const tagsQuery = useStaticQuery(graphql`
        {
        allContentfulTag(limit: 4) {
            tags: nodes { name }
        }
        }
    `)
    const tag_list = tagsQuery.allContentfulTag.tags
    const [selectedTags, setTags] = useState([])

    const onTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setTags(selectedTags.filter(t => t !== tag))
        } else {
            setTags([...selectedTags, tag])
        }
    }

    const renderTags = () => tag_list.map(tag =>
        <li
            className={`btn btn-outline-primary tag text-center ${selectedTags.includes(tag) ? 'active' : ''}`}
            style={{ listStyleType: "none", marginRight: "15px", display: "flex", alignItems: "center" }}
            onClick={() => onTagClick(tag)}
        >
            <i className={`ri-bookmark-${selectedTags.includes(tag) ? 'fill' : 'line'}`} style={{ marginRight: "5px" }} /> {tag.name}
        </li>
    )

    const cardsContainerStyles = {
        height: "90vh",
        width: "100%",
        overflowY: "scroll"
    }

    return (
        <Layout>
            <h1 className="highlight left">Latest Articles</h1>
            <ul className="tags enter-left">
                {renderTags()}
            </ul>
            <div style={cardsContainerStyles}>
                <BlogCards selectedTags={selectedTags}></BlogCards>
            </div>
        </Layout>
    )
}

export default Posts