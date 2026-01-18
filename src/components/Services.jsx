import React from 'react';
import { FiMinimize2, FiLayers, FiGrid, FiSun } from 'react-icons/fi';

const services = [
    {
        id: 1,
        title: "Venetian Blinds",
        description: "Classic elegance with precise light control. Available in aluminum, wood, and PVC.",
        icon: <FiList />
    },
    {
        id: 2,
        title: "Roller Blinds",
        description: "Sleek and modern. Perfect for blocking out light or filtering it gently.",
        icon: <FiSun />
    },
    {
        id: 3,
        title: "Laminate Flooring",
        description: "Durable and stylish. The look of real wood with superior scratch resistance.",
        icon: <FiLayers />
    },
    {
        id: 4,
        title: "Vinyl Flooring",
        description: "Water-resistant and quiet underfoot. Ideal for kitchens and bathrooms.",
        icon: <FiGrid />
    }
];

// Re-using icon imports just for show, better to use specific ones
import { FiList } from 'react-icons/fi';

const Services = () => {
    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Premium Services</h2>
                    <p className="section-subtitle">Discover our range of custom window and floor solutions.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon text-gold">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
