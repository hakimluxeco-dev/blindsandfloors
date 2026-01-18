import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiX, FiZoomIn } from 'react-icons/fi';

// Import images
import blind1 from '../assets/gallery/blind1.jpg';
import blind2 from '../assets/gallery/blind2.jpg';
import blind3 from '../assets/gallery/blind3.jpg';
import blind4 from '../assets/gallery/blind4.jpg';
import floor1 from '../assets/gallery/floor1.jpg';
import floor2 from '../assets/gallery/floor2.jpg';
import floor3 from '../assets/gallery/floor3.jpg';
import floor4 from '../assets/gallery/floor4.jpg';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    { id: 1, src: blind1, category: 'Blinds', title: 'Aluminium Venetian' },
    { id: 2, src: floor1, category: 'Flooring', title: 'Luxury Vinyl' },
    { id: 3, src: blind2, category: 'Blinds', title: 'Office Blinds' },
    { id: 4, src: floor2, category: 'Flooring', title: 'Wooden Flooring' },
    { id: 5, src: floor3, category: 'Flooring', title: 'Modern Living' },
    { id: 6, src: blind3, category: 'Blinds', title: 'Custom Fit' },
    { id: 7, src: floor4, category: 'Flooring', title: 'Laminate Parquet' },
    { id: 8, src: blind4, category: 'Blinds', title: 'Classic White' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const images = gsap.utils.toArray('.gallery-item');

        images.forEach((img, i) => {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.1, // Stagger effect
                ease: 'power2.out'
            });
        });
    }, { scope: containerRef });

    return (
        <section id="gallery" className="section-padding" style={{ backgroundColor: '#fff' }} ref={containerRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Recent Projects</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        Browse through our portfolio of custom blind installations and premium flooring solutions.
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="gallery-item"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="gallery-img-wrapper">
                                <img src={image.src} alt={image.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <FiZoomIn className="gallery-icon" />
                                    <span className="gallery-category">{image.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                        <FiX />
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <div className="lightbox-caption">
                            <h3>{selectedImage.title}</h3>
                            <span>{selectedImage.category}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
