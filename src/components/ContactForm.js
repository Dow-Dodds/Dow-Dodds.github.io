import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const formEndpoint = `​http://localhost:8888/dow/wp-json/contact-form-7/v1/contact-forms/30/feedback`
   
const ContactForm = () => {
//collect inputs and store in state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    //setup state for our contact form 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('your-name', name)
        formData.append('email', email)
        formData.append('message', message)

        axios.post(formEndpoint, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then( (response)=>{
            console.log(response)
            setSubmitted(true)
        }).catch( (error)=> {
            console.log(error)
            setError("there was an error, please try again later! or reach me via dowdodds@gmail.com")
        })

    }

    if (submitted) {
        return (
            <>
                <h3>Thank You!</h3>
                <p>Your message was sent, Ill be in touch asap</p>
            </>
        )
    }
    if (error) {
        <>
            <h3>Error!</h3>
            <p>Sorry, we were unable to send your message! Please try again later or or reach me via dowdodds@gmail.com </p>
        </>
    }
    return (
        <div id="form-container">
            <form
            onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
            }}>
                <label htmlFor='name'>Name:</label>
                <input 
                    type="text"
                    name="name"
                    required
                    onChange={ (e) => {
                        setName(e.target.value)
                }}/>

                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    onChange={ (e)=>{
                        setEmail(e.target.value)
                }}/>

                <label htmlFor='message'>Message</label>
                <textarea
                    type="text"
                    name="message"
                    required
                    onChange={ (e)=>{
                        setMessage(e.target.value)
                }}/>

                <div id="button-wrapper">
                    <button id="send-button" className='button'><h5>SEND MESSAGE</h5></button>
                </div>
            </form>
        </div>
    )

}

export default ContactForm