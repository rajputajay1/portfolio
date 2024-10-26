import Link from 'next/link'
import React from 'react'

const Navbar = ({page}) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link href="/" className={`navbar-link ${page == "About" && 'active'}`} data-nav-link>About</Link>
                </li>
                <li className="navbar-item">
                    <Link href="/resume" className={`navbar-link ${page == "Resume" && 'active'}`} data-nav-link>Resume</Link>
                </li>
                <li className="navbar-item">
                    <Link href="/portfolio" className={`navbar-link ${page == "Portfolio" && 'active'}`} data-nav-link>Portfolio</Link>
                </li>
                <li className="navbar-item">
                    <Link href="/contact" className={`navbar-link ${page == "Contact" && 'active'}`} data-nav-link>Contact</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
