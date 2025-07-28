import React from 'react';

const Footer = () => {
  const handleAcceptCookies = () => {
    sessionStorage.setItem('hidepopup', 'true');
    document.getElementById("cookies-banner").classList.add("hide");
  };

  return (
    <>
      <div className="footer-wrapper pb-5" style={{ position: 'relative', zIndex: 100 }}>
        <footer id="main-footer" className="main-footer bor-bot">
          <div data-elementor-type="footer" data-elementor-id="1037" className="elementor elementor-1037 elementor-location-footer" data-elementor-post-type="elementor_library">
            <div className="elementor-element elementor-element-06d0b08 section e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="06d0b08" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-478913c e-con-full e-flex e-con e-child" data-id="478913c" data-element_type="container">
                  <div className="mancss-has-theme-widget-styles elementor-element elementor-element-c10323f mancss-has-text-reveal-anim elementor-widget elementor-widget-heading" data-id="c10323f" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <span className="fs-36 mb-2 text-white">Ready to Build the Future Together?</span>	
                      <p>Join us in creating innovative digital products that make a difference</p>			
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9674159 e-con-full e-flex e-con e-child" data-id="9674159" data-element_type="container">
                  <div className="mancss-has-theme-widget-styles elementor-element elementor-element-92eaeb3 elementor-align-right elementor-widget elementor-widget-button" data-id="92eaeb3" data-element_type="widget" data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <div className="display-hidemobile">
                          <a href="#" className="mainbutton right-s read w-inline-block" style={{ float: 'right' }}>
                            <div className="mainbutton-txt">Get in Touch</div>
                            <div className="w-layout-vflex button-iconwrapper">
                              <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                              <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>	
          </div>
        </footer>
      </div>

      <footer data-wf--footer--variant="base" className="footer_v2 top">
        <div className="container_v2">
          <img src="https://blentops-web.inddev.in/wp-content/images/brand_word_grey.svg" 
            loading="eager" alt="" className="footer-brand top" />
          <div className="w-layout-hflex footer-header">
            <div className="w-layout-hflex footer-links no-padding">
              <div className="w-layout-vflex">
                <div className="w-dyn-list">
                  <div role="list" className="footer-linkslist w-dyn-items">
                    <div className="col-sm-12 col-md-5" data-aos="fade-up">
                      <div className="">
                        <div className="pb-5">
                          <img className="footerlogo" src="https://blentops-web.inddev.in/wp-content/images/footerlogo.svg" alt="footerlogo" />
                        </div>
                       
                       
                          <div className="d-flex align-items-baseline">       
                            <div className="me-1">
                              <img className="pe-1" src="https://blentops-web.inddev.in/wp-content/images/call.svg" alt="call" title="" width="21" height="20" />
                            </div>             
                            <a className="fn-16 text-white" href="tel:+916232696232" title="+916232696232">+916232696232</a>
                          </div>             
                           
                      
                          <div className="d-flex align-items-baseline">       
                            <div className="me-1">
                              <img className="pe-1" src="https://blentops-web.inddev.in/wp-content/images/email.svg" alt="Email" title="" width="21" height="20" />
                            </div>             
                            <a className="fn-16 text-white" href="mailto:help@publicityposter.com" title="help@publicityposter.com">help@publicityposter.com</a>
                          </div>            
                      
                        <div className="d-flex align-items-baseline">    
                          <div className="me-1">
                            <img src="https://blentops-web.inddev.in/wp-content/images/map_pin.svg" alt="Address" title="" width="21" height="20" className="pe-1" />
                          </div>             
                          <span className="fn-face2 fn-16 text-white mb-2">IND Tech Mark Headquarter, Shishwachak,<br /> Punpun, Patna</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-layout-vflex footer-linksrow">
                <h2 className="footer-h3">Products</h2>
                <div className="w-dyn-list">
                  <div role="list" className="w-layout-vflex footer-linkslist">
                    <div role="listitem" className="w-dyn-item">
                      <a href="https://zerogateway.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Zerogateway</a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="footer-link">Consider11</a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a href="https://www.cricblaze.com/" target="_blank" rel="noopener noreferrer" className="footer-link">CricBlaze</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-layout-vflex footer-linksrow social">
                <h2 className="footer-h3">Company</h2>
                <div className="w-layout-vflex footer-linkslist">
                  <a href="about.html" className="footer-link">About Us</a>					 
                  <a href="careers.html" className="footer-link">Careers</a>
                  <a href="investors-and-media.html" className="footer-link">Investors & Media</a>					 
                  <a href="blog.html" className="footer-link">Blog</a>
                </div>
              </div>
              
              <div className="w-layout-vflex footer-linksrow social">
                <h2 className="footer-h3">Support</h2>
                <div className="w-layout-vflex footer-linkslist">
                  <a href="contact-us.html" className="footer-link">Contact</a>					 
                  <a href="collaborate.html" className="footer-link">Collaborate</a>
                  <a href="privacy-policy.html" className="footer-link">Privacy Policy</a>					 
                  <a href="terms-of-service.html" className="footer-link">Terms of Service</a>
                </div>
              </div>
              
              <div className="w-layout-vflex footer-linksrow social">
                <h2 className="footer-h3">Socials</h2>
                <div className="footer-linkslist-socialwrapper w-dyn-list">
                  <div role="list" className="footer-linkslist">
                    <a href="#" className="footer-link">
                      Linkedin
                      <span className="arrow-wrapper">
                        <img src="https://blentops-web.inddev.in/wp-content/images/icon_arrow-up-white.svg" alt="Arrow default" />
                        <img src="https://blentops-web.inddev.in/wp-content/images/icon_arrow-up-white.svg" alt="Arrow hover" />
                      </span>
                    </a>
                    <a href="#" className="footer-link">
                      Twitter
                      <span className="arrow-wrapper">
                        <img src="https://blentops-web.inddev.in/wp-content/images/icon_arrow-up-white.svg" alt="Arrow default" />
                        <img src="https://blentops-web.inddev.in/wp-content/images/icon_arrow-up-white.svg" alt="Arrow hover" />
                      </span>
                    </a>
                    <a href="#" className="footer-link">
                      Instagram
                      <span className="arrow-wrapper">
                        <img src="https://blentops-web.inddev.in/wp-content/images/icon_arrow-up-white.svg" alt="Arrow default" />
                        <img src="https://blentops-web.inddev.in/wp-content/images/icon_arrow-up-white.svg" alt="Arrow hover" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-layout-hflex footer-copy bordertop">
            <div className="footer-copytxt">
              <span className="elementor-heading-title fs-18">©2025, Blentops. All rights reserved.</span>	
            </div>
            <span style={{ marginLeft: 'auto' }}>Design & developed by IND Tech Mark</span>
            <a href="#top" className="scroll-to-top">
              <div className="image-hover-slide">
                <img src="https://blentops-web.inddev.in/wp-content/images/icon_arrow-up-white.svg" className="img-default" alt="Default Arrow" />
                <img src="https://blentops-web.inddev.in/wp-content/images/icon_arrow-up-white.svg" className="img-hover" alt="Hover Arrow" />
              </div>
            </a>
          </div>
        </div>
        
        <div className="cookies-statement hide" id="cookies-banner">
          <div className="Cookies">			
            <div className="cookiesleft">              
              <p className="">We use cookies to offer you a better browsing experience. If you continue to use this site, you consent to our use of cookies.</p>
            </div>
            <div className="cookiesright">
              <div className="cookies-btn text-center">
                <ul className="list-unstyled mb-0">
                  <li><button onClick={handleAcceptCookies} className="btn btn_w bg-darkgreen me-2 fn-16 acceptbtn"><span className="">Accept</span></button></li>
                  <li>
                    <div className="btnstyle"><a className="btn btn_w me-2 cookiesbtn" href="privacy-policy.html"><span>Learn More</span> </a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;