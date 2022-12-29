import { useState, useEffect } from 'react';
import Notification from '../ui/notification';

import classes from './contact-form.module.css';

async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    };
};

export default function ContactForm() {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const [requestStatus, setRequestStatus] = useState(''); // 'pending', 'success' , 'error'
    const [requestError, setRequestError] = useState();

    useEffect( () => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        };
    }, [requestStatus]);

    async function sendMessageHandler(e) {
        e.preventDefault();

        const newMessage = { 
            email: enteredEmail,
            name: enteredName, 
            message: enteredMessage 
        };

        setRequestStatus('pending');

        try {
            await sendContactData(newMessage);
            setRequestStatus('success');

            setEnteredName('');
            setEnteredEmail('');
            setEnteredMessage('');
        } catch (error) {
            setRequestError(error.message);
            setRequestStatus('error');
        }; 

    };

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            title: 'Sending message...',
            message: 'Your message is on its way!',
            status: 'pending'
        }
    } ;
    
    if (requestStatus === 'success') {
        notification = {
            title: 'Success!',
            message: 'Message sent successfully!',
            status: 'success'
        };
    };

    if (requestStatus === 'error') {
        notification = {
            title: 'Error!',
            message: requestError,
            status: 'error'
        };
    };

    return (
        <section className={classes.contact}>
            <h1>How Can I Help You?</h1>

            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input 
                            required 
                            type="email" 
                            id="email" 
                            value={enteredEmail}
                            onChange={event => setEnteredEmail(event.target.value)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input 
                            required
                            type="text" 
                            id="name" 
                            value={enteredName}
                            onChange={event => setEnteredName(event.target.value)}
                        />
                    </div>
                </div>

                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        required
                        id="name" 
                        rows={5} 
                        value={enteredMessage}
                        onChange={event => setEnteredMessage(event.target.value)}
                    />
                </div>

                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && 
                <Notification 
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            }
        </section>
    );
};