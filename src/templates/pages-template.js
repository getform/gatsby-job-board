import React from "react"
import { Link } from "gatsby";

export default ({ pageContext: { pages } }) => (
    <div style={{ width: 960, margin: "4rem auto" }}>
        <h1>Hello and welcome!</h1>
        <ul>{pages.map(page => <li key={page.id}><Link to={`/post/${page.url}`}>{page.title}</Link></li>)}</ul>
    </div>
)
