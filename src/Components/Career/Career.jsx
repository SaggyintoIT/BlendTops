import React from 'react';

const CareersPage = () => {
  const benefits = [
    {
      icon: 'https://blentops-web.inddev.in/wp-content/images/benefits_1.png',
      title: 'Excellent Culture & Environment'
    },
    {
      icon: 'https://blentops-web.inddev.in/wp-content/images/benefits_2.png',
      title: 'Relax & Sports zone'
    },
    {
      icon: 'https://blentops-web.inddev.in/wp-content/images/benefits_3.png',
      title: 'Performance Bonus'
    },
    {
      icon: 'https://blentops-web.inddev.in/wp-content/images/benefits_4.png',
      title: 'Personal development stipend'
    },
    {
      icon: 'https://blentops-web.inddev.in/wp-content/images/benefits_5.png',
      title: 'Meals, Coffee & Snacks'
    },
    {
      icon: 'https://blentops-web.inddev.in/wp-content/images/benefits_6.png',
      title: 'Competitive salaries'
    },
    {
      icon: 'https://blentops-web.inddev.in/wp-content/images/benefits_7.png',
      title: 'Flexible "work from anywhere" policy'
    },
    {
      icon: 'https://blentops-web.inddev.in/wp-content/images/benefits_8.png',
      title: 'Health, dental, and vision insurance'
    }
  ];

  const jobListings = [
    {
      id: 1,
      department: 'Sales',
      title: 'International Sales Executive',
      type: 'Onsite · Full Time',
      link: 'careers-details.html'
    },
    {
      id: 2,
      department: 'Marketing',
      title: 'Web Copywriter & Content Strategist',
      type: 'Onsite · Full Time',
      link: 'careers-details.html'
    },
    {
      id: 3,
      department: 'Sales',
      title: 'Business Analyst',
      type: 'Onsite · Full Time',
      link: 'careers-details.html'
    },
    {
      id: 4,
      department: 'Sales',
      title: 'Assistant Manager / Manager - Sales Partnership',
      type: 'Onsite · Full Time',
      link: 'careers-details.html'
    },
    {
      id: 5,
      department: 'Design',
      title: 'Senior / Mid-Senior UI/UX Designer',
      type: 'Onsite · Full Time',
      link: 'careers-details.html'
    },
    {
      id: 6,
      department: 'Development',
      title: 'Senior Angular Developer',
      type: 'Onsite · Full Time',
      link: 'careers-details.html'
    },
    {
      id: 7,
      department: 'Sales',
      title: 'International Sales Executive Intern',
      type: 'Onsite · Full Time',
      link: 'careers-details.html'
    }
  ];

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
                <div data-elementor-type="wp-page" data-elementor-id="1467" className="elementor elementor-63 elementor-1051" data-elementor-post-type="page">
                  
                  {/* Banner Section */}
                  <div className="elementor-widget-container text-center pt-100 bannerbg">								
                    <h2 className="innersubheading headerborderb pb-5">
                      Work and life at PixelPier
                    </h2>			
                    <span className="bottomfixedtext">Grow With blentops</span>
                  </div>
                  
                  {/* Benefits Section */}
                  <div className="elementor-element elementor-element-3733cd5 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="3733cd5" data-element_type="container">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-79c5eb7 e-con-full e-flex e-con e-child pt-5" data-id="79c5eb7" data-element_type="container">
                        <div className="elementor-element elementor-element-ae810a0 e-con-full e-flex e-con e-child" data-id="ae810a0" data-element_type="container">
                          <div className="mancss-has-theme-widget-styles elementor-element elementor-element-1dea1ca elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-heading" data-id="1dea1ca" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container2">
                              <span className="fs16-light">Benefits</span>														
                            </div>	
                            <div className="elementor-widget-container">
                              <h2 className="fs-24 mt-2">We are always in search of great humans looking to grow</h2>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-253efd2 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor" data-id="253efd2" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>PixelPier takes pride in providing a competitive benefits and compensation package. However, we understand that a fulfilling job is more than just the numbers. Our goal is to cultivate an environment that our team members genuinely anticipate being a part of every single day.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Benefits Grid */}
                      <div className="elementor-element elementor-element-20cbf53 e-flex e-con-boxed e-con e-child pb-5" data-id="20cbf53" data-element_type="container">
                        <div className="e-con-inner">
                          <div className="benefits-container">
                            <div className="benefits-grid">
                              {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                  <div className="benefit-icon">
                                    <img src={benefit.icon} alt={benefit.title} />
                                  </div>
                                  <h3 className="benefit-title" dangerouslySetInnerHTML={{ __html: benefit.title }} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
            
                      {/* Current Openings Section */}
                      <div className="elementor-element elementor-element-ae810a0 e-con-full e-flex e-con e-child pt-5 bor-top bor-bot pb-5" data-id="ae810a0" data-element_type="container">
                        <div className="mancss-has-theme-widget-styles elementor-element elementor-element-1dea1ca elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-heading" data-id="1dea1ca" data-element_type="widget" data-widget_type="heading.default">
                          <div className="elementor-widget-container2">
                            <span className="fs-30 mt-2">Current Openings</span>														
                          </div>								
                        </div>
                        <div className="elementor-element elementor-element-253efd2 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor" data-id="253efd2" data-element_type="widget" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p className="mt-0">
                              Become a part of our team and help shape the future of technology. We're seeking passionate, creative, and committed individuals for the following positions.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Careers at Blentops Section */}
                      <div className="elementor-element elementor-element-ae810a0 e-con-full e-flex e-con e-child pt-5" data-id="ae810a0" data-element_type="container">
                        <div className="mancss-has-theme-widget-styles elementor-element elementor-element-1dea1ca elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-heading" data-id="1dea1ca" data-element_type="widget" data-widget_type="heading.default">
                          <div className="elementor-widget-container2 ph-pb-30">
                            <span className="fs-30">Careers at Blentops Pvt Ltd.</span>														
                          </div>								
                        </div>
                        <div className="elementor-element elementor-element-253efd2 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor" data-id="253efd2" data-element_type="widget" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="filters">
                              <div className="filter-group floating search-group">
                                <label htmlFor="search">Search</label>
                                <input className="" type="text" id="search" placeholder="Search..." required />										
                                <span className="search-icon"><img src="https://blentops-web.inddev.in/wp-content/images/search.svg" alt="Search" /> </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Filters Section */}
                      <div className="pb-5 mancss-has-theme-widget-styles elementor-element elementor-element-7dccd6f elementor-widget elementor-widget-heading" data-id="7dccd6f" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container22">
                          <div className="filters">
                            <div className="filter-group">		
                              <label htmlFor="Department">Department</label>						 
                              <select id="department" name="department">
                                <option value="design">Design</option>
                                <option value="tech">Technology</option>
                                <option value="marketing">Marketing</option>
                              </select>
                              <span className="select-arrow"><img src="https://blentops-web.inddev.in/wp-content/images/dropdowanarrow.svg" alt="Dropdown" /></span>
                            </div>
                          
                            <div className="filter-group">
                              <label htmlFor="Location">Location</label>		
                              <select id="location" name="location">									
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="bangalore">Bangalore</option>
                              </select>
                              <span className="select-arrow"><img src="https://blentops-web.inddev.in/wp-content/images/dropdowanarrow.svg" alt="Dropdown" /></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Job Listings */}
                      <div className="mt-5 elementor-element elementor-element-8d91e7f elementor-grid-1 elementor-grid-tablet-1 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid e-load-more-no-spinner" data-id="8d91e7f" data-element_type="widget" data-settings='{"template_id":"8701","columns":1,"row_gap":{"unit":"px","size":0,"sizes":[]},"columns_tablet":1,"pagination_type":"load_more_on_click","load_more_spinner":{"value":"","library":""},"_skin":"post","columns_mobile":"1","edit_handle_selector":"[data-elementor-type=\"loop-item\"]","row_gap_tablet":{"unit":"px","size":"","sizes":[]},"row_gap_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="loop-grid.post">
                        <div className="elementor-widget-container">
                          <div className="elementor-loop-container elementor-grid">
                            <style id="loop-8701">
                              {`.elementor-8701 .elementor-element.elementor-element-29cd0d0{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--align-items:center;border-style:solid;--border-style:solid;border-width:0px 0px 1px 0px;--border-top-width:0px;--border-right-width:0px;--border-bottom-width:1px;--border-left-width:0px;border-color:var( --e-global-color-mancss_accent_8 );--border-color:var( --e-global-color-mancss_accent_8 );--margin-top:0px;--margin-bottom:0px;--margin-left:0px;--margin-right:0px;--padding-top:20px;--padding-bottom:20px;--padding-left:15px;--padding-right:15px;}.elementor-8701 .elementor-element.elementor-element-7af5fa4{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-8701 .elementor-element.elementor-element-7af5fa4 > .elementor-widget-container{margin:0% 10% 0% 0%;}.elementor-8701 .elementor-element.elementor-element-7af5fa4 .elementor-heading-title{font-family:var( --e-global-typography-mancss_h4-font-family ), Sans-serif;font-size:var( --e-global-typography-mancss_h4-font-size );font-weight:var( --e-global-typography-mancss_h4-font-weight );text-transform:var( --e-global-typography-mancss_h4-text-transform );line-height:var( --e-global-typography-mancss_h4-line-height );color:var( --e-global-color-mancss_accent_2 );}.elementor-8701 .elementor-element.elementor-element-31d97c4{width:var( --container-widget-width, 48% );max-width:48%;--container-widget-width:48%;--container-widget-flex-grow:0;}.elementor-8701 .elementor-element.elementor-element-31d97c4 > .elementor-widget-container{margin:0% 10% 0% 0%;}.elementor-8701 .elementor-element.elementor-element-31d97c4 .elementor-heading-title{font-family:var( --e-global-typography-mancss_primary_font-font-family ), Sans-serif;font-size:var( --e-global-typography-mancss_primary_font-font-size );font-weight:var( --e-global-typography-mancss_primary_font-font-weight );line-height:var( --e-global-typography-mancss_primary_font-line-height );color:var( --e-global-color-mancss_accent_2 );}.elementor-8701 .elementor-element.elementor-element-b5eee9d{width:var( --container-widget-width, 2% );max-width:2%;--container-widget-width:2%;--container-widget-flex-grow:0;}.elementor-8701 .elementor-element.elementor-element-b5eee9d > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-8701 .elementor-element.elementor-element-b5eee9d .elementor-icon-wrapper{text-align:right;}.elementor-8701 .elementor-element.elementor-element-b5eee9d.elementor-view-stacked .elementor-icon{background-color:var( --e-global-color-mancss_accent_2 );}.elementor-8701 .elementor-element.elementor-element-b5eee9d.elementor-view-framed .elementor-icon, .elementor-8701 .elementor-element.elementor-element-b5eee9d.elementor-view-default .elementor-icon{color:var( --e-global-color-mancss_accent_2 );border-color:var( --e-global-color-mancss_accent_2 );}.elementor-8701 .elementor-element.elementor-element-b5eee9d.elementor-view-framed .elementor-icon, .elementor-8701 .elementor-element.elementor-element-b5eee9d.elementor-view-default .elementor-icon svg{fill:var( --e-global-color-mancss_accent_2 );}.elementor-8701 .elementor-element.elementor-element-b5eee9d .elementor-icon{font-size:20px;}.elementor-8701 .elementor-element.elementor-element-b5eee9d .elementor-icon svg{height:20px;}@media(max-width:1024px){.elementor-8701 .elementor-element.elementor-element-29cd0d0{--padding-top:20px;--padding-bottom:20px;--padding-left:0px;--padding-right:0px;}.elementor-8701 .elementor-element.elementor-element-7af5fa4 > .elementor-widget-container{margin:0vw 0vw 0vw 0vw;}.elementor-8701 .elementor-element.elementor-element-7af5fa4 .elementor-heading-title{font-size:var( --e-global-typography-mancss_h4-font-size );line-height:var( --e-global-typography-mancss_h4-line-height );}.elementor-8701 .elementor-element.elementor-element-31d97c4 > .elementor-widget-container{margin:0vw 0vw 0vw 0vw;}.elementor-8701 .elementor-element.elementor-element-31d97c4{--container-widget-width:35%;--container-widget-flex-grow:0;width:var( --container-widget-width, 35% );max-width:35%;}.elementor-8701 .elementor-element.elementor-element-31d97c4 .elementor-heading-title{font-size:var( --e-global-typography-mancss_primary_font-font-size );line-height:var( --e-global-typography-mancss_primary_font-line-height );}}@media(max-width:767px){.elementor-8701 .elementor-element.elementor-element-29cd0d0{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--align-items:flex-start;--gap:15px 15px;--row-gap:15px;--column-gap:15px;--padding-top:20px;--padding-bottom:20px;--padding-left:0px;--padding-right:0px;}.elementor-8701 .elementor-element.elementor-element-7af5fa4{width:100%;max-width:100%;}.elementor-8701 .elementor-element.elementor-element-7af5fa4 .elementor-heading-title{font-size:var( --e-global-typography-mancss_h4-font-size );line-height:var( --e-global-typography-mancss_h4-line-height );}.elementor-8701 .elementor-element.elementor-element-31d97c4{width:100%;max-width:100%;}.elementor-8701 .elementor-element.elementor-element-31d97c4 > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-8701 .elementor-element.elementor-element-31d97c4 .elementor-heading-title{font-size:var( --e-global-typography-mancss_primary_font-font-size );line-height:var( --e-global-typography-mancss_primary_font-line-height );}.elementor-8701 .elementor-element.elementor-element-b5eee9d > .elementor-widget-container{margin:5px 0px 0px 0px;}}/* Start custom CSS for container, class: .elementor-element-29cd0d0 */.elementor-8701 .elementor-element.elementor-element-29cd0d0 #icon{transition:all 0.5s !important;}.elementor-8701 .elementor-element.elementor-element-29cd0d0:hover #icon{transform: rotate(360deg) !important;}.elementor-8701 .elementor-element.elementor-element-29cd0d0 {overflow: hidden;position: relative;}.elementor-8701 .elementor-element.elementor-element-29cd0d0::before {content: '';position: absolute;height: 100%;width: 100%;left: 0;bottom: 0;background-color: var(--e-global-color-mancss_accent_1);transform-origin: 100% 50%;transform: scaleX(0);transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);}#colbg:hover span{color: #fff !important;}#colbg:hover .elementor-heading-title{color: #fff !important;}.elementor-8701 .elementor-element.elementor-element-29cd0d0:hover::before {transform-origin: 0% 50%;transform: scaleX(1);}/* End custom CSS */`}
                            </style>
                            
                            {/* Job Listings */}
                            {jobListings.map((job) => (
                              <div key={job.id} data-elementor-type="loop-item" data-elementor-id="8701" className="elementor elementor-8701 e-loop-item e-loop-item-8691 post-8691 post type-post status-publish format-standard hentry category-job-openings" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                                <div className="elementor-element elementor-element-29cd0d0 e-flex e-con-boxed e-con e-child" data-id="29cd0d0" data-element_type="container" id="colbg">
                                  <div className="e-con-inner">
                                    <div className="mancss-has-theme-widget-styles elementor-element elementor-element-7af5fa4 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="7af5fa4" data-element_type="widget" id="title" data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <span className="fs16-light graycolor">{job.department}</span> 
                                        <div className="elementor-heading-title fs-24">{job.title}</div>
                                      </div>
                                    </div>
                                    <div className="mancss-has-theme-widget-styles elementor-element elementor-element-31d97c4 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="31d97c4" data-element_type="widget" id="title" data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <span className="fs-18 graycolor">{job.type}</span> 
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-b5eee9d elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon" data-id="b5eee9d" data-element_type="widget" id="icon" data-widget_type="icon.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                          <a className="elementor-icon" href={job.link}>
                                            <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top"></i>		
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            
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

export default CareersPage;