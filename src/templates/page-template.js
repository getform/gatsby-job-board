import React from 'react';
import { Link } from "gatsby";

export default ({ pageContext: { page } }) => (
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>{page.title}</h1>
      <span>{page.submissionDate}</span>
        <div>{page.content}</div>
      <Link to="/">Back to all posts</Link>
    </div>
  )
  