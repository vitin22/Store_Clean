import React, { useState } from 'react';
import Estilo from './ScriptD'


function DashboardContent() {

    return(
        <div>

<div className="page-container">
                    <div className="container-fluid">
                        <div className="page-content-wrapper d-flex flex-column justify-content-center">
                            <div className="features card-deck">
                                <div className="card rounded-0 border-0 bg-transparent mb-6">
                                    <div className="card-body d-flex align-items-center py-6 px-8 bg-white">
                                        <span className="font-size-h1 font-weight-semibold d-inline-block mr-2 text-primary lh-1">15</span>
                                        <span className="font-size-md font-weight-semibold text-uppercase text-dark lh-13">All <br/> Listings</span>
                                    </div>
                                </div>
                                <div className="card rounded-0 border-0 bg-transparent mb-6">
                                    <div className="card-body d-flex align-items-center py-6 px-8 bg-white">
                                        <span className="font-size-h1 font-weight-semibold d-inline-block mr-2 text-darker-light lh-1">0</span>
                                        <span className="font-size-md font-weight-semibold text-uppercase text-dark lh-13">Pending<br/> Listings</span>
                                    </div>
                                </div>
                                <div className="card rounded-0 border-0 bg-transparent mb-6">
                                    <div className="card-body d-flex align-items-center py-6 px-8 bg-white">
                                        <span className="font-size-h1 font-weight-semibold d-inline-block mr-2 lh-1 published">12</span>
                                        <span className="font-size-md font-weight-semibold text-uppercase text-dark lh-13">published<br/> Listings</span>
                                    </div>
                                </div>
                                <div className="card rounded-0 border-0 bg-transparent mb-6">
                                    <div className="card-body d-flex align-items-center py-6 px-8 bg-white">
                                        <span className="font-size-h1 font-weight-semibold d-inline-block mr-2 lh-1 experied">2</span>
                                        <span className="font-size-md font-weight-semibold text-uppercase text-dark lh-13">Experied<br/> Listings</span>
                                    </div>
                                </div>
                                <div className="card rounded-0 border-0 bg-transparent mb-6">
                                    <div className="card-body d-flex align-items-center p-6 bg-white">
                                        <span className="font-size-h1 font-weight-semibold d-inline-block mr-2 lh-1 active">1</span>
                                        <span className="font-size-md font-weight-semibold text-uppercase text-dark lh-13">Active campaign <br/> Listings</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex two-column mb-13 mx-n3">
                                <div className="page-left mb-6 px-3">
                                    <div className="alert alert-success mb-6 alert-dismissible fade show d-flex align-items-center pr-3">
                                        <div className="font-size-lg py-0 mr-6">Your listing <a
                                                href="listing-details-full-image.html"
                                                className="font-weight-semibold link-hover-dark-primary">Hotel Govendor</a>
                                            has
                                            been
                                            approved!
                                        </div>
                                        <div className="ml-auto">
                                            <a href="#" className="alert-button py-0 font-size-h3 lh-1" data-dismiss="alert"
                                               aria-label="Close"><i className="fal fa-times"></i></a>
                                        </div>
                                    </div>
                                    <div className="facts-box mb-6 row">
                                        <div className="col-lg-4 mb-6 mb-xl-0">
                                            <div className="card view rounded-0 border-0 text-white">
                                                <div className="card-body d-flex align-items-center p-0">
                                                    <div className="content mr-auto">
                                                        <span className="font-size-h1 font-weight-semibold lh-1 d-block">824</span>
                                                        <span className="font-size-lg">Total Views</span>
                                                    </div>
                                                    <div className="fact-icon">
                                                        <svg className="icon icon-eye">
                                                            <use xlinkHref="#icon-eye"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-6 mb-xl-0">
                                            <div className="card review rounded-0 border-0 text-white">
                                                <div className="card-body d-flex align-items-center p-0">
                                                    <div className="content mr-auto">
                                                        <span className="font-size-h1 font-weight-semibold lh-1 d-block">73</span>
                                                        <span className="font-size-lg">Total Reviews</span>
                                                    </div>
                                                    <div className="fact-icon">
                                                        <i className="fal fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card time-bookmark rounded-0 border-0 text-white">
                                                <div className="card-body d-flex align-items-center p-0">
                                                    <div className="content mr-auto">
                                                        <span className="font-size-h1 font-weight-semibold lh-1 d-block">269</span>
                                                        <span className="font-size-lg">Times Bookmarked</span>
                                                    </div>
                                                    <div className="fact-icon">
                                                        <i className="fal fa-bookmark"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row tables">
                                        <div className="col-xl-6 mb-6 mb-xl-0">
                                            <div className="card rounded-0 border-0 reccent-activities">
                                                <div className="card-body">
                                                    <h5 className="card-title text-capitalize border-bottom pb-2 mb-2">
                                                        Recent
                                                        Activities</h5>
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="icon-box no-shape icon-box-style-03 d-flex">
																	<span className="icon-box-icon">
																		<svg className="icon icon-layers"><use
                                                                                xlinkHref="#icon-layers"></use></svg>
																	</span>
                                                                            <div className="content-box">Your listing <a
                                                                                    href="listing-details-full-image.html"
                                                                                    className="font-weight-semibold link-hover-dark-primary">Hotel
                                                                                Govendor</a>
                                                                                has
                                                                                been approved!
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>8 Hours ago</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="icon-box no-shape icon-box-style-03 d-flex">
																	<span className="icon-box-icon">
																		<i className="fal fa-bookmark"></i>
																	</span>
                                                                            <div className="content-box"><a href="#"
                                                                                                        className="font-weight-semibold link-hover-dark-primary">David
                                                                                Eggsy</a>
                                                                                bookmarked your <a
                                                                                        href="listing-details-full-image.html"
                                                                                        className="font-weight-semibold link-hover-dark-primary">Thai
                                                                                    Taste’s Restaurant</a>
                                                                                listing!
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>15 Hours ago</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="icon-box no-shape icon-box-style-03 d-flex">
																	<span className="icon-box-icon">
																		<i className="fal fa-star"></i>
																	</span>
                                                                            <div className="content-box"><a href="#"
                                                                                                        className="font-weight-semibold link-hover-dark-primary">Kathy
                                                                                Brown</a>
                                                                                left a review <a
                                                                                        href="panel-review-submitted.html"
                                                                                        className="font-weight-semibold link-hover-dark-primary">5
                                                                                    Star</a>
                                                                                on
                                                                                <a href="listing-details-full-image.html"
                                                                                   className="font-weight-semibold link-hover-dark-primary">Roman
                                                                                    Kraft Hotel</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>1 days ago</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="icon-box no-shape icon-box-style-03 d-flex">
																	<span className="icon-box-icon">
																		<svg className="icon icon-layers"><use
                                                                                xlinkHref="#icon-layers"></use></svg>
																	</span>
                                                                            <div className="content-box">Your listing <a
                                                                                    href="listing-details-full-image.html"
                                                                                    className="font-weight-semibold link-hover-dark-primary">Hotel
                                                                                Govendor</a>
                                                                                has
                                                                                been approved!
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>8 Hours ago</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="icon-box no-shape icon-box-style-03 d-flex">
																	<span className="icon-box-icon">
																		<i className="fal fa-bookmark"></i>
																	</span>
                                                                            <div className="content-box"><a href="#"
                                                                                                        className="font-weight-semibold link-hover-dark-primary">David
                                                                                Eggsy</a>
                                                                                bookmarked your <a
                                                                                        href="listing-details-full-image.html"
                                                                                        className="font-weight-semibold link-hover-dark-primary">Thai
                                                                                    Taste’s Restaurant</a>
                                                                                listing!
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>15 Hours ago</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="icon-box no-shape icon-box-style-03 d-flex">
																	<span className="icon-box-icon">
																		<i className="fal fa-star"></i>
																	</span>
                                                                            <div className="content-box"><a href="#"
                                                                                                        className="font-weight-semibold link-hover-dark-primary">Kathy
                                                                                Brown</a>
                                                                                left a review <a
                                                                                        href="panel-review-submitted.html"
                                                                                        className="font-weight-semibold link-hover-dark-primary">5
                                                                                    Star</a>
                                                                                on
                                                                                <a href="listing-details-full-image.html"
                                                                                   className="font-weight-semibold link-hover-dark-primary">
                                                                                    Roman Kraft Hotel</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>1 days ago</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="card rounded-0 border-0 invoices">
                                                <div className="card-body">
                                                    <h5 className="card-title text-capitalize border-bottom pb-2 mb-2">
                                                        Invoices</h5>
                                                    <div className="table-responsive-sm">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Date</th>
                                                                    <th>Plan</th>
                                                                    <th>Amount</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <a href="panel-invoice-details.html"
                                                                           className="link-hover-dark-blue">INV-00001</a>
                                                                    </td>
                                                                    <td>22/10/2017</td>
                                                                    <td>Basic</td>
                                                                    <td>$264.00</td>
                                                                    <td><span className="status paid">Paid</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="panel-invoice-details.html"
                                                                           className="link-hover-dark-blue">INV-00002</a>

                                                                    </td>
                                                                    <td>15/16/2016</td>
                                                                    <td>Premium</td>
                                                                    <td>$528.00</td>
                                                                    <td><span className="status overdue">Overdue</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="panel-invoice-details.html"
                                                                           className="link-hover-dark-blue">INV-00003</a>
                                                                    </td>
                                                                    <td>18/10/2017</td>
                                                                    <td>Ultimate</td>
                                                                    <td>$1,528.00</td>
                                                                    <td><span className="status pending">Pending</span></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="page-right px-3">
                                    <div className="card rounded-0 border-0 contact py-6 px-3">
                                        <div className="card-body text-center p-0">
                                            <div className="contact-icon text-dark mb-3">
                                                <svg className="icon icon-headset">
                                                    <use xlinkHref="#icon-headset"></use>
                                                </svg>
                                            </div>
                                            <div className="text-dark font-size-md mb-5">
                                                <p className="mb-2">Have any problem and<br/> need support? Call Us directly
                                                </p>
                                                <p className="font-weight-semibold h5 mb-2">(+34) 967-123-888</p>
                                                <p>Or chat with us</p>
                                            </div>
                                            <a href="#" className="btn btn-primary font-size-md px-8 lh-15">Contact Us</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="copy-right mt-auto">
                                &copy; 2020 Thedir. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
      
        </div>

    );

}

export default DashboardContent;