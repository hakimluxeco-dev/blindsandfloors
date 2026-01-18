import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2
        })
            .from(subtitleRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.6')
            .from(btnRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.4');

    }, { scope: containerRef });

    return (
        <section id="hero" className="hero" ref={containerRef}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 ref={titleRef} className="hero-title">
                    Transform Your Space with <br />
                    <span className="text-gold">Premium Blinds & Flooring</span>
                </h1>
                <p ref={subtitleRef} className="hero-subtitle">
                    Elegant, durable, and custom-fitted solutions for your home or office.
                </p>
                <div ref={btnRef}>
                    <a href="#contact" className="btn-primary hero-btn">Get a Free Quote</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
