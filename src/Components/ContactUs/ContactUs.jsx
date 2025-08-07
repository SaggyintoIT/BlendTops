import React from 'react';

const ContactPage = () => {
  return (
    <div className="main-container">
      <div id="main-content">
        <div id="sub-header" className="layout-full elementor-page-title">
          <div className="meta-header">
            {/* Elementor `page-title` location */}
          </div>
        </div>
        <div id="main" role="main" className="mancss-main layout-full">
          <div className="page-wrapper">
            <article id="post-63" className="full post-63 page type-page status-publish hentry">
              <div className="page-content clearfix the-content-parent">
                <div data-elementor-type="wp-page" data-elementor-id="1467" className="elementor elementor-63 elementor-1467" data-elementor-post-type="page">
                  {/* Banner Section */}
                  <div className="elementor-widget-container text-center py-100">
                    <h1 className="innerpages">Contact Us</h1>	
                    <h2 className="innersubheading mb-0">
                      Let's start the dialogue now!
                    </h2>		
                  </div>
                
                  {/* Contact Form Section */}
                  <div className="elementor-element elementor-element-da241a8 e-flex e-con-boxed e-con e-parent mob_px pt-30" data-id="da241a8" data-element_type="container">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-0c41119 e-con-full section e-flex e-con e-child mob-pb pt-30" data-id="0c41119" data-element_type="container">
                        <div className="w-100">
                          <div className="elementor-widget-container">
                            <div className="container contactform">
                              {/* Form Section */}
                              <div className="form-section formbox">
                                <form>
                                  <div className="form-group">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" placeholder="Jane Cooper" id="fullname" />
                                  </div>
                            
                                  <div className="form-group half">
                                    <label htmlFor="company">Company Name*</label>
                                    <input type="text" placeholder="Ex. Tesla Inc" id="company" />
                                  </div>
                            
                                  <div className="form-group half">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" placeholder="You@Example.com" id="email" />
                                  </div>
                            
                                  <div className="form-group half">
                                    <label htmlFor="service">Service required*</label>
                                    <select id="service" required>
                                      <option value="" disabled selected>Select Your Service</option>
                                      <option value="web">Web Development</option>
                                      <option value="app">App Development</option>
                                      <option value="design">UI/UX Design</option>
                                    </select>
                                  </div>
                            
                                  <div className="form-group half">
                                    <label htmlFor="budget">Project budget*</label>
                                    <select id="budget" required>
                                      <option value="" disabled selected>Select Your Range</option>
                                      <option value="5k-10k">₹5,000 – ₹10,000</option>
                                      <option value="10k-20k">₹10,000 – ₹20,000</option>
                                      <option value="20k+">₹20,000+</option>
                                    </select>
                                  </div>
                            
                                  <div className="form-group">
                                    <label htmlFor="details">Project details*</label>
                                    <textarea placeholder="Tell us more about your idea" id="details" style={{ resize: 'none' }}></textarea>
                                  </div>
                            
                                  <div className="display-hidemobile pb-5">
                                    <a href="#" className="mainbutton read">
                                      <div className="mainbutton-txt">Send inquiry</div>
                                      <div className="w-layout-vflex button-iconwrapper">
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
                                      </div>
                                    </a>
                                  </div>
                                </form>
                              </div>
                            
                              {/* Contact Info Section */}
                              <div className="contact-section">
                                <h3>BLENTOPS (OPC) PRIVATE LIMITED</h3>
                            
                                <div className="">
                                  <p className="mb-2">
                                    <div className="d-flex align-items-baseline">       
                                      <div className="me-1">
                                        <img className="pe-1" src="https://blentops-web.inddev.in/wp-content/images/call.svg" alt="call" title="" width="30" height="28" />
                                      </div>             
                                      <a className="ps-2 fw-300 fs-24 text-white" href="tel:+91 8181957474" title="+91 8181957474">+91 8181957474</a>
                                    </div>             
                                  </p>
                                  
                                  <p className="">
                                    <div className="d-flex align-items-baseline">       
                                      <div className="me-1">
                                        <img className="pe-1" src="https://blentops-web.inddev.in/wp-content/images/email.svg" alt="Email" title="" width="30" height="28" />
                                      </div>             
                                      <a className="ps-2 fw-300 fs-24 text-white" href="mailto:support@blentops.com" title="support@blentops.com">support@blentops.com</a>
                                    </div>            
                                  </p>
                                  
                                  <div className="d-flex align-items-baseline">    
                                    <div className="me-1">
                                      <img src="https://blentops-web.inddev.in/wp-content/images/map_pin.svg" alt="Address" title="" width="30" height="28" className="pe-1" />
                                    </div>             
                                    <span className="fn-face2 ps-2 fw-300 fs-24 text-white mb-2">Blentops Headquarter, Balawala, Dehradun (248001)</span>
                                  </div> 
                                </div>
                              
                                <div className="careers">
                                  <h3>Careers</h3>
                                  <p className="fw-300 fs-24">
                                    Looking to collaborate or explore career opportunities? Blentops is always on the lookout for visionaries, creators, and innovators. Drop us a message, and let's connect.
                                  </p>
                                  <p><strong>careers@blentops.com</strong></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;