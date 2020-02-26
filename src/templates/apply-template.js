import React, { useState, useRef } from 'react';
import Layout from '../components/layout'
import axios from 'axios';
import { Link } from 'gatsby';

export default function Apply({ pageContext: { page } }) {
    let [title, setTitle] = useState("")
    let [email, setEmail] = useState("")
    let [address, setAddress] = useState("")
    let [phone, setPhone] = useState("")
    let [birthDate, setBirthDate] = useState(false)
    let [isPosted, setPosted] = useState(false)
    let [isPosting, setPosting] = useState(false)
    let fileInput = useRef();

    const applyJob = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('birthDate', birthDate);
        formData.append('job', page.title);
        formData.append('company', page.company);
        formData.append('cv', fileInput.current.files[0])

        setPosting(true);
        axios.post('https://getform.io/f/d6e6fa0a-45fd-4b2d-9474-f99c72144e43', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
          }}).then(response => {
            setPosting(false);
            setPosted(true);
        }).catch(err => {
            console.error(err);
        })
    }
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
            }}>
            <div
                style={{ width: '620px' }}
            >
                <h1
                    style={{
                        color: '#1d1d1b',
                        fontSize: '24px',
                        fontWeight: '600',
                        marginTop: '35px',
                        marginBottom: '24px'
                    }}
                >Apply to {page.title} at {page.company}</h1>
                {isPosted ? <div>
                    <p>Congrats! We've got your application! You can go <Link to="/">back</Link> to increase your chances!</p>
                </div>
                    : <form>
                        <div>
                            <input style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} type="text" onChange={(e) => { setTitle(e.target.value) }} placeholder="Name Surname" />
                        </div>
                        <div>
                            <input style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        </div>
                        <div>
                            <textarea style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} onChange={(e) => { setAddress(e.target.value) }} placeholder="Address" />
                        </div>
                        <div>
                            <input style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} type="tel" onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone Number" />
                        </div>
                        <div>
                            <input style={{
                            width: '320px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '24px',
                            padding: '10px'
                        }} type="date" onChange={(e) => { setBirthDate(e.target.value) }} placeholder="Birth Date" />
                        </div>
                        <div>
                            <input style={{
                            width: '320px',
                            marginBottom: '24px',
                        }} type="file" ref={fileInput} placeholder="Your Resume" />
                        </div>
                        <div>
                        {isPosting ? <p>Applying...</p> : <button style={{
                        background: '#093d98',
                        padding: '10px 45px',
                        color: 'white',
                        textDecoration: 'none',
                    }} type="button" onClick={applyJob}>Apply</button>}
                        </div>
                        
                    </form>}
            </div>
        </div>
    </Layout>
}