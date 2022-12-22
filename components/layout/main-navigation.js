import Link from 'next/link'
import Logo from './logo'
export default function MainNavigtion() {
    return (
        <header>
            <Link href="/">
                <a><Logo /></a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};