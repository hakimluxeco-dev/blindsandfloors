import React from 'react';

const Logo = ({ className, variant = 'dark', showText = true }) => {
    const primaryColor = variant === 'light' ? '#FFFFFF' : '#0A192F';
    const secondaryColor = '#D4AF37';

    return (
        <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Blinds Section (Primary Color) */}
                <rect x="10" y="10" width="80" height="8" rx="2" fill={primaryColor} />
                <rect x="10" y="22" width="80" height="8" rx="2" fill={primaryColor} />
                <rect x="10" y="34" width="80" height="8" rx="2" fill={primaryColor} />
                {/* Strings */}
                <line x1="30" y1="10" x2="30" y2="45" stroke={primaryColor} strokeWidth="2" />
                <line x1="70" y1="10" x2="70" y2="45" stroke={primaryColor} strokeWidth="2" />

                {/* Floors Section (Gold) */}
                <rect x="10" y="50" width="38" height="15" fill={secondaryColor} />
                <rect x="52" y="50" width="38" height="15" fill={secondaryColor} />
                <rect x="10" y="69" width="50" height="15" fill={secondaryColor} />
                <rect x="64" y="69" width="26" height="15" fill={secondaryColor} />
            </svg>
            {showText && (
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: primaryColor, letterSpacing: '-0.5px' }}>Blinds</span>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: secondaryColor, letterSpacing: '-0.5px' }}>& Floors</span>
                </div>
            )}
        </div>
    );
};

export default Logo;
