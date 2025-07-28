import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already accepted cookies
    const hidePopup = sessionStorage.getItem('hidepopup');
    if (!hidePopup) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('hidepopup', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookies-statement" style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      background: '#333',
      color: 'white',
      padding: '1rem',
      zIndex: '1000',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="cookiesleft">
        <p>We use cookies to offer you a better browsing experience.</p>
      </div>
      <div className="cookiesright">
        <div className="cookies-btn text-center">
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: '0', padding: '0' }}>
            <li>
              <button 
                onClick={handleAccept}
                style={{
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Accept
              </button>
            </li>
            <li>
              <a 
                href="/privacy-policy" 
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '1px solid white',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  textDecoration: 'none'
                }}
              >
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;