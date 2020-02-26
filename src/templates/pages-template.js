import React from "react"
import JobPost from "../components/post";
import Layout from '../components/layout';

export default ({ pageContext: { pages } }) => (
    <Layout>
        {pages.map(page => <JobPost url={`/job/${page.url}`} title={page.title} company={page.company} location={page.location} key={page.id} />)}
    </Layout>
)
