import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/27748000135"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={32} />
        </a>
    );
};

export default WhatsAppButton;
