import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';
import { PagProd } from '@components/Apollo/jobs.query';
import { useRouter } from 'next/router';
import Show from './Show';
import Paginate from './Paginate';
import Datos, { ImageValidate } from './Datos';
import Cuadros from './Cuadros';
import List from './List';
import Estilo from '@components/ScriptD'

const Listado = (props) => {
	let image;

	const router = useRouter();
    var datos = Datos();
    const [rango, setRango] = useState('null');

    console.log(datos['zipcode']);
    console.log("es este")
  
    const { loading, data } = useQuery(PagProd, {
        variables: {
			first: datos['show'], 
			after: datos['page'],
			services_Categoria_Nombre: datos['q'],
			services_Zipcode: datos['zipcode']
		},
        client: client
    });

	//if (loading || !data) {
	//    return <img src="img/giphy.gif"/>;
    //}
    
    console.log(data);
    console.log(rango)

	/*if(datos['list']=="4"){
        console.log(datos['list']);
        console.log(datos['zipcode']);
	}*/
return(
<div >
	<Estilo/>
    <div id="site-wrapper" className="site-wrapper explore-sidebar explore-full-map-list">

{/*<!-- #wrapper-content start -->*/}
        <div id="wrapper-content" className="wrapper-content bg-gray-04 pb-0">
            {/*<div className="map">
                <div id="googleMap" data-google-map="true" className="explore-full-map"
                     style="width:100%;height:860px;"></div>
            </div>*/}
            <div className="container">
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
                                            <label htmlFor="what"
                                                   className="input-group-prepend text-dark font-weight-semibold">What</label>
                                            <input type="text" autoComplete="off" className="form-control bg-transparent"
                                                   id="what"
                                                   placeholder="Any keywords..."/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group d-flex align-items-center">
                                            <label htmlFor="where"
                                                   className="input-group-prepend text-dark font-weight-semibold">Where</label>
                                            <input type="text" autoComplete="off" className="form-control bg-transparent"
                                                   id="where"
                                                   placeholder="City, postcode..."/>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            className="btn btn-primary btn-block btn-icon-left">
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
                                            <div id="price" data-slider="true"
                                                 data-slider-options='{"min":0,"max":4000,"values":[0,2000]}'></div>
                                            <div className="description">
                                            From <input type="text" readonly class="amount border-0"/>
        {/*From <input type="text" readOnly className="amount border-0" name="rango" value={rango} onChange={e => setRango(e.target.value)}/>*/}
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
                                                <input type="text" value="Highest Rated"
                                                       className="form-control bg-transparent"/>
                                                <span className="input-group-append"><i className="fas fa-star"></i></span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" value="Most Reviewed"
                                                       className="form-control bg-transparent"/>
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
                       {/* <div className="campaign">
                            <img src="images/other/campaign.jpg" alt="Campaign"/>
                        </div>
                        */}
                    </div>
                    <div className="page-content col-12 col-lg-8 order-0 order-lg-1">
                        <div className="explore-filter d-lg-flex align-items-center d-block">
                            <div className="text-dark font-weight-semibold font-size-md mb-4 mb-lg-0">56 Results found</div>
                            <div className="form-filter d-flex align-items-center ml-auto">
                                <div className="form-group row no-gutters align-items-center">
                                    <label htmlFor="sort-by"
                                           className="col-sm-3 text-dark font-size-md font-weight-semibold mb-0">Sort
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
                                    <div className="position-relative store-image"
                                             
                                         style={{backgroundImage: 'url(images/shop/hotels-shop-4.jpg)'}}>
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-4.jpg"
                                                   className="item viewing"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Quickview" data-gtf-mfp="true">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html"
                                           className="h5 text-dark d-inline-block mb-2"><span
                                                className="letter-spacing-25">Paradico’s Beach Luxury Hotel</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span
                                                    className="badge badge-success d-inline-block mr-1">4.8</span><span
                                            >2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span
                                                    className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>

                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img
                                                    src="images/listing/testimonial-1.png"
                                                    alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span
                                                        className="d-inline-block mr-1"><i
                                                        className="fal fa-map-marker-alt">
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
                                    <div className="position-relative store-image"
                                    style={{backgroundImage: 'url(images/shop/hotels-shop-1.jpg)'}}>
                                         {/*style="background-image: url('images/shop/hotels-shop-1.jpg')">*/}
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-1.jpg"
                                                   className="item viewing"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Quickview" data-gtf-mfp="true">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html"
                                           className="h5 text-dark d-inline-block mb-2"><span
                                                className="letter-spacing-25">Casar Camper Hotel Barcelona</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span
                                                    className="badge badge-success d-inline-block mr-1">4.8</span><span
                                            >2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span
                                                    className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img
                                                    src="images/listing/testimonial-1.png"
                                                    alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span
                                                        className="d-inline-block mr-1"><i
                                                        className="fal fa-map-marker-alt">
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
                                    <div className="position-relative store-image"
                                    style={{backgroundImage: 'url(images/shop/hotels-shop-2.jpg)'}}>
                                         {/*style="background-image: url('images/shop/hotels-shop-2.jpg');">*/}
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-2.jpg"
                                                   className="item viewing"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Quickview" data-gtf-mfp="true">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html"
                                           className="h5 text-dark d-inline-block mb-2"><span
                                                className="letter-spacing-25">Mandapa, A Ritz-Carlton Reserve</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span
                                                    className="badge badge-success d-inline-block mr-1">4.8</span><span
                                            >2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span
                                                    className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img
                                                    src="images/listing/testimonial-1.png"
                                                    alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span
                                                        className="d-inline-block mr-1"><i
                                                        className="fal fa-map-marker-alt">
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
                                    <div className="position-relative store-image"
                                    style={{backgroundImage: 'url(images/shop/hotels-shop-3.jpg)'}}>
                                         {/*style="background-image: url('images/shop/hotels-shop-3.jpg');">*/}
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-3.jpg"
                                                   className="item viewing"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Quickview" data-gtf-mfp="true">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html"
                                           className="h5 text-dark d-inline-block mb-2"><span
                                                className="letter-spacing-25">Turin Palace Hotel</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span
                                                    className="badge badge-success d-inline-block mr-1">4.8</span><span
                                            >2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span
                                                    className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img
                                                    src="images/listing/testimonial-1.png"
                                                    alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span
                                                        className="d-inline-block mr-1"><i
                                                        className="fal fa-map-marker-alt">
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
                                    <div className="position-relative store-image"
                                    style={{backgroundImage: 'url(images/shop/hotels-shop-5.jpg)'}}>
                                         {/*style="background-image: url('images/shop/hotels-shop-5.jpg')">*/}
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-5.jpg"
                                                   className="item viewing"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Quickview" data-gtf-mfp="true">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html"
                                           className="h5 text-dark d-inline-block mb-2"><span
                                                className="letter-spacing-25">Romance Hotel Santorini</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span
                                                    className="badge badge-success d-inline-block mr-1">4.8</span><span
                                            >2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span
                                                    className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img
                                                    src="images/listing/testimonial-1.png"
                                                    alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span
                                                        className="d-inline-block mr-1"><i
                                                        className="fal fa-map-marker-alt">
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
                                    <div className="position-relative store-image"
                                    style={{backgroundImage: 'url(images/shop/hotels-shop-6.jpg)'}}>
                                         {/*style="background-image: url('images/shop/hotels-shop-6.jpg')">*/}
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href="images/shop/full-hotels-shop-6.jpg"
                                                   className="item viewing"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Quickview" data-gtf-mfp="true">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html"
                                           className="h5 text-dark d-inline-block mb-2"><span
                                                className="letter-spacing-25">Sunset Glow Hotel Italy</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span
                                                    className="badge badge-success d-inline-block mr-1">4.8</span><span
                                            >2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span
                                                    className="text-danger font-weight-semibold">$4.00</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>
                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img
                                                    src="images/listing/testimonial-1.png"
                                                    alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">There is also free complimentary
                                                wi-fi for
                                                the room and there is a turn down service in the eve..
                                                They specialize in makgeolli...
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span
                                                        className="d-inline-block mr-1"><i
                                                        className="fal fa-map-marker-alt">
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
                            <li className="page-item"><a href="#" className="page-link bg-white"><i
                                    className="fal fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="recent-view pt-9 bg-white pb-10">
                <div className="container">
                    <div className="mb-6">
                        <h5 className="mb-0">
                            Recently Viewed
                        </h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="store media align-items-stretch bg-white">
                                <div className="store-image position-relative">
                                    <a href="listing-details-full-image.html">
                                        <img src="images/shop/recent-view-1.jpg" alt="Recent view 1"/>
                                    </a>
                                    <div className="image-content position-absolute d-flex align-items-center">
                                        <div className="content-right ml-auto d-flex">
                                            <a href="images/shop/full-top-place-3.jpg"
                                               className="item viewing"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="Quickview" data-gtf-mfp="true">
                                                <svg className="icon icon-expand">
                                                    <use xlinkHref="#icon-expand"></use>
                                                </svg>
                                            </a>
                                            <a href="#" className="item marking" data-toggle="tooltip"
                                               data-placement="top"
                                               title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body pl-0 pl-sm-3 pt-4 pt-sm-0">
                                    <a href="listing-details-full-image.html"
                                       className="font-size-md font-weight-semibold text-dark d-inline-block mb-2 lh-11"><span
                                            className="letter-spacing-25">Canabo View Street, Main St</span> </a>
                                    <div className="d-flex align-items-center mb-2 lh-1 mx-n3">
                                        <div className="px-3 border-right"><span
                                                className="badge badge-warning d-inline-block mr-1">4.3</span><span
                                                className="number">6 rating</span>
                                        </div>
                                        <div className="px-3">From <span
                                                className="text-danger font-weight-semibold">$8.00</span></div>
                                    </div>
                                    <div>
											<span
                                                    className="d-inline-block mr-1"><i
                                                    className="fal fa-map-marker-alt">
											</i>
												</span>
                                        <a href="#" className="text-secondary text-decoration-none address">77 Main St,
                                            Queen,
                                            NY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="store media align-items-stretch bg-white">
                                <div className="store-image position-relative">
                                    <a href="listing-details-full-image.html">
                                        <img src="images/shop/recent-view-2.jpg" alt="Recent view 1"/>
                                    </a>
                                    <div className="image-content position-absolute d-flex align-items-center">
                                        <div className="content-right ml-auto d-flex">
                                            <a href="images/shop/full-top-place-4.jpg"
                                               className="item viewing"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="Quickview" data-gtf-mfp="true">
                                                <svg className="icon icon-expand">
                                                    <use xlinkHref="#icon-expand"></use>
                                                </svg>
                                            </a>
                                            <a href="#" className="item marking" data-toggle="tooltip"
                                               data-placement="top"
                                               title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body pl-0 pl-sm-3 pt-4 pt-sm-0">
                                    <a href="listing-details-full-image.html"
                                       className="font-size-md font-weight-semibold text-dark d-inline-block mb-2 lh-11"><span
                                            className="letter-spacing-25">Japan's Sushi - 10th Ave St</span> </a>
                                    <div className="d-flex align-items-center mb-2 lh-1 mx-n3">
                                        <div className="px-3 border-right"><span
                                                className="badge badge-success d-inline-block mr-1">5.0</span><span
                                                className="number">7 rating</span>
                                        </div>
                                        <div className="px-3">From <span
                                                className="text-danger font-weight-semibold">$12.00</span></div>
                                    </div>
                                    <div>
											<span
                                                    className="d-inline-block mr-1"><i
                                                    className="fal fa-map-marker-alt">
											</i>
												</span>
                                        <a href="#" className="text-secondary text-decoration-none address">99 10th Ave
                                            St,
                                            Mahattan, NY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="store media align-items-stretch bg-white">
                                <div className="store-image position-relative">
                                    <a href="listing-details-full-image.html">
                                        <img src="images/shop/recent-view-3.jpg" alt="Recent view 1"/>
                                    </a>
                                    <div className="image-content position-absolute d-flex align-items-center">
                                        <div className="content-right ml-auto d-flex">
                                            <a href="images/shop/full-top-place-5.jpg"
                                               className="item viewing"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="Quickview" data-gtf-mfp="true">
                                                <svg className="icon icon-expand">
                                                    <use xlinkHref="#icon-expand"></use>
                                                </svg>
                                            </a>
                                            <a href="#" className="item marking" data-toggle="tooltip"
                                               data-placement="top"
                                               title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body pl-0 pl-sm-3 pt-4 pt-sm-0">
                                    <a href="listing-details-full-image.html"
                                       className="font-size-md font-weight-semibold text-dark d-inline-block mb-2 lh-11"><span
                                            className="letter-spacing-25">Korean Bingsu Shop</span></a>
                                    <div className="d-flex align-items-center mb-2 lh-1 mx-n3">
                                        <div className="px-3 border-right"><span
                                                className="badge badge-success d-inline-block mr-1">5.0</span><span
                                                className="number">7 rating</span>
                                        </div>
                                        <div className="px-3">From <span
                                                className="text-danger font-weight-semibold">$12.00</span></div>
                                    </div>
                                    <div>
											<span
                                                    className="d-inline-block mr-1"><i
                                                    className="fal fa-map-marker-alt">
											</i>
												</span>
                                        <a href="#" className="text-secondary text-decoration-none address">534 Salem
                                            Rd St,
                                            Newark, NY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* <!-- #wrapper-content end -->*/}

        {/*<!-- #footer start -->*/}
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
                            <div className="back-top text-left text-lg-right">
                                <a href="#" className="gtf-back-to-top link-hover-secondary-primary"><i
                                        className="fal fa-arrow-up"></i><span>Back To Top</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    {/* <!-- #footer end -->*/}
    </div>
    {/*<!-- #site-wrapper end-->*/}

    {/*<!-- Other templates -->*/}
    <div id="login-popup" className="mfp-hide">
        <div className="form-login-register">
            <div className="tabs mb-8">
                <ul className="nav nav-pills tab-style-01 text-capitalize justify-content-center"
                    role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="login-tab" data-toggle="tab"
                           href="#login"
                           role="tab"
                           aria-controls="login" aria-selected="true"><h3>Log In</h3></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="register-tab" data-toggle="tab" href="#register"
                           role="tab"
                           aria-controls="register" aria-selected="false"><h3>Register</h3></a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="login" role="tabpanel"
                     aria-labelledby="login-tab">
                    <div className="form-login">
                        <form>
                            <div className="font-size-md text-dark mb-5">Log In Your Account</div>
                            <div className="form-group mb-2">
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input id="username" type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group mb-3">
                                <div className="input-group flex-nowrap align-items-center">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input id="password" type="text" className="form-control" placeholder="Password"/>
                                    <a href="#" className="input-group-append text-decoration-none">Forgot?</a>
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check"/>
                                    <label className="custom-control-label text-dark" htmlFor="check">Remember</label>
                                </div>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary btn-block font-weight-bold text-uppercase font-size-lg rounded-sm mb-8">
                                Log In
                            </button>
                        </form>
                        <div className="font-size-md text-dark mb-5">Or Log In With</div>
                        <div className="social-icon origin-color si-square">
                            <ul className="row no-gutters list-inline text-center">
                                <li className="list-inline-item si-facebook col-3">
                                    <a target="_blank" title="Facebook" href="#">
                                        <i className="fab fa-facebook-f">
                                        </i>
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className="list-inline-item si-twitter col-3">
                                    <a target="_blank" title="Twitter" href="#">
                                        <i className="fab fa-twitter">
                                        </i>
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li className="list-inline-item si-google col-3">
                                    <a target="_blank" title="Google plus" href="#">
                                        <svg className="icon icon-google-plus-symbol">
                                            <use xlinkHref="#icon-google-plus-symbol"></use>
                                        </svg>
                                        <span>Google plus</span>
                                    </a>
                                </li>
                                <li className="list-inline-item si-rss col-3">
                                    <a target="_blank" title="RSS" href="#">
                                        <i className="fas fa-rss"></i>
                                        <span>RSS</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="tab-pane fade " id="register" role="tabpanel"
                     aria-labelledby="register-tab">
                    <div className="form-register">
                        <form>
                            <div className="font-size-md text-dark mb-5">Create Your Account</div>
                            <div className="form-group mb-2">
                                <label htmlFor="username-rt" className="sr-only">Username</label>
                                <input id="username-rt" type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input id="email" type="text" className="form-control" placeholder="Email Address"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password-rt" className="sr-only">Username</label>
                                <input id="password-rt" type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="r-password" className="sr-only">Username</label>
                                <input id="r-password" type="password" className="form-control"
                                       placeholder="Retype password"/>
                            </div>

                            <div className="form-group mb-8">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check-term"/>
                                    <label className="custom-control-label text-dark" htmlFor="check-term">You agree with our
                                        Terms Privacy Policy and</label>
                                </div>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary btn-block font-weight-bold text-uppercase font-size-lg rounded-sm">
                                Create an
                                account
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <form>

            </form>
        </div>
    </div>
    <div id="search-popup" className="mfp-hide">
        <div className="search-popup text-center">
            <h2 className="mb-8">Search</h2>
            <div className="form-search">
                <form>
                    <div className="row align-items-end">
                        <div className="form-search-item col-md-7 mb-4 mb-md-0 text-left bg-white">
                            <label htmlFor="key-word-02" className="pt-4 mb-0 text-dark font-weight-semibold font-size-lg lh-1">What</label>
                            <div className="input-group dropdown show pr-0 bg-transparent align-items-start">
                                <input type="text" autoComplete="off" id="key-word-02"
                                       className="form-control bg-transparent border-0 p-0 font-size-md lh-1"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       placeholder="Ex: food, service, barber, hotel"/>
                                <button type="submit"
                                        className="btn text-dark btn-link input-group-append font-weight-normal p-0">
                                    <i className="fal fa-search"></i>
                                </button>
                                <ul className="dropdown-menu form-search-ajax" aria-labelledby="key-word-02">
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
                        <div className="form-search-item col-md-5 mb-4 mb-md-0 text-left bg-white">
                            <label htmlFor="region-02" className="pt-4 mb-0 text-dark font-weight-semibold font-size-lg lh-1">Where</label>
                            <div className="input-group dropdown show pr-0 bg-transparent align-items-start">
                                <input type="text" autoComplete="off" id="region-02"
                                       className="form-control bg-transparent border-0 p-0 font-size-md lh-1"
                                       data-toggle="dropdown"
                                       aria-haspopup="true" placeholder="San Francisco"/>
                                <button type="submit"
                                        className="btn text-dark btn-link input-group-append font-weight-normal p-0">
                                    <i className="fal fa-chevron-down"></i>
                                </button>
                                <ul className="dropdown-menu form-search-ajax" aria-labelledby="region-02">
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

                </form>
            </div>
            <div className="heading mb-4">
                <div className="pt-8 font-size-lg mb-5">
                    Or browse the highlights
                </div>
            </div>
            <div className="list-inline flex-wrap my-n2">
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card icon-box-style-01 link-hover-dark-white">
                        <div className="card-body p-0">
                            <svg className="icon icon-pizza">
                                <use xlinkHref="#icon-pizza"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Foods
										</span>
                        </div>
                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card icon-box-style-01 link-hover-dark-white">
                        <div className="card-body p-0">
                            <svg className="icon icon-bed">
                                <use xlinkHref="#icon-bed"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block ">
											Hotels
										</span>
                        </div>

                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card icon-box-style-01 link-hover-dark-white">
                        <div className="card-body p-0">
                            <svg className="icon icon-brush2">
                                <use xlinkHref="#icon-brush2"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Jobs
										</span>
                        </div>
                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card link-hover-dark-white icon-box-style-01">
                        <div className="card-body p-0">
                            <svg className="icon icon-pharmaceutical">
                                <use xlinkHref="#icon-pharmaceutical"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Medicals
										</span>
                        </div>
                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card link-hover-dark-white icon-box-style-01">
                        <div className="card-body p-0">
                            <svg className="icon icon-cog">
                                <use xlinkHref="#icon-cog"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Services
										</span>
                        </div>

                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card link-hover-dark-white icon-box-style-01">
                        <div className="card-body p-0">
                            <svg className="icon icon-bag">
                                <use xlinkHref="#icon-bag"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Shopping
										</span>
                        </div>

                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card link-hover-dark-white icon-box-style-01">
                        <div className="card-body p-0">
                            <svg className="icon icon-car">
                                <use xlinkHref="#icon-car"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Automotive
										</span>
                        </div>
                    </a>
                </div>
            </div>
            <a href="#"
               className="d-inline-block button-close mt-11 pt-1 text-dark font-size-lg font-weight-semibold text-decoration-none">
                <span className="d-block"><i className="fal fa-times"></i></span>
                <span className="d-block">Close</span>
            </a>
        </div>
    </div>

    {/*
    <script>
		var map;

		function initMap() {
			var latlng = new google.maps.LatLng(40.6812553, -74.0577474);

			var mapProp = {
				center: latlng,
				zoom: 12,
				mapTypeId: 'roadmap',
				disableDefaultUI: true,
				styles: [
					{
						"featureType": "administrative.country",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "administrative.province",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "administrative.province",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#c3b6a2"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "labels.text",
						"stylers": [
							{
								"color": "#c3b6a2"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#c3b6a2"
							}
						]
					},
					{
						"featureType": "landscape.natural",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "landscape.natural.landcover",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "landscape.natural.terrain",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "poi.business",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "labels.icon",
						"stylers": [
							{
								"color": "#808080"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#808080"
							}
						]
					},
					{
						"featureType": "poi.school",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#f0f0f0"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#c0c0c0"
							},
							{
								"saturation": -75
							},
							{
								"lightness": -80
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ededed"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#ededed"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels.text",
						"stylers": [
							{
								"color": "#ededed"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#91bbd5"
							}
						]
					},
					{
						"featureType": "road.highway.controlled_access",
						"stylers": [
							{
								"color": "#ededed"
							}
						]
					},
					{
						"featureType": "road.local",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ededed"
							}
						]
					},
					{
						"featureType": "transit.line",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#f0f0f0"
							}
						]
					},
					{
						"featureType": "transit.station.airport",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#c3b6a2"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#c7d7d4"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#91bbd5"
							}
						]
					}
				]
			};
			map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
			var positions = [{lat: 40.742600, lng: -74.214472, icon: './images/logo-map/icon-map-shopping-page.png'},
				{
					lat: 40.713917,
					lng: -74.273018,
					icon: './images/logo-map/icon-map-shopping-page.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.675283,
					lng: -74.174105,
					icon: './images/logo-map/icon-map-shopping-page.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.646395,
					lng: -74.204212,
					icon: './images/logo-map/icon-map-shopping-page.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.686306,
					lng: -74.080428,
					icon: './images/logo-map/icon-map-shopping-page.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.669602,
					lng: -73.985256,
					icon: './images/logo-map/6.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.670517,
					lng: -73.943498,
					icon: './images/logo-map/icon-map-shopping-page.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.662581,
					lng: -73.834709,
					icon: './images/logo-map/icon-map-shopping-page.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.702553,
					lng: -73.882717,
					icon: './images/logo-map/icon-map-shopping-page.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.726924,
					lng: -73.941516,
					icon: './images/logo-map/3.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				},
				{
					lat: 40.763445,
					lng: -73.920283,
					icon: './images/logo-map/icon-map-shopping-page.png',
					content: '<div className="store card border-0 rounded-0 map">\n' +
						'\t\t<a href="listing-details-full-image.html\n">' +
						'\t\t<img src="./images/other/map-image-02.jpg" alt="store 1" className="card-img-top">\n' +
						'\t\t</a>\n' +
						'\t<div className="card-body">\n' +
						'\t\t<a href="listing-details-full-image.html" className="card-title font-weight-semibold font-size-lg text-capitalize text-dark">Mandapa, A Ritz-Carlton Reserve</a>\n' +
						'\t\t<div className="card-footer border-0 px-0 bg-transparent">\n' +
						'\t\t\t<a href="#" className="link-hover-dark-primary"><span className="d-inline-block mr-2"><i\n' +
						'\t\t\t\t\tclassName="fal fa-map-marker-alt"></i></span>275 Hobbits Ave St, Queen, NY\n' +
						'\t\t</div>\n' +
						'\t</div>\n' +
						'</div>'
				}];
			positions.forEach(function (position) {
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(position.lat, position.lng),
					icon: position.icon,
					map: map
				});
				var infowindow = new google.maps.InfoWindow({
					content: position.content
				});
				marker.addListener('click', function () {
					infowindow.open(map, marker);
				});
				google.maps.event.addListener(map, "click", function (event) {
					infowindow.close();
				});
				marker.setMap(map);
			});

		}
    </script>
*/}

    {/*<!-- External JavaScripts -->*/}
    <script src="vendors/jquery.min.js"></script>
    <script src="vendors/jquery-ui/jquery-ui.min.js"></script>
    <script src="vendors/popper/popper.js"></script>
    <script src="vendors/bootstrap/js/bootstrap.js"></script>
    <script src="vendors/hc-sticky/hc-sticky.js"></script>
    <script src="vendors/isotope/isotope.pkgd.js"></script>
    <script src="vendors/magnific-popup/jquery.magnific-popup.js"></script>
    <script src="vendors/slick/slick.js"></script>
    <script src="vendors/waypoints/jquery.waypoints.js"></script>
    <script src="vendors/air-datepicker/js/datepicker.min.js"></script>
    <script src="vendors/air-datepicker/js/i18n/datepicker.en.js"></script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8GLJBiOaMtC6ys4cDWPogGR4gPXrafeU&callback=initMap"></script>

    {/*<!-- Site Javascript -->*/}
    <script src="js/app.js"></script>
    <svg aria-hidden="true" contentStyleType="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <symbol id="icon-bed" viewBox="0 0 32 32">
                <title>bed</title>
                <path d="M28 28.8h-1.6c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h1.6c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM4 28.8h-1.6c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h1.6c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM29.853 18.229l-3.789-11.365c-0.318-0.954-1.229-1.738-2.221-1.984-0.035-0.152-0.074-0.298-0.118-0.432-0.363-1.088-0.986-1.25-1.325-1.25h-6.4c-0.203 0-0.509 0.059-0.8 0.341-0.291-0.282-0.597-0.341-0.8-0.341h-6.4c-0.339 0-0.962 0.163-1.325 1.25-0.045 0.134-0.085 0.278-0.118 0.432-0.994 0.246-1.904 1.029-2.221 1.984l-3.789 11.365c-0.307 0.92-0.547 2.402-0.547 3.371v3.2c0 1.323 1.077 2.4 2.4 2.4h25.6c1.323 0 2.4-1.077 2.4-2.4v-3.2c0-0.97-0.24-2.451-0.547-3.371zM16.251 4.8h5.898c0.112 0.251 0.251 0.822 0.251 1.6s-0.139 1.349-0.251 1.6h-5.898c-0.112-0.251-0.251-0.822-0.251-1.6s0.139-1.349 0.251-1.6zM8.251 4.8h5.898c0.112 0.251 0.251 0.822 0.251 1.6s-0.139 1.349-0.251 1.6h-5.898c-0.112-0.251-0.251-0.822-0.251-1.6s0.139-1.349 0.251-1.6zM5.853 7.371c0.086-0.259 0.296-0.507 0.552-0.686 0.022 0.621 0.115 1.203 0.27 1.666 0.363 1.088 0.986 1.25 1.325 1.25h6.4c0.203 0 0.509-0.059 0.8-0.341 0.291 0.282 0.597 0.341 0.8 0.341h6.4c0.339 0 0.962-0.163 1.325-1.25 0.154-0.462 0.248-1.046 0.27-1.666 0.256 0.181 0.466 0.427 0.552 0.686l1.277 3.829h-21.246l1.277-3.829zM4.043 12.8h22.314l1.978 5.934c0.051 0.152 0.099 0.326 0.146 0.514-0.155-0.032-0.315-0.048-0.48-0.048h-25.6c-0.165 0-0.325 0.016-0.48 0.048 0.046-0.187 0.094-0.362 0.146-0.514l1.979-5.934zM28.8 24.8c0 0.442-0.358 0.8-0.8 0.8h-25.6c-0.442 0-0.8-0.358-0.8-0.8v-3.2c0-0.442 0.358-0.8 0.8-0.8h25.6c0.442 0 0.8 0.358 0.8 0.8v3.2z"></path>
            </symbol>
            <symbol id="icon-brush2" viewBox="0 0 32 32">
                <title>brush2</title>
                <path d="M5.6 27.2c-0.211 0-0.418-0.085-0.565-0.235s-0.235-0.355-0.235-0.565 0.085-0.416 0.235-0.565c0.149-0.149 0.355-0.235 0.565-0.235s0.416 0.085 0.565 0.235c0.149 0.149 0.235 0.355 0.235 0.565s-0.085 0.418-0.235 0.565c-0.149 0.149-0.355 0.235-0.565 0.235zM29.834 15.102l-12.938-12.938c-0.453-0.453-1.054-0.701-1.698-0.701s-1.245 0.25-1.698 0.701l-8.138 8.138c-0.862 0.862-1.112 2.394-0.566 3.486l2.57 5.138c0.078 0.158 0.093 0.309 0.038 0.424s-0.178 0.203-0.35 0.243c-0.138 0.034-3.406 0.834-5.418 2.845-1.058 1.058-1.64 2.464-1.64 3.96s0.582 2.902 1.64 3.96c1.058 1.058 2.464 1.64 3.96 1.64 0 0 0 0 0 0 1.496 0 2.902-0.582 3.96-1.64 2.011-2.011 2.813-5.28 2.845-5.418 0.034-0.142 0.131-0.382 0.398-0.382 0.085 0 0.176 0.024 0.27 0.072l5.138 2.57c0.381 0.19 0.827 0.291 1.293 0.291 0.837 0 1.656-0.32 2.192-0.856l8.138-8.138c0.936-0.936 0.936-2.458 0-3.394zM20.566 25.502c-0.235 0.235-0.653 0.387-1.061 0.387-0.219 0-0.419-0.042-0.578-0.122l-5.138-2.57c-0.318-0.16-0.651-0.24-0.986-0.24-0.938 0-1.723 0.646-1.954 1.61-0.006 0.029-0.733 2.973-2.421 4.659-0.755 0.755-1.76 1.171-2.829 1.171s-2.074-0.416-2.829-1.171c-0.755-0.755-1.171-1.76-1.171-2.829s0.416-2.074 1.171-2.829c1.688-1.688 4.63-2.414 4.659-2.421 0.646-0.155 1.166-0.565 1.427-1.123s0.24-1.221-0.058-1.816l-2.57-5.138c-0.24-0.478-0.112-1.261 0.266-1.638l1.502-1.502 14.069 14.069-1.502 1.502zM28.702 17.366l-5.502 5.502-14.069-14.069 5.502-5.502c0.15-0.15 0.35-0.232 0.566-0.232s0.416 0.083 0.566 0.232l12.938 12.938c0.312 0.312 0.312 0.819 0 1.131z"></path>
            </symbol>
            <symbol id="icon-cog" viewBox="0 0 32 32">
                <title>cog</title>
                <path d="M12.21 31.523c-0.066 0-0.133-0.008-0.2-0.026-1.437-0.37-2.818-0.939-4.102-1.694-0.373-0.219-0.504-0.694-0.298-1.074 0.254-0.467 0.389-0.995 0.389-1.531 0-1.765-1.435-3.2-3.2-3.2-0.534 0-1.064 0.134-1.531 0.389-0.379 0.206-0.854 0.075-1.074-0.298-0.755-1.286-1.325-2.666-1.694-4.102-0.104-0.406 0.123-0.824 0.52-0.957 1.302-0.438 2.179-1.658 2.179-3.032s-0.875-2.594-2.179-3.032c-0.397-0.134-0.624-0.55-0.52-0.957 0.37-1.437 0.939-2.818 1.694-4.102 0.219-0.373 0.694-0.504 1.074-0.298 0.466 0.254 0.995 0.389 1.531 0.389 1.765 0 3.2-1.435 3.2-3.2 0-0.534-0.134-1.064-0.389-1.531-0.206-0.379-0.075-0.854 0.298-1.074 1.286-0.755 2.666-1.325 4.102-1.694 0.406-0.104 0.824 0.123 0.957 0.52 0.438 1.302 1.658 2.179 3.032 2.179s2.594-0.875 3.032-2.179c0.134-0.397 0.552-0.624 0.957-0.52 1.437 0.37 2.818 0.939 4.102 1.694 0.373 0.219 0.504 0.694 0.298 1.074-0.254 0.467-0.389 0.995-0.389 1.531 0 1.765 1.435 3.2 3.2 3.2 0.534 0 1.064-0.134 1.531-0.389 0.379-0.206 0.854-0.075 1.074 0.298 0.755 1.286 1.325 2.666 1.694 4.102 0.104 0.406-0.123 0.824-0.52 0.957-1.302 0.438-2.179 1.658-2.179 3.032s0.875 2.594 2.179 3.032c0.397 0.134 0.624 0.55 0.52 0.957-0.37 1.437-0.939 2.818-1.694 4.102-0.219 0.373-0.694 0.504-1.074 0.298-0.467-0.254-0.995-0.389-1.531-0.389-1.765 0-3.2 1.435-3.2 3.2 0 0.534 0.134 1.064 0.389 1.531 0.206 0.379 0.075 0.854-0.298 1.074-1.286 0.755-2.666 1.325-4.102 1.694-0.406 0.104-0.824-0.123-0.957-0.52-0.438-1.302-1.658-2.179-3.032-2.179s-2.594 0.875-3.032 2.179c-0.112 0.331-0.422 0.546-0.758 0.546zM16 27.2c1.803 0 3.427 1.005 4.248 2.563 0.832-0.258 1.642-0.59 2.416-0.995-0.173-0.502-0.262-1.034-0.262-1.568 0-2.646 2.154-4.8 4.8-4.8 0.534 0 1.066 0.090 1.568 0.262 0.405-0.774 0.739-1.582 0.995-2.416-1.558-0.819-2.563-2.443-2.563-4.248s1.005-3.427 2.563-4.248c-0.258-0.832-0.59-1.642-0.995-2.416-0.502 0.173-1.034 0.262-1.568 0.262-2.646 0-4.8-2.154-4.8-4.8 0-0.534 0.090-1.066 0.262-1.568-0.774-0.405-1.582-0.739-2.416-0.995-0.819 1.558-2.443 2.563-4.248 2.563s-3.427-1.005-4.248-2.563c-0.832 0.256-1.642 0.59-2.416 0.995 0.173 0.502 0.262 1.034 0.262 1.568 0 2.646-2.154 4.8-4.8 4.8-0.534 0-1.066-0.090-1.568-0.262-0.405 0.774-0.739 1.582-0.995 2.416 1.558 0.819 2.563 2.443 2.563 4.248s-1.005 3.427-2.563 4.248c0.256 0.832 0.59 1.642 0.995 2.416 0.502-0.173 1.034-0.262 1.568-0.262 2.646 0 4.8 2.154 4.8 4.8 0 0.534-0.090 1.066-0.262 1.568 0.774 0.405 1.582 0.739 2.416 0.995 0.819-1.558 2.443-2.563 4.248-2.563zM16 20.8c-2.646 0-4.8-2.154-4.8-4.8s2.154-4.8 4.8-4.8 4.8 2.154 4.8 4.8-2.154 4.8-4.8 4.8zM16 12.8c-1.765 0-3.2 1.435-3.2 3.2s1.435 3.2 3.2 3.2c1.765 0 3.2-1.435 3.2-3.2s-1.435-3.2-3.2-3.2z"></path>
            </symbol>
            <symbol id="icon-bag" viewBox="0 0 32 32">
                <title>bag</title>
                <path d="M13.6 27.2c-0.349 0-0.669-0.229-0.77-0.581-0.122-0.426 0.125-0.867 0.549-0.989l11.2-3.2c0.426-0.122 0.867 0.125 0.989 0.549s-0.125 0.867-0.549 0.989l-11.2 3.2c-0.074 0.021-0.147 0.030-0.221 0.030zM28.797 26.333l-1.6-19.2c-0.022-0.274-0.186-0.523-0.438-0.65l-3.2-1.6c-0.395-0.197-0.875-0.037-1.074 0.358s-0.037 0.875 0.358 1.074l1.115 0.557-2.013 0.403c-0.046-0.331-0.099-0.669-0.155-1.006-0.712-4.277-1.79-6.269-3.389-6.269-0.638 0-1.238 0.269-1.731 0.778-1.125 1.158-1.822 3.624-2.133 7.536-0.013 0.152-0.022 0.301-0.034 0.45l-3.933 0.787-2.965-1.976 6.17-1.371c0.432-0.096 0.704-0.523 0.608-0.955s-0.523-0.702-0.955-0.608l-1.64 0.365c0.442-2.154 1.096-3.406 1.813-3.406 0.086 0 0.262 0.115 0.475 0.438 0.243 0.37 0.739 0.472 1.107 0.229s0.472-0.739 0.229-1.107c-0.63-0.96-1.333-1.16-1.813-1.16-0.734 0-1.774 0.355-2.566 2.043-0.39 0.834-0.709 1.955-0.946 3.339l-4.662 1.035c-0.314 0.069-0.554 0.318-0.613 0.634-0.005 0.029-0.008 0.058-0.011 0.085v0l-1.6 20.8c-0.026 0.325 0.149 0.632 0.44 0.778l6.4 3.2c0.112 0.056 0.235 0.085 0.358 0.085 0.070 0 0.141-0.010 0.211-0.029l17.6-4.8c0.373-0.101 0.619-0.454 0.587-0.838zM17.816 1.893c0.254-0.262 0.454-0.293 0.584-0.293s0.482 0.261 0.882 1.246c0.354 0.872 0.666 2.109 0.926 3.674 0.059 0.358 0.114 0.717 0.163 1.070l-4.242 0.848c0.363-4.557 1.213-6.058 1.686-6.546zM6.293 8.624l3.307 2.205v19.077l-4.762-2.381 1.454-18.902zM11.2 30.152v-19.096l3.214-0.643c-0.067 1.803-0.029 3.136-0.027 3.211 0.013 0.434 0.368 0.776 0.798 0.776 0.008 0 0.016 0 0.024 0 0.442-0.013 0.789-0.382 0.776-0.824 0-0.019-0.045-1.53 0.043-3.486l4.539-0.907c0.173 1.614 0.234 2.837 0.234 2.856 0.021 0.442 0.395 0.782 0.837 0.762s0.782-0.395 0.762-0.837c-0.003-0.078-0.067-1.382-0.256-3.094l3.534-0.707 1.47 17.643-15.947 4.349z"></path>
            </symbol>
            <symbol id="icon-pizza" viewBox="0 0 32 32">
                <title>pizza</title>
                <path d="M31.92 14.931c-0.072-0.2-0.219-0.363-0.411-0.454l-4.338-2.058c0 0 0 0 0 0s0 0 0 0l-26.029-12.342c-0.306-0.146-0.669-0.082-0.909 0.157s-0.302 0.603-0.157 0.909l12.342 26.029c0 0 0 0 0 0s0 0 0 0l2.056 4.338c0.091 0.192 0.254 0.339 0.454 0.411 0.086 0.030 0.178 0.046 0.269 0.046 0.118 0 0.235-0.026 0.344-0.077 7.146-3.395 12.95-9.2 16.346-16.346 0.091-0.192 0.102-0.411 0.030-0.611zM22.4 12.8c0 0.882-0.718 1.6-1.6 1.6s-1.6-0.718-1.6-1.6 0.718-1.6 1.6-1.6c0.019 0 0.038-0.002 0.058-0.003l1.138 0.539c0.262 0.293 0.405 0.666 0.405 1.064zM18.866 10.253c-0.768 0.586-1.266 1.509-1.266 2.547 0 1.765 1.435 3.2 3.2 3.2s3.2-1.435 3.2-3.2c0-0.038-0.003-0.077-0.010-0.117l1.762 0.835c-2.682 5.25-6.984 9.552-12.234 12.234l-3.139-6.621c0.269 0.046 0.544 0.070 0.822 0.070 2.646 0 4.8-2.154 4.8-4.8s-2.154-4.8-4.8-4.8c-1.261 0-2.451 0.485-3.354 1.365-0.331 0.323-0.608 0.686-0.83 1.078l-4.533-9.56 16.382 7.768zM8.011 14.139c0.131-1.661 1.499-2.939 3.189-2.939 1.765 0 3.2 1.435 3.2 3.2s-1.435 3.2-3.2 3.2c-0.658 0-1.282-0.195-1.816-0.565l-1.373-2.896zM15.576 30.091l-1.373-2.894c5.582-2.84 10.154-7.411 12.994-12.994l2.894 1.373c-3.158 6.246-8.269 11.358-14.515 14.515zM7.2 8h1.6c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-1.6c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8zM18.4 20.8c0.442 0 0.8-0.358 0.8-0.8v-1.6c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v1.6c0 0.442 0.358 0.8 0.8 0.8z"></path>
            </symbol>
            <symbol id="icon-car" viewBox="0 0 32 32">
                <title>car</title>
                <path d="M32.002 24.816c0-0.018 0-0.037-0.002-0.054-0.010-0.413-0.15-2.933-2.042-3.878-0.274-0.136-0.84-0.419-6.213-0.838-0.195-0.448-0.523-1.17-0.922-1.925-1.246-2.365-2.032-2.907-2.515-3.109-1.691-0.707-6.787-0.867-10.102-0.038-2.075 0.518-3.934 1.741-5.376 3.534-0.821 1.021-1.291 1.957-1.478 2.373-0.475 0.374-0.904 0.81-1.285 1.307-1.371 1.784-2.066 4.277-2.066 7.411 0 0.213 0.085 0.416 0.234 0.566s0.354 0.234 0.566 0.234h1.656c0.398 0 0.736-0.293 0.792-0.686 0.045-0.315 0.122-0.621 0.226-0.912 0.661 1.862 2.44 3.2 4.525 3.2s3.864-1.338 4.525-3.2c0.104 0.293 0.181 0.597 0.226 0.912 0.056 0.394 0.394 0.686 0.792 0.686h9.714c0.398 0 0.736-0.293 0.792-0.686 0.027-0.19 0.067-0.378 0.117-0.56 0.498 1.645 2.027 2.846 3.832 2.846 2.208 0 4.003-1.795 4.003-4.003 0-0.888-0.29-1.714-0.786-2.382 0.435-0.008 0.786-0.362 0.786-0.8zM10.594 16.526c3.062-0.766 7.837-0.565 9.098-0.038 0.061 0.026 0.624 0.307 1.71 2.368 0.195 0.368 0.373 0.733 0.525 1.056-0.968-0.067-2.056-0.138-3.28-0.211-4.95-0.298-9.766-0.499-9.814-0.501-0.011 0-0.022 0-0.034 0-0.994 0-1.91 0.115-2.747 0.344 0.933-1.168 2.403-2.483 4.542-3.018zM8 30.4c-1.765 0-3.2-1.435-3.2-3.2 0-0.131 0.010-0.261 0.024-0.39 0.854-0.754 1.971-1.21 3.176-1.21s2.322 0.456 3.176 1.21c0.016 0.13 0.024 0.259 0.024 0.39 0 1.765-1.435 3.2-3.2 3.2zM22.602 28.8h-8.405c-0.288-1.117-0.877-2.139-1.704-2.955-0.008-0.008-0.018-0.018-0.026-0.026-0.083-0.082-0.17-0.162-0.258-0.238-1.165-1.019-2.661-1.579-4.211-1.579s-3.045 0.562-4.211 1.579c-0.069 0.061-0.136 0.122-0.202 0.186-0.046 0.037-0.088 0.077-0.125 0.123-0.803 0.808-1.378 1.814-1.659 2.912h-0.186c0.168-3.819 1.621-7.992 7.166-8 0.315 0.013 4.933 0.21 9.693 0.494 9.090 0.544 10.541 0.92 10.765 1.021 0.637 0.318 0.923 1.083 1.053 1.685h-1.494c-0.16 0-0.32 0.006-0.478 0.018-0.010 0-0.019 0.002-0.029 0.002-1.042 0.083-2.045 0.418-2.922 0.976-0.010 0.005-0.018 0.011-0.027 0.018-0.264 0.17-0.517 0.358-0.755 0.566-0.976 0.854-1.667 1.979-1.987 3.219zM27.997 30.4c-1.325 0-2.403-1.078-2.403-2.403 0-0.629 0.238-1.216 0.67-1.666 0.621-0.389 1.333-0.64 2.091-0.71 1.171 0.174 2.045 1.182 2.045 2.376 0 1.325-1.078 2.403-2.403 2.403z"></path>
            </symbol>
            <symbol id="icon-pharmaceutical" viewBox="0 0 32 32">
                <title>pharmaceutical</title>
                <path d="M25.003 17.956c-3.858 0-6.997 3.139-6.997 6.997s3.139 6.997 6.997 6.997 6.997-3.139 6.997-6.997c-0-3.858-3.139-6.997-6.997-6.997zM25.003 30.588c-3.107 0-5.634-2.528-5.634-5.634s2.528-5.634 5.634-5.634 5.634 2.528 5.634 5.634c-0 3.107-2.528 5.634-5.634 5.634z"></path>
                <path d="M27.133 21.498c-0.32-0.197-0.74-0.098-0.938 0.223l-3.545 5.751c-0.198 0.32-0.098 0.74 0.223 0.938 0.111 0.069 0.235 0.102 0.357 0.102 0.229 0 0.452-0.115 0.581-0.324l3.545-5.751c0.198-0.321 0.098-0.74-0.223-0.938z"></path>
                <path d="M5.541 27.145l-0.104-0.065c-0.565-0.354-0.959-0.907-1.109-1.559s-0.038-1.322 0.316-1.887c0.2-0.319 0.103-0.74-0.216-0.939s-0.74-0.103-0.939 0.216c-0.547 0.874-0.72 1.909-0.489 2.916s0.84 1.862 1.714 2.409l0.104 0.065c0.112 0.070 0.237 0.104 0.361 0.104 0.227 0 0.449-0.113 0.578-0.32 0.2-0.319 0.103-0.74-0.216-0.939z"></path>
                <path d="M19.45 4.692l0.104 0.065c1.169 0.732 1.525 2.278 0.793 3.446-0.2 0.319-0.103 0.74 0.216 0.939 0.112 0.070 0.237 0.104 0.361 0.104 0.227 0 0.449-0.113 0.578-0.32 1.13-1.806 0.581-4.195-1.225-5.325l-0.104-0.065c-0.319-0.2-0.74-0.103-0.939 0.216s-0.103 0.74 0.216 0.939z"></path>
                <path d="M18.279 19.538c0-0 0-0 0-0l5.679-9.074c0.958-1.531 1.263-3.343 0.858-5.103s-1.471-3.257-3.002-4.215l-0.104-0.065c-1.077-0.674-2.316-1.031-3.581-1.031-2.348 0-4.493 1.187-5.737 3.175l-11.359 18.148c-0.958 1.531-1.263 3.343-0.858 5.103s1.471 3.257 3.002 4.215l0.104 0.065c1.077 0.674 2.316 1.031 3.582 1.031 2.348 0 4.493-1.187 5.737-3.175l5.679-9.074c0 0 0 0 0 0zM13.547 3.947c0.994-1.587 2.706-2.535 4.582-2.535 1.009 0 1.998 0.285 2.858 0.823l0.104 0.065c1.222 0.765 2.073 1.96 2.397 3.365s0.080 2.852-0.685 4.074l-5.318 8.496-9.256-5.793 5.318-8.496zM11.444 27.889c-0.994 1.587-2.706 2.535-4.582 2.535-1.009 0-1.998-0.285-2.858-0.823l-0.104-0.065c-1.222-0.765-2.073-1.96-2.397-3.365s-0.080-2.852 0.685-4.075l5.318-8.496 9.256 5.793-5.318 8.496z"></path>
            </symbol>
            <symbol id="icon-checkmark-circle" viewBox="0 0 32 32">
                <title>checkmark-circle</title>
                <path d="M15.2 32c-4.061 0-7.877-1.581-10.749-4.451s-4.451-6.688-4.451-10.747c0-4.061 1.581-7.877 4.451-10.749s6.688-4.453 10.749-4.453c4.061 0 7.877 1.581 10.749 4.453s4.451 6.688 4.451 10.749-1.581 7.877-4.451 10.747c-2.87 2.87-6.688 4.451-10.749 4.451zM15.2 3.2c-7.499 0-13.6 6.101-13.6 13.6s6.101 13.6 13.6 13.6 13.6-6.101 13.6-13.6-6.101-13.6-13.6-13.6zM12 23.2c-0.205 0-0.41-0.078-0.566-0.234l-4.8-4.8c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l4.234 4.234 10.634-10.634c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-11.2 11.2c-0.157 0.157-0.362 0.234-0.566 0.234z"></path>
            </symbol>
            <symbol id="icon-user-circle-o" viewBox="0 0 28 28">
                <title>user-circle-o</title>
                <path d="M14 0c7.734 0 14 6.266 14 14 0 7.688-6.234 14-14 14-7.75 0-14-6.297-14-14 0-7.734 6.266-14 14-14zM23.672 21.109c1.453-2 2.328-4.453 2.328-7.109 0-6.609-5.391-12-12-12s-12 5.391-12 12c0 2.656 0.875 5.109 2.328 7.109 0.562-2.797 1.922-5.109 4.781-5.109 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c2.859 0 4.219 2.312 4.781 5.109zM20 11c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6z"></path>
            </symbol>
            <symbol id="icon-expand" viewBox="0 0 32 32">
                <title>expand</title>
                <path d="M12.566 11.434l-9.834-9.834h6.069c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-8c-0.442 0-0.8 0.358-0.8 0.8v8c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-6.069l9.834 9.834c0.157 0.157 0.362 0.234 0.566 0.234s0.41-0.078 0.566-0.234c0.312-0.312 0.312-0.819 0-1.131zM31.2 0h-8c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h6.069l-9.834 9.834c-0.312 0.312-0.312 0.819 0 1.131 0.157 0.157 0.362 0.234 0.565 0.234s0.41-0.078 0.565-0.234l9.835-9.834v6.069c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-8c0-0.442-0.358-0.8-0.8-0.8zM12.566 19.435c-0.312-0.312-0.819-0.312-1.131 0l-9.834 9.834v-6.069c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v8c0 0.442 0.358 0.8 0.8 0.8h8c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-6.069l9.834-9.835c0.312-0.312 0.312-0.819 0-1.131zM31.2 22.4c-0.442 0-0.8 0.358-0.8 0.8v6.069l-9.835-9.834c-0.312-0.312-0.819-0.312-1.131 0s-0.312 0.819 0 1.131l9.835 9.834h-6.069c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h8c0.442 0 0.8-0.358 0.8-0.8v-8c0-0.442-0.358-0.8-0.8-0.8z"></path>
            </symbol>
            <symbol id="icon-quote" viewBox="0 0 20 20">
                <title>quote</title>
                <path d="M5.315 3.401c-1.61 0-2.916 1.343-2.916 3s1.306 3 2.916 3c2.915 0 0.972 5.799-2.916 5.799v1.4c6.939 0.001 9.658-13.199 2.916-13.199zM13.715 3.401c-1.609 0-2.915 1.343-2.915 3s1.306 3 2.915 3c2.916 0 0.973 5.799-2.915 5.799v1.4c6.938 0.001 9.657-13.199 2.915-13.199z"></path>
            </symbol>
            <symbol id="icon-google-plus-symbol" viewBox="0 0 32 32">
                <title>google-plus-symbol</title>
                <path d="M18.413 20.375c-0.34-0.455-0.715-0.879-1.125-1.269s-0.821-0.747-1.231-1.067c-0.41-0.32-0.785-0.628-1.125-0.923s-0.615-0.602-0.827-0.923-0.317-0.647-0.317-0.981c0-0.462 0.148-0.894 0.442-1.298s0.654-0.795 1.077-1.173c0.423-0.378 0.846-0.792 1.269-1.24s0.782-1.042 1.077-1.779c0.295-0.737 0.442-1.58 0.442-2.529 0-1.128-0.25-2.212-0.75-3.25s-1.205-1.846-2.115-2.423h2.596l2.596-1.519h-8.403c-1.192 0-2.391 0.128-3.596 0.385-1.782 0.397-3.282 1.305-4.5 2.721s-1.827 3.022-1.827 4.817c0 1.897 0.683 3.474 2.048 4.731s3.003 1.884 4.913 1.884c0.385 0 0.833-0.032 1.346-0.096-0.026 0.102-0.070 0.24-0.134 0.413s-0.116 0.311-0.154 0.414c-0.038 0.102-0.071 0.227-0.096 0.375s-0.038 0.298-0.038 0.452c0 0.846 0.41 1.801 1.231 2.865-0.974 0.026-1.936 0.112-2.884 0.26s-1.942 0.378-2.981 0.692c-1.038 0.314-1.968 0.769-2.788 1.365s-1.436 1.304-1.846 2.125c-0.474 0.949-0.712 1.814-0.712 2.596 0 0.859 0.192 1.638 0.577 2.337s0.878 1.269 1.481 1.711c0.603 0.443 1.298 0.814 2.087 1.116s1.57 0.516 2.346 0.644c0.776 0.128 1.542 0.192 2.298 0.192 3.436 0 6.128-0.84 8.077-2.519 1.795-1.564 2.692-3.372 2.692-5.423 0-0.731-0.106-1.413-0.317-2.048s-0.487-1.18-0.827-1.635zM11 13.385c-0.654 0-1.276-0.167-1.865-0.5s-1.090-0.766-1.5-1.298c-0.41-0.532-0.769-1.131-1.077-1.798s-0.535-1.333-0.683-2c-0.147-0.666-0.221-1.301-0.221-1.904 0-1.231 0.327-2.288 0.981-3.173s1.577-1.327 2.769-1.327c0.846 0 1.612 0.263 2.298 0.788s1.224 1.192 1.615 2c0.391 0.808 0.692 1.644 0.904 2.509s0.317 1.683 0.317 2.452c0 1.282-0.279 2.311-0.836 3.087s-1.458 1.163-2.702 1.163zM16.317 27.826c-0.352 0.603-0.83 1.074-1.432 1.413s-1.247 0.59-1.933 0.75c-0.686 0.161-1.407 0.241-2.163 0.241-0.821 0-1.635-0.096-2.442-0.289s-1.58-0.484-2.317-0.875c-0.737-0.391-1.333-0.929-1.788-1.615s-0.683-1.465-0.683-2.337c0-0.769 0.173-1.455 0.519-2.058s0.789-1.083 1.327-1.442c0.538-0.359 1.167-0.654 1.885-0.884s1.41-0.391 2.077-0.481c0.666-0.090 1.346-0.134 2.038-0.134 0.423 0 0.744 0.013 0.962 0.038 0.077 0.052 0.272 0.186 0.587 0.404s0.526 0.366 0.635 0.443c0.109 0.077 0.308 0.224 0.596 0.442s0.493 0.381 0.615 0.49c0.121 0.109 0.298 0.272 0.529 0.49s0.401 0.407 0.51 0.567c0.109 0.16 0.244 0.356 0.404 0.586s0.272 0.452 0.337 0.664c0.064 0.212 0.125 0.442 0.182 0.692s0.086 0.51 0.086 0.779c0 0.807-0.176 1.513-0.529 2.115z"></path>
                <path d="M27.077 4.923v-4.923h-2.462v4.923h-4.923v2.462h5.923v4.923h2.462v-4.923h5.923v-2.462z"></path>
            </symbol>
            <symbol id="icon-instagram" viewBox="0 0 20 20">
                <title>instagram</title>
                <path d="M17 1h-14c-1.1 0-2 0.9-2 2v14c0 1.101 0.9 2 2 2h14c1.1 0 2-0.899 2-2v-14c0-1.1-0.9-2-2-2zM9.984 15.523c3.059 0 5.538-2.481 5.538-5.539 0-0.338-0.043-0.664-0.103-0.984h1.581v7.216c0 0.382-0.31 0.69-0.693 0.69h-12.614c-0.383 0-0.693-0.308-0.693-0.69v-7.216h1.549c-0.061 0.32-0.104 0.646-0.104 0.984 0 3.059 2.481 5.539 5.539 5.539zM6.523 9.984c0-1.912 1.55-3.461 3.462-3.461s3.462 1.549 3.462 3.461-1.551 3.462-3.462 3.462c-1.913 0-3.462-1.55-3.462-3.462zM16.307 6h-1.615c-0.382 0-0.692-0.312-0.692-0.692v-1.617c0-0.382 0.31-0.691 0.691-0.691h1.615c0.384 0 0.694 0.309 0.694 0.691v1.616c0 0.381-0.31 0.693-0.693 0.693z"></path>
            </symbol>
            <symbol id="icon-chart-bars" viewBox="0 0 32 32">
                <title>chart-bars</title>
                <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z"></path>
            </symbol>
        </defs>
    </svg>


</div>
);
};

export default Listado;