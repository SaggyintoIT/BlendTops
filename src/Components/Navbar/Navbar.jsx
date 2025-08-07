import React from 'react';
import { Link } from 'react-router-dom';

const Navbars = () => {
  const toggleMenu = () => {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  };

  return (
    <>
      <div className="grain-overlay"></div>
      <div data-elementor-type="header" data-elementor-id="349" className="elementor elementor-349 elementor-location-header" data-elementor-post-type="elementor_library">
        <nav className="headerborderb elementor-element elementor-element-3fffa23 mix-blend e-flex e-con-boxed e-con e-parent" data-id="3fffa23" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-5a443df elementor-widget elementor-widget-image" data-id="5a443df" data-element_type="widget" id="site-logo" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Link to="/">
                  <img 
                    width="350" 
                    height="94" 
                    src="https://blentops-web.inddev.in/wp-content/images/footerlogo.svg" 
                    className="attachment-full size-full wp-image-987665" 
                    alt="Blentops Logo" 
                  />
                </Link>
              </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="nav-menu" id="navMenu">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/products" className="footer-link">Products</Link>
        <Link to="/about" className="footer-link">About Us</Link>
        <Link to="/investors-media" className="footer-link">Investors & Media</Link>
        <Link to="/blog" className="footer-link">Blog</Link>
        <Link to="/collaborate" className="footer-link">Collaborate</Link>
        
        <div className="footer footertop">
          <div className="display-hidemobile menulink" style={{ display: 'flex', gap: '52px', margin: 'auto' }}>
            <a href="#" className="mainbutton trasprentbtn w-inline-block">
              <div className="mainbutton-txt fs-24">LinkedIn</div>
              <div className="w-layout-vflex button-iconwrapper">
                <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
              </div>
            </a>
            <a href="#" className="mainbutton trasprentbtn w-inline-block">
              <div className="mainbutton-txt fs-24">Twitter</div>
              <div className="w-layout-vflex button-iconwrapper">
                <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
              </div>
            </a>
            <a href="#" className="mainbutton trasprentbtn w-inline-block">
              <div className="mainbutton-txt fs-24">Instagram</div>
              <div className="w-layout-vflex button-iconwrapper">
                <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
              </div>
            </a>
          </div>
        </div>
        
        <div className="footer bordertop">
          <div className="elementor-widget-container">
            <span className="elementor-heading-title elementor-size-default">©2025, Blentops.</span>
          </div>

          <div className="footerinnermenu">
            <ul>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>

          <div className="display-hidemobile linkbtn">
            <Link to="/contact" className="mainbutton read w-inline-block" style={{ float: 'right' }}>
              <div className="mainbutton-txt">Get in Touch</div>
              <div className="w-layout-vflex button-iconwrapper">
                <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbars;