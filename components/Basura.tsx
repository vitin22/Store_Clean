import React, { useState } from 'react';
import Estilo from './ScriptD'


function Basura() {

    return(
        <div>
<Estilo/>

<ul className="breadcrumb breadcrumb-style-02 py-7">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item">Full Map Listing - List View</li>
                </ul>
                <div className="page-container row">
                    <div className="sidebar col-lg-4 order-1 order-lg-0 mb-8 mb-lg-0">
                        <div className="card search bg-white mb-6 border-0 rounded-0 px-6">
                            <div className="card-header bg-transparent border-0 pt-4 pb-0 px-0">
                                <h5 className="card-title mb-0">Search</h5>
                            </div>
                            <div className="card-body px-0 pb-42">
                                <div className="form-search form-search-style-03">
                                    <div className="form-group">
                                        <div className="input-group d-flex align-items-center">
                                            <label htmlFor="what" className="input-group-prepend text-dark font-weight-semibold">What</label>
                                            <input type="text" autoComplete="off" className="form-control bg-transparent" id="what" placeholder="Any keywords..."/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group d-flex align-items-center">
                                            <label htmlFor="where" className="input-group-prepend text-dark font-weight-semibold">Where</label>
                                            <input type="text" autoComplete="off" className="form-control bg-transparent" id="where" placeholder="City, postcode..."/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block btn-icon-left">
                                        <i className="fal fa-search"></i>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card widget-filter bg-white mb-6 border-0 rounded-0 px-6">
                            <div className="card-header bg-transparent border-0 pt-4 pb-0 px-0">
                                <h5 className="card-title mb-0">Filter</h5>
                            </div>
                            <div className="card-body px-0">
                                <div className="form-filter">
                                    <form>
                                        <div className="form-group category">
                                            <div className="select-custom">
                                                <select className="form-control bg-transparent">
                                                    <option value="0">Categories</option>
                                                    <option value="1">New York</option>
                                                    <option value="1">LA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group price-range">
                                            <label className="form-label">
                                                Price Range
                                            </label>
                                            <div id="price" data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:4000,&quot;values&quot;:[0,2000]}" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 50%;"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
                                            <div className="description">
                                                From <input type="text" readOnly="" className="amount border-0"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" value="Open Now" className="form-control bg-transparent"/>
                                                <span className="input-group-append"><i className="fal fa-clock"></i></span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" value="Highest Rated" className="form-control bg-transparent"/>
                                                <span className="input-group-append"><i className="fas fa-star"></i></span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" value="Most Reviewed" className="form-control bg-transparent"/>
                                                <span className="input-group-append"><i className="fal fa-comment"></i></span>
                                            </div>
                                        </div>
                                        <div className="form-group filter-tags">
                                            <label className="form-label">Filter by tags</label>
                                            <div className="custom-control custom-checkbox lh-19">
                                                <input className="custom-control-input" type="checkbox" id="electronics"/>
                                                <label className="custom-control-label" htmlFor="electronics">
                                                    Electronics
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox lh-19">
                                                <input className="custom-control-input" type="checkbox" id="books"/>
                                                <label className="custom-control-label" htmlFor="books">
                                                    Books
                                                </label>

                                            </div>
                                            <div className="custom-control custom-checkbox lh-19">
                                                <input className="custom-control-input" type="checkbox" id="fashion"/>
                                                <label className="custom-control-label" htmlFor="fashion">
                                                    Fashion
                                                </label>

                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input className="custom-control-input" type="checkbox" id="vintage"/>
                                                <label className="custom-control-label" htmlFor="vintage">
                                                    Vintage
                                                </label>

                                            </div>
                                            <div className="custom-control custom-checkbox lh-19">
                                                <input className="custom-control-input" type="checkbox" id="gift"/>
                                                <label className="custom-control-label" htmlFor="gift">
                                                    Gift
                                                </label>

                                            </div>
                                            <div className="custom-control custom-checkbox lh-19">
                                                <input className="custom-control-input" type="checkbox" id="furniture"/>
                                                <label className="custom-control-label" htmlFor="furniture">
                                                    Furniture
                                                </label>

                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input className="custom-control-input" type="checkbox" id="women-clothing"/>
                                                <label className="custom-control-label" htmlFor="women-clothing">
                                                    Women Clothing
                                                </label>

                                            </div>
                                            <div className="custom-control custom-checkbox lh-19">
                                                <input className="custom-control-input" type="checkbox" id="men-clothing"/>
                                                <label className="custom-control-label" htmlFor="men-clothing">
                                                    Men Clothing
                                                </label>

                                            </div>
                                            <div className="custom-control custom-checkbox lh-19">
                                                <input className="custom-control-input" type="checkbox" id="shoes"/>
                                                <label className="custom-control-label" htmlFor="shoes">
                                                    Shoes
                                                </label>

                                            </div>
                                            <div className="custom-control custom-checkbox lh-19">
                                                <input className="custom-control-input" type="checkbox" id="jewelry"/>
                                                <label className="custom-control-label" htmlFor="jewelry">
                                                    Jewelry
                                                </label>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="campaign">
                            <img src="images/other/campaign.jpg" alt="Campaign"/>
                        </div>
                    </div>
                    <div className="page-content col-12 col-lg-8 order-0 order-lg-1">
                        <div className="explore-filter d-lg-flex align-items-center d-block">
                            <div className="text-dark font-weight-semibold font-size-md mb-4 mb-lg-0">56 Results found</div>
                            <div className="form-filter d-flex align-items-center ml-auto">
                                <div className="form-group row no-gutters align-items-center">
                                    <label htmlFor="sort-by" className="col-sm-3 text-dark font-size-md font-weight-semibold mb-0">Sort
                                        by</label>
                                    <div className="select-custom col-sm-9">
                                        <select id="sort-by" className="form-control">
                                            <option value="0">Latest</option>
                                            <option value="1">New York</option>
                                            <option value="1">LA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="format-listing ml-auto">
                                    <a href="explore-full-map-grid.html"><i className="fas fa-th"></i></a>
                                    <a href="#" className="active"><i className="fal fa-bars"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="store-listing-style store-listing-style-01">
                            <div className="mb-6">
                                <div className="store media align-items-stretch bg-white">
                                    <div className="position-relative store-image" styled="background-image: url('images/shop/hotels-shop-4.jpg')">
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-4.jpg" className="item viewing" data-toggle="tooltip" data-placement="top" title="" data-gtf-mfp="true" data-original-title="Quickview">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html" className="h5 text-dark d-inline-block mb-2"><span className="letter-spacing-25">Paradico’s Beach Luxury Hotel</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span className="badge badge-success d-inline-block mr-1">4.8</span><span>2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>

                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img src="images/listing/testimonial-1.png" alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span className="d-inline-block mr-1"><i className="fal fa-map-marker-alt">
											</i>
												</span>
                                            <a href="#" className="text-secondary text-decoration-none address">92
                                                Halsey St,
                                                Brooklyn, NY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="store media align-items-stretch bg-white">
                                    <div className="position-relative store-image" style="background-image: url('images/shop/hotels-shop-1.jpg')">
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-1.jpg" className="item viewing" data-toggle="tooltip" data-placement="top" title="" data-gtf-mfp="true" data-original-title="Quickview">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html" className="h5 text-dark d-inline-block mb-2"><span className="letter-spacing-25">Casar Camper Hotel Barcelona</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span className="badge badge-success d-inline-block mr-1">4.8</span><span>2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img src="images/listing/testimonial-1.png" alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span className="d-inline-block mr-1"><i className="fal fa-map-marker-alt">
											</i>
												</span>
                                            <a href="#" className="text-secondary text-decoration-none address">92
                                                Halsey St,
                                                Brooklyn, NY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="store media align-items-stretch bg-white">
                                    <div className="position-relative store-image" styled="background-image: url('images/shop/hotels-shop-2.jpg');">
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-2.jpg" className="item viewing" data-toggle="tooltip" data-placement="top" title="" data-gtf-mfp="true" data-original-title="Quickview">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html" className="h5 text-dark d-inline-block mb-2"><span className="letter-spacing-25">Mandapa, A Ritz-Carlton Reserve</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span className="badge badge-success d-inline-block mr-1">4.8</span><span>2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img src="images/listing/testimonial-1.png" alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span className="d-inline-block mr-1"><i className="fal fa-map-marker-alt">
											</i>
												</span>
                                            <a href="#" className="text-secondary text-decoration-none address">92
                                                Halsey St,
                                                Brooklyn, NY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="store media align-items-stretch bg-white">
                                    <div className="position-relative store-image" style="background-image: url('images/shop/hotels-shop-3.jpg');">
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-3.jpg" className="item viewing" data-toggle="tooltip" data-placement="top" title="" data-gtf-mfp="true" data-original-title="Quickview">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html" className="h5 text-dark d-inline-block mb-2"><span className="letter-spacing-25">Turin Palace Hotel</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span className="badge badge-success d-inline-block mr-1">4.8</span><span>2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img src="images/listing/testimonial-1.png" alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span className="d-inline-block mr-1"><i className="fal fa-map-marker-alt">
											</i>
												</span>
                                            <a href="#" className="text-secondary text-decoration-none address">92
                                                Halsey St,
                                                Brooklyn, NY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="store media align-items-stretch bg-white">
                                    <div className="position-relative store-image" styled="background-image: url('images/shop/hotels-shop-5.jpg')">
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-5.jpg" className="item viewing" data-toggle="tooltip" data-placement="top" title="" data-gtf-mfp="true" data-original-title="Quickview">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html" className="h5 text-dark d-inline-block mb-2"><span className="letter-spacing-25">Romance Hotel Santorini</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span className="badge badge-success d-inline-block mr-1">4.8</span><span>2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img src="images/listing/testimonial-1.png" alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span className="d-inline-block mr-1"><i className="fal fa-map-marker-alt">
											</i>
												</span>
                                            <a href="#" className="text-secondary text-decoration-none address">92
                                                Halsey St,
                                                Brooklyn, NY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="store media align-items-stretch bg-white">
                                    <div className="position-relative store-image" styled="background-image: url('images/shop/hotels-shop-6.jpg')">
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-6.jpg" className="item viewing" data-toggle="tooltip" data-placement="top" title="" data-gtf-mfp="true" data-original-title="Quickview">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html" className="h5 text-dark d-inline-block mb-2"><span className="letter-spacing-25">Sunset Glow Hotel Italy</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span className="badge badge-success d-inline-block mr-1">4.8</span><span>2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img src="images/listing/testimonial-1.png" alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span className="d-inline-block mr-1"><i className="fal fa-map-marker-alt">
											</i>
												</span>
                                            <a href="#" className="text-secondary text-decoration-none address">92
                                                Halsey St,
                                                Brooklyn, NY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="pagination pagination-style-02 justify-content-center pb-13">
                            <li className="page-item"><a href="#" className="page-link"><i className="fal fa-chevron-left"></i></a>
                            </li>
                            <li className="page-item"><a href="#" className="page-link current bg-white">1</a></li>
                            <li className="page-item"><a href="#" className="page-link bg-white">2</a></li>
                            <li className="page-item"><a href="#" className="page-link bg-white">3</a></li>
                            <li className="page-item"><a href="#" className="page-link bg-white">...</a></li>
                            <li className="page-item"><a href="#" className="page-link bg-white">10</a></li>
                            <li className="page-item"><a href="#" className="page-link bg-white"><i className="fal fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            
    );

}

export default Basura;