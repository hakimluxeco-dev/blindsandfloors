import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-wrapper">
                    <a href="#hero" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none' }}>
                        <Logo />
                    </a>
                </div>

                <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                        <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <a href="tel:0748000135" className="btn-primary desktop-only">
                        <FiPhone style={{ marginRight: '0.5rem' }} /> 074 800 0135
                    </a>
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
