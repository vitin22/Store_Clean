import React, { useState } from 'react';
import Login from './Login'



 function Header() {
    

    return (
<div>
 
 {/*<!-- #header start -->*/}
 <header id="header"
                className="main-header header-sticky header-sticky-smart header-style-10 text-uppercase bg-white">
            <div className="header-wrapper sticky-area border-bottom">
                <div className="container-fluid">
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
                            <a className="navbar-brand d-none d-xl-block" href="index.html">
                                <img src="images/logo.png" alt="TheDir"/>
                            </a>
                            <div className="form-search form-search-style-04 d-flex mr-auto">
                                <form>
                                    <div className="d-flex align-items-center">
                                        <div className="form-search-items d-flex">
                                            <div className="form-search-item d-flex align-items-center what border-right">
                                                <label htmlFor="key-word">What</label>
                                                <div className="input-group dropdown show bg-transparent">
                                                    <input type="text" autoComplete="off" id="key-word"
                                                           className="form-control bg-transparent border-0"
                                                           placeholder="Ex: food, service, barber, hotel"
                                                           data-toggle="dropdown"
                                                           aria-haspopup="true"/>
                                                    <a href="#" className="input-group-append text-decoration-none">
                                                        <i className="fal fa-chevron-down"></i>
                                                    </a>
                                                    <ul className="dropdown-menu form-search-ajax"
                                                        aria-labelledby="key-word">
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                <svg className="icon icon-pizza">
                                                                    <use xlinkHref="#icon-pizza"></use>
                                                                </svg>
                                                                <span className="font-size-md">Foods & Restaurants</span>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                <svg className="icon icon-bed">
                                                                    <use xlinkHref="#icon-bed"></use>
                                                                </svg>
                                                                <span className="font-size-md">Hotels & Resorts</span>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                <svg className="icon icon-pharmaceutical">
                                                                    <use xlinkHref="#icon-pharmaceutical"></use>
                                                                </svg>
                                                                <span className="font-size-md">Healths & Medicals</span>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                <svg className="icon icon-cog">
                                                                    <use xlinkHref="#icon-cog"></use>
                                                                </svg>
                                                                <span className="font-size-md">Services</span>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                <svg className="icon icon-car">
                                                                    <use xlinkHref="#icon-car"></use>
                                                                </svg>
                                                                <span className="font-size-md">Automotive</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="form-search-item d-flex align-items-center where">
                                                <label htmlFor="region">Where</label>
                                                <div className="input-group dropdown show bg-transparent">
                                                    <input type="text" autoComplete="off" id="region"
                                                           className="form-control bg-transparent border-0"
                                                           placeholder="San Francisco" data-toggle="dropdown"
                                                           aria-haspopup="true"/>
                                                    <a href="#" className="input-group-append text-decoration-none">
                                                        <i className="fal fa-chevron-down"></i>
                                                    </a>
                                                    <ul className="dropdown-menu form-search-ajax" aria-labelledby="region">
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                Austin
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                Boston
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                Chicago
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                Denver
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                Los Angeles
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                New York
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                San Francisco
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                Seattle
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item item">
                                                            <a href="#" className="link-hover-dark-white">
                                                                Washington
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary"><i
                                                className="fal fa-search"></i>
                                        </button>
                                    </div>

                                </form>
                            </div>
                            <ul className="navbar-nav">
                                
                                
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
                                <div className="header-customize-item button-search">
                                    <a className="mobile-button-search" href="#search-popup"
                                       data-gtf-mfp="true"
                                       data-mfp-options='{"type":"inline","mainclassName":"mfp-move-from-top mfp-align-top search-popup-bg","closeOnBgClick":false,"showCloseBtn":false}'><i
                                            className="far fa-search"></i></a>
                                </div>
                                <div className="header-customize-item">
                                    <a href="#login-popup" className="link" data-gtf-mfp="true"
                                       data-mfp-options='{"type":"inline"}'>
                                        <svg className="icon icon-user-circle-o">
                                            <use xlinkHref="#icon-user-circle-o"></use>
                                        </svg>
                                        Log in</a>
                                </div>
                                <div className="header-customize-item">
                                    <a href="#add-popup" className="btn btn-primary btn-icon-right" data-gtf-mfp="true"
                                       data-mfp-options='{"type":"inline"}'>Add
                                        Listing <i
                                                className="far fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
</div> 
    );
 };
    
 export default Header;   