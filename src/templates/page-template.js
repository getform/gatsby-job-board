import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout'

export default ({ pageContext: { page } }) => {
  return <Layout>
    <div
      style={{
        fontFamily: 'IBM Plex Sans',
        background: 'white',
        maxWidth: '',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <div
        style={{ width: '620px' }}
      >
        <Link to={`/job/${page.url}/apply`}
          style={{
            background: '#093d98',
            padding: '10px 45px',
            color: 'white',
            textDecoration: 'none',
            position: 'absolute',
            right: '20px'
          }}
        >
          Apply
      </Link>
        <h1
          style={{
            color: '#1d1d1b',
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '5px',
            marginTop: '65px'
          }}
        >{page.title}</h1>
        <p
          style={{
            color: '#77776b',
            marginBottom: '45px',
            fontStyle: 'italic',
            fontFamily: 'IBM Plex Serif'
          }}
        >{page.location} {page.company}</p>
        <p style={{fontFamily: 'IBM Plex Sans Devanagari'}}>
          {page.description}
        </p>
        <p style={{fontFamily: 'IBM Plex Sans Devanagari'}}>The Details:</p>
        <p style={{fontFamily: 'IBM Plex Sans Devanagari'}}>{page.content}</p>
      </div>
    </div>    
    </Layout>
}