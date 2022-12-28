import { useState } from 'react';
import classes from './contact-form.module.css';

export default function ContactForm() {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    
    function sendMessageHandler(e) {
        e.preventDefault();

        const newMessage = { 
            email: enteredEmail,
            name: enteredName, 
            message: enteredMessage 
        };

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(newMessage),
            headers: {
                'Content-Type': 'application/json'
            }
        });
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
        </section>
    );
};