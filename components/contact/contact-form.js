import classes from './contact-form.module.css';

export default function ContactForm() {
    return (
        <section className={classes.contact}>
            <h1>How Can I Help You?</h1>

            <form className={classes.form}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" required/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required/>
                    </div>
                </div>

                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="name" rows={5}/>
                </div>

                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    )
}