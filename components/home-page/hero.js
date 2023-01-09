import classes from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/olena.jpg" 
                    alt="An image showing Olena" 
                    width={300} 
                    height={300}
                />
            </div>
            <h1>HI, I'm Olena</h1>
            <p>
                I blog about web development - especially about frontend frameworks like Next.js or React library
            </p>
        </section>
    );
};