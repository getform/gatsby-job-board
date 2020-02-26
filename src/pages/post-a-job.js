import React, { useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import slugify from 'slugify'

export default function PostJob() {
    let [title, setTitle] = useState("")
    let [company, setCompany] = useState("")
    let [location, setLocation] = useState("")
    let [description, setDescription] = useState("")
    let [content, setContent] = useState("")
    let [isPosted, setPosted] = useState(false)
    let [isPosting, setPosting] = useState(false)

    const postJob = () => {
        let details = {
            title,
            company,
            location,
            description,
            content,
            url: slugify(`${title}-at-${company}`, { lower: true })
        }
        setPosting(true);
        axios.post('https://getform.io/f/552c8aa5-0d2a-4537-9758-139201bd274b', details, {
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            setPosting(false);
            setPosted(true);
        }).catch(err => {
            console.error(err);
        })
    }
    return <Layout>
        <div style={{
            fontFamily: 'IBM Plex Sans',
            background: 'white',
            maxWidth: '',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative'
        }}>
            <div
                style={{ width: '620px' }}>
                <h1 style={{
                    color: '#1d1d1b',
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '5px',
                    marginTop: '35px',
                    marginBottom: '24px'
                }}
                >Post a Job</h1>
                {isPosted ? <p>Your job application is posted! It will be around here really soon.</p> : 
                <form>
                    <div>
                        <input style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} type="text" onChange={(e) => { setTitle(e.target.value) }} placeholder="Title" />
                    </div>
                    <div>
                        <input style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} type="text" onChange={(e) => { setCompany(e.target.value) }} placeholder="Company" />
                    </div>
                    <div>
                        <input style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} type="text" onChange={(e) => { setLocation(e.target.value) }} placeholder="Location" />
                    </div>
                    <div>
                        <textarea style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} onChange={(e) => { setDescription(e.target.value) }} placeholder="Short Description" />
                    </div>
                    <div>
                        <textarea style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} onChange={(e) => { setContent(e.target.value) }} placeholder="Details" />
                    </div>
                    {isPosting ? <p>Posting...</p> : 
                    <button style={{
                        background: '#093d98',
                        padding: '10px 45px',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                        type="button" onClick={postJob}>Post</button>
                }
                </form>}
            </div>
        </div>
    </Layout>
}