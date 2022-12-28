import { useRef } from 'react';
import classes from './contact-form.module.css';

export default function ContactForm() {
    const emailInput = useRef(),
        nameInput = useRef(),
        textareaInput = useRef();


    function sendMessageHandler(e) {
        e.preventDefault();

        const email = emailInput.current.value,
            name = nameInput.current.value,
            message = textareaInput.current.value;

        if (
            !email || 
            !email.includes('@') ||
            !name || 
            name.trim() === '' ||
            !message || 
            message.trim() === ''
        ) {
            console.log('Invalid input');
            return;
        }

        const newMessage = { email, name, message };

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(newMessage),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <section className={classes.contact}>
            <h1>How Can I Help You?</h1>

            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" required ref={emailInput}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required ref={nameInput}/>
                    </div>
                </div>

                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="name" rows={5} ref={textareaInput}/>
                </div>

                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    )
}