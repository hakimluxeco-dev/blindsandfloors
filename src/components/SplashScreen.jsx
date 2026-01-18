import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Logo from './Logo'; // Using main site transparent logo

const SplashScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: onComplete
        });

        // Initial State
        gsap.set(logoRef.current, { scale: 0, opacity: 0 });
        gsap.set(textRef.current, { y: 20, opacity: 0 });

        // Animation Sequence
        tl.to(logoRef.current, {
            scale: 2, // Scaled up logo
            opacity: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)"
        })
            .to(textRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")
            .to(containerRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: "power4.inOut",
                delay: 1 // Hold for a second
            });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="splash-screen">
            <div className="splash-content">
                <div ref={logoRef} className="splash-logo-wrapper">
                    <Logo variant="light" showText={false} />
                </div>
                <div ref={textRef} className="splash-text">
                    <h1>Blinds & Floors</h1>
                    <p>Johannesburg's Premier Decor Solutions</p>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
