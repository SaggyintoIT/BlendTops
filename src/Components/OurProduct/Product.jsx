import React from 'react';

const OurProducts = () => {
  const toggleMenu = () => {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  };

  const handleTabClick = (e) => {
    const selectedTab = e.target.getAttribute('data-tab');
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.card');

    // Update tab UI
    tabs.forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');

    // Show/Hide cards
    cards.forEach(card => {
      card.classList.toggle('hidden', card.getAttribute('data-category') !== selectedTab);
    });
  };

  const fcnx1 = () => {
    sessionStorage.setItem('hidepopup', true);
    document.getElementById("cookies-banner").classList.toggle("hide");
  };

  React.useEffect(() => {
    const lazyloadRunObserver = () => {
      const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
      const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let lazyloadBackground = entry.target;
            if (lazyloadBackground) {
              lazyloadBackground.classList.add('e-lazyloaded');
            }
            lazyloadBackgroundObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '200px 0px 200px 0px' });
      lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
      });
    };

    const events = [
      'DOMContentLoaded',
      'elementor/lazyload/observe',
    ];
    events.forEach((event) => {
      document.addEventListener(event, lazyloadRunObserver);
    });

    // Cookies banner
    if (sessionStorage.getItem('hidepopup') == null) {
      document.getElementById("cookies-banner").classList.toggle("hide");
    }

    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', handleTabClick);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, lazyloadRunObserver);
      });
      tabs.forEach(tab => {
        tab.removeEventListener('click', handleTabClick);
      });
    };
  }, []);

  return (
    <div className="home wp-singular page-template-default page page-id-63 wp-custom-logo wp-embed-responsive wp-theme-pixelpiernyc wp-child-theme full header-layout-logo-menu has-page-header no-middle-header responsive-layout mancss-is-elementor elementor-active elementor-pro-active mancss-wc-cart-empty wc-product-gallery-slider-active mancss-font-smoothing layout-full elementor-default elementor-kit-4 elementor-page elementor-page-63">
      <div id="top"></div>
      
      <div className="grain-overlay"></div>
      <div data-elementor-type="header" data-elementor-id="349" className="elementor elementor-349 elementor-location-header" data-elementor-post-type="elementor_library">
        <nav className="headerborderb elementor-element elementor-element-3fffa23 mix-blend e-flex e-con-boxed e-con e-parent" data-id="3fffa23" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-5a443df elementor-widget elementor-widget-image" data-id="5a443df" data-element_type="widget" id="site-logo" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <a href="index.html">
                  <img width="350" height="94" src="https://blentops-web.inddev.in/wp-content/images/footerlogo.svg" className="attachment-full size-full wp-image-987665" alt="" />								
                </a>
              </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
      </div>
      
      <div id="page" className="main-container">
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
                    <div className="elementor-widget-container text-center pt-100">
                      <h1 className="innerpages">Our Products</h1>	
                      <h2 className="innersubheading">
                        Discover Blentops' Innovative Digital Products
                      </h2>		
                    </div>
                    
                    <div className="tabs">
                      <div className="tab active" data-tab="fintech" onClick={handleTabClick}>Fintech</div>
                      <div className="tab" data-tab="gaming" onClick={handleTabClick}>Gaming</div>
                      <div className="tab" data-tab="sports" onClick={handleTabClick}>Sports Tech</div>
                    </div>

                    <div className="ph-px-30 ph-pb-30 elementor-element elementor-element-da241a8 e-flex e-con-boxed e-con e-parent border-0 mob_px" data-id="da241a8" data-element_type="container">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-0c41119 e-con-full section e-flex e-con e-child mob-pb pt-30" data-id="0c41119" data-element_type="container">
                          <div className="mancss-has-theme-widget-styles elementor-element elementor-element-cdeb895 mancss-has-text-reveal-anim elementor-widget elementor-widget-heading" data-id="cdeb895" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              {/* Cards */}
                              <div className="cards-container">
                                {/* Fintech Card */}
                                <div className="card" data-category="fintech">
                                  <img src="https://blentops-web.inddev.in/wp-content/images/ZeroGateway.jpg" alt="ZeroGateway" />
                                  <div className="card-content">
                                    <h3>ZeroGateway</h3>
                                    <p>ZeroGateway transforms the payment landscape with its innovative QR-based UPI system. Built for scalability and security, it enables seamless transactions while providing real-time analytics and fraud protection.</p>
                                    <div className="features-title">Key Features</div>
                                    <div className="tags">
                                      <div className="tag">Instant QR Payments</div>
                                      <div className="tag">Real-time Analytics</div>
                                      <div className="tag">Fraud Detection</div>
                                      <div className="tag">Multi-bank Support</div>
                                    </div>
                                    <div className="bor-top my-30"></div>
                                    <div className="categories">
                                      <div className="category">UPI</div>
                                      <div className="category">PAYMENTS</div>
                                      <div className="category">QR CODE</div>
                                      <div className="category">MOBILE</div>
                                    </div>
                                  </div>
                                  <div className="my-30">
                                    <a href="#" className="mainbutton light w-inline-block bt_2">
                                      <div className="mainbutton-txt">Know More</div>
                                      <div className="w-layout-vflex button-iconwrapper">
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                
                                <div className="card" data-category="fintech">
                                  <img src="https://blentops-web.inddev.in/wp-content/images/Consider11.jpg" alt="Consider11" />
                                  <div className="card-content">
                                    <h3>Consider11</h3>
                                    <p>Consider11 revolutionizes fantasy sports by introducing opinion trading elements. Users can create teams, trade opinions, and compete in various sports leagues with enhanced engagement features.</p>
                                    <div className="features-title">Key Features</div>
                                    <div className="tags">
                                      <div className="tag">Fantasy Leagues</div>
                                      <div className="tag">Opinion Trading</div>
                                      <div className="tag">Live Scoring</div>
                                      <div className="tag">Social Features</div>
                                    </div>
                                    <div className="bor-top my-30"></div>
                                    <div className="categories">
                                      <div className="category">CRICKET</div>
                                      <div className="category">FANTASY</div>
                                      <div className="category">SPORTS</div>
                                      <div className="category">TRADING</div>
                                    </div>
                                  </div>
                                  <div className="my-30">
                                    <a href="#" className="mainbutton light w-inline-block bt_2">
                                      <div className="mainbutton-txt">Know More</div>
                                      <div className="w-layout-vflex button-iconwrapper">
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                
                                <div className="card" data-category="fintech">
                                  <img src="https://blentops-web.inddev.in/wp-content/images/CricBlaze.jpg" alt="CricBlaze" />
                                  <div className="card-content">
                                    <h3>CricBlaze</h3>
                                    <p>CricBlaze is the ultimate destination for cricket enthusiasts, offering comprehensive coverage of matches, player statistics, team analytics, and live commentary.</p>
                                    <div className="features-title">Key Features</div>
                                    <div className="tags">
                                      <div className="tag">Live Scores</div>
                                      <div className="tag">Player Stats</div>
                                      <div className="tag">Match Commentary</div>
                                      <div className="tag">Tournament Coverage</div>
                                    </div>
                                    <div className="bor-top my-30"></div>
                                    <div className="categories">
                                      <div className="category">CRICKET</div>
                                      <div className="category">LIVE SCORES</div>
                                      <div className="category">STATISTICS</div>
                                      <div className="category">MOBILE APP</div>
                                    </div>
                                  </div>
                                  <div className="my-30">
                                    <a href="#" className="mainbutton light w-inline-block bt_2">
                                      <div className="mainbutton-txt">Know More</div>
                                      <div className="w-layout-vflex button-iconwrapper">
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
                                      </div>
                                    </a>
                                  </div>
                                </div>

                                {/* Gaming Card */}
                                <div className="card hidden" data-category="gaming">
                                  <img src="https://blentops-web.inddev.in/wp-content/images/Consider11.jpg" alt="Consider11" />
                                  <div className="card-content">
                                    <h3>Consider11</h3>
                                    <p>Consider11 revolutionizes fantasy sports by introducing opinion trading elements. Users can create teams, trade opinions, and compete in various sports leagues with enhanced engagement features.</p>
                                    <div className="features-title">Key Features</div>
                                    <div className="tags">
                                      <div className="tag">Fantasy Leagues</div>
                                      <div className="tag">Opinion Trading</div>
                                      <div className="tag">Live Scoring</div>
                                      <div className="tag">Social Features</div>
                                    </div>
                                    <div className="bor-top my-30"></div>
                                    <div className="categories">
                                      <div className="category">CRICKET</div>
                                      <div className="category">FANTASY</div>
                                      <div className="category">SPORTS</div>
                                      <div className="category">TRADING</div>
                                    </div>
                                  </div>
                                  <div className="my-30">
                                    <a href="#" className="mainbutton light w-inline-block bt_2">
                                      <div className="mainbutton-txt">Know More</div>
                                      <div className="w-layout-vflex button-iconwrapper">
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
                                        <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
                                      </div>
                                    </a>
                                  </div>
                                </div>

                                {/* Sports Tech Card */}
                                <div className="card hidden" data-category="sports">
                                  <img src="https://blentops-web.inddev.in/wp-content/images/Consider11.jpg" alt="Consider11" />
                                  <div className="card-content">
                                    <h3>Consider11</h3>
                                    <p>Consider11 revolutionizes fantasy sports by introducing opinion trading elements. Users can create teams, trade opinions, and compete in various sports leagues with enhanced engagement features.</p>
                                    <div className="features-title">Key Features</div>
                                    <div className="tags">
                                      <div className="tag">Fantasy Leagues</div>
                                      <div className="tag">Opinion Trading</div>
                                      <div className="tag">Live Scoring</div>
                                      <div className="tag">Social Features</div>
                                    </div>
                                    <div className="bor-top my-30"></div>
                                    <div className="categories">
                                      <div className="category">CRICKET</div>
                                      <div className="category">FANTASY</div>
                                      <div className="category">SPORTS</div>
                                      <div className="category">TRADING</div>
                                    </div>
                                  </div>
                                  <div className="my-30">
                                    <a href="#" className="mainbutton light w-inline-block bt_2">
                                      <div className="mainbutton-txt">Know More</div>
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

                    <div className="elementor-element elementor-element-ef55f55 e-con-full e-flex e-con e-parent" data-id="ef55f55" data-element_type="container">
                      <div className="elementor-element elementor-element-94e80fa elementor-widget elementor-widget-template" data-id="94e80fa" data-element_type="widget" data-widget_type="template.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-template">
                            <div data-elementor-type="container" data-elementor-id="988476" className="elementor elementor-988476" data-elementor-post-type="elementor_library">
                              <div className="elementor-element elementor-element-5ef7a181 section e-flex e-con-boxed e-con e-parent" data-id="5ef7a181" data-element_type="container">
                                <div className="e-con-inner ph-pb-0 ph-pt-0">
                                  <div className="elementor-element elementor-element-d502080 e-con-full e-flex e-con e-child" data-id="d502080" data-element_type="container">
                                    <div className="mancss-has-theme-widget-styles elementor-element elementor-element-369a338a elementor-widget elementor-widget-heading" data-id="369a338a" data-element_type="widget" data-widget_type="heading.default">
                                    </div>
                                    <div className="mancss-has-theme-widget-styles elementor-element elementor-element-27fd2448 elementor-invisible elementor-widget elementor-widget-heading" data-id="27fd2448" data-element_type="widget" data-widget_type="heading.default">
                                      <div className="elementor-widget-container ph-px">
                                        <div className="elementor-widget-container">
                                          <span className="fs16-light">The ME Experience</span>
                                        </div>
                                        <h2 className="fs-36 mt-2">Why Choose Us?</h2>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="elementor-element elementor-element-65f44ddc e-con-full e-flex e-con e-child" data-id="65f44ddc" data-element_type="container">
                                    <div className="elementor-element elementor-element-65e9e58 e-con-full e-flex e-con e-child" data-id="65e9e58" data-element_type="container">
                                      <div className="elementor-element elementor-element-7079c8f0 elementor-widget elementor-widget-spacer" data-id="7079c8f0" data-element_type="widget" data-widget_type="spacer.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-spacer">
                                            <div className="elementor-spacer-inner">
                                              <img src="https://blentops-web.inddev.in/wp-content/images/icon_1.svg" alt="Icon 1" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mancss-has-theme-widget-styles elementor-element elementor-element-3e1476a6 elementor-widget elementor-widget-heading" data-id="3e1476a6" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h3 className="elementor-heading-title elementor-size-default">Strategy-Driven Innovation</h3>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-56421946 elementor-widget elementor-widget-text-editor" data-id="56421946" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container fs-18">
                                          <p>Success isn't accidental—it's engineered. We merge data, insights, and creativity to craft marketing strategies that don't just perform, but dominate. Every campaign, design, and digital experience we create is backed by research and built for impact.</p>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="elementor-element elementor-element-5f18ed48 e-con-full e-flex e-con e-child" data-id="5f18ed48" data-element_type="container">
                                      <div className="elementor-element elementor-element-7079c8f0 elementor-widget elementor-widget-spacer" data-id="7079c8f0" data-element_type="widget" data-widget_type="spacer.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-spacer">
                                            <div className="elementor-spacer-inner">
                                              <img src="https://blentops-web.inddev.in/wp-content/images/icon_2.svg" alt="Icon 2" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mancss-has-theme-widget-styles elementor-element elementor-element-2befea4b elementor-widget elementor-widget-heading" data-id="2befea4b" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h3 className="elementor-heading-title elementor-size-default">Creative Disruption</h3>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-1a8aac54 elementor-widget elementor-widget-text-editor" data-id="1a8aac54" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container fs-18">
                                          <p>Ordinary isn't in our vocabulary. We break norms, push boundaries, and redefine what's possible in branding and digital marketing. Whether it's a visually stunning website, an unforgettable brand identity, or a campaign that sparks conversations, Test Demo ensures your brand stands out—not blends in.</p>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="elementor-element elementor-element-31d934c3 e-con-full e-flex e-con e-child" data-id="31d934c3" data-element_type="container">
                                      <div className="elementor-element elementor-element-7079c8f0 elementor-widget elementor-widget-spacer" data-id="7079c8f0" data-element_type="widget" data-widget_type="spacer.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-spacer">
                                            <div className="elementor-spacer-inner">
                                              <img src="https://blentops-web.inddev.in/wp-content/images/icon_3.svg" alt="Icon 3" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mancss-has-theme-widget-styles elementor-element elementor-element-3ce877eb elementor-widget elementor-widget-heading" data-id="3ce877eb" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h3 className="elementor-heading-title elementor-size-default">Seamless Execution</h3>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-76d0ac26 elementor-widget elementor-widget-text-editor" data-id="76d0ac26" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container fs-18">
                                          <p>Great ideas mean nothing without flawless execution. From concept to completion, we deliver with precision, efficiency, and attention to detail. Our team works as an extension of yours, ensuring a frictionless process that brings your vision to life, exactly how you imagined—only better.</p>
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
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        
     

       
      </div>

      <div className="nav-menu" id="navMenu">
        <a href="index.html">Home</a>
        <a className="active" href="our-products.html">Products</a>
        <a href="about.html">About Us</a>
        <a href="investors-and-media.html">Investors & Media</a>
        <a href="blog.html">Blog</a>
        <a href="collaborate.html">Collaborate</a>
        
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
              <li><a href="contact-us.html">Contact</a></li>
              <li><a href="careers.html">Careers</a></li>
            </ul>
          </div>

          <div className="display-hidemobile linkbtn">
            <a href="#" className="mainbutton read w-inline-block" style={{ float: 'right' }}>
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
  );
};

export default OurProducts;