import React from 'react';
import {useRouter} from 'next/router'
import { Urlgraph } from '@components/Info/Datos';
import Estilo from '@components/ScriptD'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Prod = (props) => {

	const router = useRouter();
	var url = Urlgraph();

	return(
		<div>
			
		<Estilo/>
		
		<div className="mb-6">
                                <div className="store media align-items-stretch bg-white">
                                    <div className="position-relative store-image"
                                         styles="background-image: url('images/shop/hotels-shop-4.jpg')">
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
                                        <a href={`product?id=${props.idprodserv}`}
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
		
	

</div>
)

									};

export default Prod;


