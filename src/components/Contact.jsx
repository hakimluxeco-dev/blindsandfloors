import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi';

const Contact = ({ onOpenMap }) => {
    return (
        <section id="contact" className="contact section-padding bg-navy">
            <div className="container">
                <div className="section-header text-white">
                    <h2 className="section-title text-white">Contact Us</h2>
                    <p className="section-subtitle text-gray-300">Ready to transform your space? Get in touch today.</p>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FiPhone className="contact-icon text-gold" />
                            <div>
                                <h4>Call Us</h4>
                                <a href="tel:0748000135">074 800 0135</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FiMail className="contact-icon text-gold" />
                            <div>
                                <h4>Email Us</h4>
                                <a href="mailto:mfcblinds@gmail.com">mfcblinds@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FiMapPin className="contact-icon text-gold" />
                            <div>
                                <div
                                    onClick={onOpenMap}
                                    style={{ cursor: 'pointer' }}
                                    className="address-link"
                                >
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Visit Us <FiExternalLink size={16} style={{ color: 'var(--gold)' }} />
                                    </h4>
                                    <p>26 Crown Road, Johannesburg</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Phone Number" required />
                        </div>
                        <div className="form-group">
                            <select>
                                <option value="">Interested In...</option>
                                <option value="blinds">Blinds</option>
                                <option value="flooring">Flooring</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea rows="4" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="btn-gold">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
