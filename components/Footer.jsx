import React, { useState } from 'react';


function Footer() {

    return(
        <div>

<footer className="main-footer main-footer-style-01 bg-pattern-01 pt-12 pb-8">
<div className="footer-second">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-4 mb-6 mb-lg-0">
                <div className="mb-8"><img src="images/logo.png" alt="Thedir"/></div>
                <div className="mb-7">
                    <div className="font-size-md font-weight-semibold text-dark mb-4">Global Headquaters</div>
                    <p className="mb-0">
                        90 Fifth Avenue, 3rd Floor<br/>
                        New York NY 10011<br/>
                        212.913.9058</p>
                </div>
                <div className="region pt-1">
                    <div className="font-size-md font-weight-semibold text-dark mb-2">Recent Region</div>
                    <form>
                        <div className="select-custom">
                            <select className="form-control">
                                <option value="1">San Fracisco, CA</option>
                                <option value="1">New York</option>
                                <option value="1">LA</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-6 col-lg mb-6 mb-lg-0">
                <div className="font-size-md font-weight-semibold text-dark mb-4">
                    Company
                </div>
                <ul className="list-group list-group-flush list-group-borderless">
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="page-about.html" className="link-hover-secondary-primary">About Us</a>
                    </li>
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="#" className="link-hover-secondary-primary">Team</a>
                    </li>
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="#" className="link-hover-secondary-primary">Careers</a>
                    </li>
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="#" className="link-hover-secondary-primary">Investors</a>
                    </li>
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="page-contact.html" className="link-hover-secondary-primary">Contact Us</a>
                    </li>
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="#" className="link-hover-secondary-primary">Offices</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6 col-lg mb-6 mb-lg-0">
                <div className="font-size-md font-weight-semibold text-dark mb-4">
                    Quick Links
                </div>
                <ul className="list-group list-group-flush list-group-borderless">
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="page-faqs.html" className="link-hover-secondary-primary">FAQS</a>
                    </li>
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="#" className="link-hover-secondary-primary">Support</a>
                    </li>
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="#" className="link-hover-secondary-primary">Sitemap</a>
                    </li>
                    <li className="list-group-item px-0 lh-1625 bg-transparent py-1">
                        <a href="#" className="link-hover-secondary-primary">Community</a>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-lg-4 mb-6 mb-lg-0">
                <div className="pl-0 pl-lg-9">
                    <div className="font-size-md font-weight-semibold text-dark mb-4">Our Newsletter</div>
                    <div className="mb-4">Subscribe to our newsletter and<br/>
                        we will inform you about newset directory and promotions
                    </div>
                    <div className="form-newsletter">
                        <form>
                            <div className="input-group bg-white">
                                <input type="text"
                                       className="form-control border-0"
                                       placeholder="Email Address... "/>
                                <button type="button"
                                        className="input-group-append btn btn-white bg-transparent text-dark border-0">
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="footer-last mt-8 mt-md-11">
    <div className="container">
        <div className="footer-last-container position-relative">
            <div className="row align-items-center">
                <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="social-icon text-dark">
                        <ul className="list-inline">
                            <li className="list-inline-item mr-5">
                                <a target="_blank" title="Twitter" href="#">
                                    <i className="fab fa-twitter">
                                    </i>
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li className="list-inline-item mr-5">
                                <a target="_blank" title="Facebook" href="#">
                                    <i className="fab fa-facebook-f">
                                    </i>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li className="list-inline-item mr-5">
                                <a target="_blank" title="Google plus" href="#">
                                    <svg className="icon icon-google-plus-symbol">
                                        <use xlinkHref="#icon-google-plus-symbol"></use>
                                    </svg>
                                    <span>Google plus</span>
                                </a>
                            </li>
                            <li className="list-inline-item mr-5">
                                <a target="_blank" title="Instagram" href="#">
                                    <svg className="icon icon-instagram">
                                        <use xlinkHref="#icon-instagram"></use>
                                    </svg>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li className="list-inline-item mr-5">
                                <a target="_blank" title="Rss" href="#">
                                    <i className="fas fa-rss"></i>
                                    <span>Rss</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 mb-3 mb-lg-0">
                    <div>
                        &copy; 2020 <a href="index.html"
                                       className="link-hover-dark-primary font-weight-semibold">The Dir.</a> All
                        Rights Resevered. Design
                        by <a href="http://g5plus.net/"
                              className="link-hover-dark-primary font-weight-semibold">G5Theme</a>
                    </div>
                </div>
                <div className="back-top text-left text-lg-right gtf-back-to-top">
                    <a href="#" className="link-hover-secondary-primary"><i
                            className="fal fa-arrow-up"></i><span>Back To Top</span></a>
                </div>
            </div>
        </div>
    </div>
</div>
</footer>
</div>
    );
};

export default Footer;