import React from 'react';
import { FiX } from 'react-icons/fi';

const MapModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="lightbox" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose}>
                <FiX />
            </button>
            <div className="lightbox-content map-modal-content" onClick={(e) => e.stopPropagation()}>
                <iframe
                    title="Google Maps Location"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=26%20Crown%20Road,%20Johannesburg+(Blinds%20%26%20Floors)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    style={{ borderRadius: '8px', display: 'block' }}
                >
                </iframe>
            </div>
        </div>
    );
};

export default MapModal;
