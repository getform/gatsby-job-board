import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image';

const Header = ({ siteTitle }) => (
    <header
      style={{
        background: `transparent`,
        marginBottom: `20px`,
        
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          borderBottom: "6px solid #24211e",
          maxWidth: 960,
          position: 'relative',
          marginTop: '60px',
          padding: `10px`,
        }}
      >
        <h1 style={{ 
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'IBM Plex Sans',
            justifyContent: 'center', }}>
          <div style={{ 
            maxWidth: `97px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginRight: '5px'
        }}>
          <div
            style={{
              width: '87px',
              height: '20px',
            }}
          >
            <Image
                style={{
                  position: 'relative',
                  marginRight: '5px'
                }}
              />
          </div>
          </div>
          <Link
            to="/"
            style={{
              fontFamily: 'IBM Plex Sans',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: `#24211e`,
              fontSize: '12px',
              paddingTop: '10px',
              textDecoration: `none`,
            }}
          >
            by Getform
          </Link>
          <Link
            to="post-a-job"
            style={{
              position: 'absolute',
              right: 0,
              bottom: '10px',
              fontSize: '14px',
              textDecoration: 'none',
              color: '#093d98',
              fontWeight: 'normal'
            }}
          >
            Post a Job
          </Link>
        </h1>
      </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
