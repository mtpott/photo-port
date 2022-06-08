import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    //formState will have three key-value pairs to represent the three user inputs: name, email, and message
    const [formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    //setFormState updates the formState value for the name property. we assign the value taken from the input field in the UI with e.target.calue and assign the value to the property formState.name. use the spread operator (...formState) to retain the other key-value pairs in the object. without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if(!isValid) {
                setErrorMessage('your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
        // e.target.name refers to the name attribute of the form element
        setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    //this console.log is outside the handleChange function because the asynchronous nature of the setFormState function will cause the console.log inside the function body to appear delayed in its ability to sync. 
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                <button data-testid="submit" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;