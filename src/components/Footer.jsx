import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-navy-dark text-center py-4">
            <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Blinds & Floors. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
