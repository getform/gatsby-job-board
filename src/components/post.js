import React from 'react';
import { Link } from 'gatsby';

export default function JobPost({ title, url, location, company }) {
    return <Link to={`${url}`} style={{ textDecoration: 'none' }}>
        <div style={{
            fontFamily: 'IBM Plex Sans',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'white',
            marginRight: '2px',
            marginBottom: '2px',
            padding: '21px 24px',
            textDecoration: 'none'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ marginBottom: '5px', textDecoration: 'none', color: '#1d1d1b', fontWeight: '500' }}>{title}, <span style={{ color: '#1d1d1b', fontWeight: '400' }}>{company}</span></p>
                <p style={{ fontFamily: 'IBM Plex Serif', margin: '0', color: '#77776b', fontSize: '14px', fontStyle: 'italic' }}>{location}</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <p style={{ color: '#24211e', marginRight: '5px', marginBottom: '0' }}>See all details</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
                    <path fill="#24211E" d="M2.489 4.978L0 9.644 0.311 9.956 5.289 4.978 0.311 0 0 0.311z" />
                </svg>
            </div>
        </div>
    </Link>

}