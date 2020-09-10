import React, { useState } from 'react';
import Login from './Login'



 function Header() {
    

    return (
<div>
 
 {/*<!-- #header start -->*/}
 <header id="header"
 className="main-header header-sticky header-sticky-smart header-style-01 header-float text-uppercase">
<div className="header-wrapper sticky-area">
 <div className="container container-1720">
     <nav className="navbar navbar-expand-xl">
         <div className="header-mobile d-flex d-xl-none flex-fill justify-content-between align-items-center">
             <div className="navbar-toggler toggle-icon" data-toggle="collapse"
                  data-target="#navbar-main-menu">
                 <span></span>
             </div>
             <a className="navbar-brand navbar-brand-mobile" href="index.html">
                 <img src="images/logo.png" alt="TheDir"/>
             </a>
             <a className="mobile-button-search" href="#search-popup"
                data-gtf-mfp="true"
                data-mfp-options='{"type":"inline","mainclassName":"mfp-move-from-top mfp-align-top search-popup-bg","closeOnBgClick":false,"showCloseBtn":false}'><i
                     className="far fa-search"></i></a>
         </div>
         <div className="collapse navbar-collapse" id="navbar-main-menu">
             <a className="navbar-brand d-none d-xl-block mr-auto" href="index.html">
                 <img src="images/logo.png" alt="TheDir"/>
             </a>

             <ul className="navbar-nav">
                 <li className="nav-item">
                     <a className="nav-link" href="#">Demos <span className="caret"><i
                             className="fas fa-angle-down"></i></span></a>
                     <ul className="sub-menu x-animated x-fadeInUp">
                         <li className="nav-item"><a className="nav-link" href="index.html">main</a>
                         </li>
                         <li className="nav-item"><a className="nav-link"
                                                 href="demo/automotive-service/home-automotive-services.html">
                             automotive service</a></li>
                         <li className="nav-item"><a className="nav-link"
                                                 href="demo/food-and-restaurant/home-food-and-restaurant.html">
                             food and restaurant</a></li>
                         <li className="nav-item"><a className="nav-link"
                                                 href="demo/health-and-medical/home-health-and-medical.html">
                             health and medical</a></li>
                         <li className="nav-item"><a className="nav-link" href="demo/hotel/home-hotels.html">hotel</a>
                         </li>
                         <li className="nav-item"><a className="nav-link" href="demo/job/home-jobs.html">jobs</a>
                         </li>
                         <li className="nav-item"><a className="nav-link"
                                                 href="demo/service-finder/home-services-finder.html">
                             service finder</a></li>
                         <li className="nav-item"><a className="nav-link"
                                                 href="demo/shopping/home-shopping.html">
                             shopping</a></li>
                     </ul>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Element<span className="caret"><i
                             className="fas fa-angle-down"></i></span></a>
                     <div className="sub-menu x-menu-mega x-animated x-fadeInUp width-800">
                         <div className="container">
                             <div className="row w-100">
                                 <div className="col-lg-4">
                                     <h5>Group 01</h5>
                                     <ul className="mega-menu-col">
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/button.html">Buttons</a>
                                         </li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/social-icons.html">Socical
                                             icon</a></li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/client-logo.html">Client
                                             logo</a></li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/counter.html">Counter</a>
                                         </li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/cta.html">CTA</a>
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="col-lg-4">
                                     <h5>Group 02</h5>
                                     <ul className="mega-menu-col">
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/heading.html">Heading</a>
                                         </li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/icon-box.html">Icon
                                             box</a></li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/image-box.html">Image
                                             box</a></li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/listing.html">Listing</a>
                                         </li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/post.html">Post</a>
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="col-lg-4">
                                     <h5>Group 03</h5>
                                     <ul className="mega-menu-col">
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/store.html">Store</a>
                                         </li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/tab.html">Tab</a>
                                         </li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/table-listing.html">Table
                                             listing</a></li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/testimonial.html">Testimonial</a>
                                         </li>
                                         <li className="nav-item"><a className="nav-link"
                                                                 href="elements/widget.html">Widget</a>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Pages
                         <span className="caret"><i
                                 className="fas fa-angle-down"></i></span>
                     </a>
                     <ul className="sub-menu x-animated x-fadeInUp">
                         <li className="nav-item">
                             <a className="nav-link" href="#">Shop <span className="caret"><i
                                     className="fas fa-angle-down"></i></span></a>
                             <ul className="sub-menu x-animated x-fadeInUp">
                                 <li className="nav-item"><a className="nav-link" href="shop-listing.html">Shop
                                     listing</a></li>
                                 <li className="nav-item"><a className="nav-link" href="shop-checkout.html">Shop
                                     checkout</a></li>
                                 <li className="nav-item"><a className="nav-link" href="shop-my-account.html">Shop
                                     my account</a></li>
                                 <li className="nav-item"><a className="nav-link" href="shop-shopping-cart.html">Shop
                                     shopping cart</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="shop-single-product.html">Shop single
                                     product</a></li>
                             </ul>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Panel <span className="caret"><i
                                     className="fas fa-angle-down"></i></span></a>
                             <ul className="sub-menu x-animated x-fadeInUp">
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-dashboard.html">
                                     dashboard</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-ad-campaigns-active.html">
                                     ad campaigns active</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-ad-campaigns-start-new.html">
                                     ad campaign start new</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-invoice-details.html">
                                     invoice details</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-invoice-listing.html">
                                     invoice listing</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-my-favourite.html"> my
                                     favourite</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-my-listing.html"> my
                                     listing</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-my-profile.html"> my
                                     profile</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-package.html">
                                     package</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-review-received.html">
                                     review received</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="panel-review-submitted.html">
                                     review submitted</a></li>
                             </ul>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Other pages <span className="caret"><i
                                     className="fas fa-angle-down"></i></span></a>
                             <div className="sub-menu x-menu-mega x-animated x-fadeInUp">
                                 <div className="container">
                                     <div className="row w-100">
                                         <div className="col-lg-6">
                                             <ul className="mega-menu-col">
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-404.html">
                                                     404</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-about.html">
                                                     about</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-coming-soon.html">
                                                     comming soon</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-contact.html">
                                                     contact</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-faqs.html">
                                                     faqs</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-how-it-work.html">
                                                     how it work</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-pricing-plan.html">
                                                     pricing plan</a></li>
                                             </ul>
                                         </div>
                                         <div className="col-lg-6">
                                             <ul className="mega-menu-col">
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-privacy-policy.html">
                                                     privacy
                                                     policy</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-submit-listing.html">submit
                                                     listing</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-terms-and-condition.html">Term
                                                     and condition</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-typography.html">
                                                     typography</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-common-elements.html">
                                                     Common elements</a></li>
                                                 <li className="nav-item"><a className="nav-link"
                                                                         href="page-under-construction.html">
                                                     under
                                                     construction</a></li>
                                             </ul>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </li>

                     </ul>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Explore<span className="caret"><i
                             className="fas fa-angle-down"></i></span></a>
                     <ul className="sub-menu x-animated x-fadeInUp">
                         <li className="nav-item">
                             <a className="nav-link" href="#"> layout
                                 <span className="caret"><i className="fas fa-angle-down"></i></span>
                             </a>
                             <ul className="sub-menu x-animated x-fadeInUp">
                                 <li className="nav-item"><a className="nav-link"
                                                         href="explore-full-map-grid.html"> full
                                     map grid</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="explore-full-map-list.html"> full
                                     map list</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="explore-half-map-grid.html"> half
                                     map grid</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="explore-half-map-list.html"> half
                                     map list</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="explore-sidebar-grid.html"> sidebar
                                     grid</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="explore-sidebar-list.html"> sidebar
                                     list</a></li>
                             </ul>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Listing details
                                 <span className="caret"><i className="fas fa-angle-down"></i></span>
                             </a>
                             <ul className="sub-menu x-animated x-fadeInUp">
                                 <li className="nav-item"><a className="nav-link"
                                                         href="listing-details-full-gallery.html">
                                     full gallery</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="listing-details-full-image.html">
                                     full image</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="listing-details-full-map.html">
                                     full map</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="listing-details-gallery.html">gallery</a>
                                 </li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="listing-details-image.html"> image</a>
                                 </li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="listing-details-no-image.html"> no
                                     image</a></li>
                             </ul>
                         </li>
                     </ul>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Blog <span className="caret"><i
                             className="fas fa-angle-down"></i></span></a>
                     <ul className="sub-menu x-animated x-fadeInUp">
                         <li className="nav-item">
                             <a className="nav-link" href="#">Blog layout<span className="caret"><i
                                     className="fas fa-angle-down"></i></span></a>
                             <ul className="sub-menu x-animated x-fadeInUp">
                                 <li className="nav-item"><a className="nav-link" href="blog-listing-grid.html">
                                     grid</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="blog-listing-large-image.html">
                                     large image</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="blog-listing-with-sidebar.html">
                                     with sidebar</a></li>
                             </ul>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Post
                                 <span className="caret"><i className="fas fa-angle-down"></i></span>
                             </a>
                             <ul className="sub-menu x-animated x-fadeInUp">
                                 <li className="nav-item"><a className="nav-link" href="blog-single-audio.html">
                                     audio</a></li>
                                 <li className="nav-item"><a className="nav-link"
                                                         href="blog-single-gallery.html">
                                     gallery</a></li>
                                 <li className="nav-item"><a className="nav-link" href="blog-single-image.html">
                                     image</a></li>
                                 <li className="nav-item"><a className="nav-link" href="blog-single-video.html">video</a>
                                 </li>
                             </ul>
                         </li>
                     </ul>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Docs <span className="caret"><i
                             className="fas fa-angle-down"></i></span></a>
                     <ul className="sub-menu x-animated x-fadeInUp">
                         <li className="nav-item">
                             <a className="nav-link" href="document/introduction.html">Documentation</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="starter/introduction.html">Get started
                             </a>
                         </li>
                     </ul>
                 </li>
             </ul>
             <div className="header-customize justify-content-end align-items-center d-none d-xl-flex">
                 <div className="header-customize-item">
                     <a href="#login-popup" className="link" data-gtf-mfp="true"
                        data-mfp-options='{"type":"inline"}'>
                         <svg className="icon icon-user-circle-o">
                             <use xlinkHref="#icon-user-circle-o"/>
                         </svg>
                         Log in</a>
                 </div>
                 <div className="header-customize-item button">
                     <a href="page-submit-listing.html" className="btn btn-primary btn-icon-right">Add
                         Listing
                         <i
                                 className="far fa-angle-right"></i></a>
                 </div>
             </div>
             <Login/>
         </div>
     </nav>
 </div>
</div>
</header>
</div> 
    );
 };
    
 export default Header;   