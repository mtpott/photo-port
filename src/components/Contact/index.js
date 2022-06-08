import React, { useState } from 'react';

function ContactForm() {
    //formState will have three key-value pairs to represent the three user inputs: name, email, and message
    const [formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    //setFormState updates the formState value for the name property. we assign the value taken from the input field in the UI with e.target.calue and assign the value to the property formState.name. use the spread operator (...formState) to retain the other key-value pairs in the object. without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    function handleChange(e) {
    //e.target.name refers to the name attribute of the form element
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    //this console.log is outside the handleChange function because the asynchronous nature of the setFormState function will cause the console.log inside the function body to appear delayed in its ability to sync. 
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;