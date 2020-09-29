import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class SliderMioDos extends Component {
  render() {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

return (
<Carousel responsive={responsive}>
<div>
<div className="box" >
                                  <div className="store card border-0 rounded-0">
                                      <div className="position-relative store-image">
                                          <a href="listing-details-full-gallery.html">
                                              <img src="images/shop/shop-1.jpg" alt="store 1"
                                                   className="card-img-top rounded-0"/>
                                          </a>
                                          <div className="image-content position-absolute d-flex align-items-center">
                                              <div className="content-left">
                                                  <div className="badge badge-primary">Featured</div>
                                              </div>
                                              <div className="content-right ml-auto d-flex w-lg show-link">
                                                  <a href="images/shop/full-shop-1.jpg" className="item viewing"
                                                     data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Quickview" data-gtf-mfp="true">
                                                      <svg className="icon icon-expand">
                                                          <use xlinkHref="#icon-expand"/>
                                                      </svg>
                                                  </a>
                                                  <a href="#" className="item marking" data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                                  <a href="#" className="item" data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Compare">
                                                      <svg className="icon icon-chart-bars">
                                                          <use xlinkHref="#icon-chart-bars"/>
                                                      </svg>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body px-0 pb-0 pt-3">
                                          <a href="listing-details-full-gallery.html"
                                             className="card-title h5 text-dark d-inline-block mb-2"><span
                                                  className="letter-spacing-25">Roman
                      Kraft Hotel</span></a>
                                          <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                              <li className="list-inline-item"><span
                                                      className="badge badge-success d-inline-block mr-1">5.0</span><span>4 rating</span>
                                              </li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><span className="mr-1">From</span><span
                                                      className="text-danger font-weight-semibold">$56.00</span></li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item">
                                                  <a href="#" className="link-hover-secondary-primary">
                                                      <svg className="icon icon-bed">
                                                          <use xlinkHref="#icon-bed"/>
                                                      </svg>
                                                      <span>Hotel</span>
                                                  </a>
                                              </li>
                                          </ul>
                                          <div className="media">
                                              <a href="#" className="d-inline-block mr-3"><img
                                                      src="images/listing/testimonial-1.png"
                                                      alt="testimonial" className="rounded-circle"/>
                                              </a>
                                              <div className="media-body lh-14 font-size-sm">Overlooking Bloomsbury's
                                                  Russell Square
                                                  and
                                                  a 2 minutes' walk from the tube station of the same name...
                                              </div>
                                          </div>
                                      </div>
                                      <ul className="list-inline card-footer rounded-0 border-top pt-3 mt-5 bg-transparent px-0 store-meta d-flex align-items-center">
                                          <li className="list-inline-item">
                                              <span className="d-inline-block mr-1">
                      <i className="fal fa-map-marker-alt">
                      </i>
                        </span>
                                              <a href="#"
                                                 className="text-secondary text-decoration-none link-hover-secondary-blue">
                                                  San Francisco, CA</a>
                                          </li>
                                          <li className="list-inline-item separate"></li>
                                          <li className="list-inline-item">
                                              <span className="text-green">Open now!</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
</div>

<div>
<div className="box" >
                                  <div className="store card border-0 rounded-0">
                                      <div className="position-relative store-image">
                                          <a href="listing-details-full-gallery.html">
                                              <img src="images/shop/shop-2.jpg" alt="store 2"
                                                   className="card-img-top rounded-0"/>
                                          </a>
                                          <div className="image-content position-absolute d-flex align-items-center">
                                              <div className="content-left">
                                                  <div className="badge badge-primary">Best Rate</div>
                                              </div>
                                              <div className="content-right ml-auto d-flex show-link">
                                                  <a href="images/shop/full-shop-2.jpg" data-gtf-mfp="true"
                                                     className="item viewing" data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Quick view">
                                                      <svg className="icon icon-expand">
                                                          <use xlinkHref="#icon-expand"/>
                                                      </svg>
                                                  </a>
                                                  <a href="#" className="item marking" data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body px-0 pb-0 pt-3">
                                          <a href="listing-details-full-image.html"
                                             className="card-title h5 text-dark d-inline-block mb-2"><span
                                                  className="letter-spacing-25">Karly Gomez Cake</span>
                                              <span className="check">
                  <svg className="icon icon-check-circle"><use xlinkHref="#icon-check-circle"/>

                                      </svg>
                </span>
                                          </a>
                                          <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                              <li className="list-inline-item"><span
                                                      className="badge badge-success d-inline-block mr-1">5.0</span><span
                                              >8 rating</span>
                                              </li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><span className="mr-1">From</span><span
                                                      className="text-danger font-weight-semibold">$12.00</span></li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><a href="#"
                                                                              className="link-hover-secondary-primary">
                                                  <svg className="icon icon-pizza">
                                                      <use xlinkHref="#icon-pizza"/>
                                                  </svg>
                                                  <span>Food</span>
                                              </a></li>
                                          </ul>

                                          <div className="media">
                                              <a href="#" className="d-inline-block mr-3"><img
                                                      src="images/listing/testimonial-2.png"
                                                      alt="testimonial" className="rounded-circle"/>
                                              </a>
                                              <div className="media-body lh-14 font-size-sm">They specialize in makgeolli
                                                  at this
                                                  Korean-style pub in Seorae Village. And they use...
                                              </div>
                                          </div>
                                      </div>
                                      <ul className="list-inline card-footer rounded-0 border-top pt-3 mt-5 bg-transparent px-0 store-meta d-flex align-items-center">
                                          <li className="list-inline-item">
                      <span className="d-inline-block mr-1">
                      <i className="fal fa-map-marker-alt">
                      </i>
                    </span>
                                              <a href="#"
                                                 className="text-secondary text-decoration-none address">Florencia,
                                                  Italy</a>
                                          </li>
                                          <li className="list-inline-item separate"></li>
                                          <li className="list-inline-item">
                                              <span className="text-danger">Close now!</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
</div>

<div>
<div className="box" >
                                  <div className="store card border-0 rounded-0">
                                      <div className="position-relative store-image">
                                          <a href="listing-details-full-gallery.html">
                                              <img src="images/shop/shop-3.jpg" alt="store 1"
                                                   className="card-img-top rounded-0"/>
                                          </a>
                                          <div className="image-content position-absolute d-flex align-items-center">
                                              <div className="content-left">
                                                  <div className="badge badge-primary">Most view</div>
                                              </div>
                                              <div className="content-right ml-auto d-flex show-link">
                                                  <a href="images/shop/full-shop-3.jpg" className="item viewing"
                                                     data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Quick view" data-gtf-mfp="true">
                                                      <svg className="icon icon-expand">
                                                          <use xlinkHref="#icon-expand"/>
                                                      </svg>
                                                  </a>
                                                  <a href="#" className="item marking" data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body px-0 pb-0 pt-3">
                                          <a href="listing-details-full-gallery.html"
                                             className="card-title h5 text-dark d-inline-block mb-2"><span
                                                  className="letter-spacing-25">Roman
                      Kraft Hotel</span></a>
                                          <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                              <li className="list-inline-item"><span
                                                      className="badge badge-warning d-inline-block mr-1">4.3</span><span
                                              >4 rating</span>
                                              </li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><span className="mr-1">From</span><span
                                                      className="text-danger font-weight-semibold">$10.00</span></li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><a href="#"
                                                                              className="link-hover-secondary-primary">
                                                  <svg className="icon icon-pizza">
                                                      <use xlinkHref="#icon-pizza"/>
                                                  </svg>
                                                  <span>Food</span>
                                              </a></li>
                                          </ul>
                                          <div className="media">
                                              <a href="#" className="d-inline-block mr-3"><img
                                                      src="images/listing/testimonial-5.png"
                                                      alt="testimonial" className="rounded-circle"/>
                                              </a>
                                              <div className="media-body lh-14 font-size-sm">After a yoga className changed
                                                  her life, Maz
                                                  became
                                                  vegan, launched...
                                              </div>
                                          </div>
                                      </div>
                                      <ul className="list-inline card-footer rounded-0 border-top pt-3 mt-5 bg-transparent px-0 store-meta d-flex align-items-center">
                                          <li className="list-inline-item">
                      <span
                                                      className="d-inline-block mr-1"><i
                                                      className="fal fa-map-marker-alt">
                    </i>
                      </span>
                                              <a href="#"
                                                 className="text-secondary text-decoration-none address">Miami,
                                                  FL</a>
                                          </li>
                                          <li className="list-inline-item separate"></li>
                                          <li className="list-inline-item">
                                              <span className="text-danger">Close now!</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
</div>

<div>
<div className="box" >
                                  <div className="store card border-0 rounded-0">
                                      <div className="position-relative store-image">
                                          <a href="listing-details-full-gallery.html">
                                              <img src="images/shop/shop-4.jpg" alt="store 1"
                                                   className="card-img-top rounded-0"/>
                                          </a>
                                          <div className="image-content position-absolute d-flex align-items-center">
                                              <div className="content-left">
                                                  <div className="badge badge-primary">Featured</div>
                                              </div>
                                              <div className="content-right ml-auto d-flex show-link">
                                                  <a href="images/shop/full-shop-4.jpg" className="item viewing"
                                                     data-toggle="tooltip" data-gtf-mfp="true"
                                                     data-placement="top"
                                                     title="Quick view">
                                                      <svg className="icon icon-expand">
                                                          <use xlinkHref="#icon-expand"/>
                                                      </svg>
                                                  </a>
                                                  <a href="#" className="item marking" data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body px-0 pb-0 pt-3">
                                          <a href="listing-details-full-image.html"
                                             className="card-title h5 text-dark d-inline-block mb-2"><span
                                                  className="letter-spacing-25">Red Wings Shoes Store</span></a>
                                          <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                              <li className="list-inline-item"><span
                                                      className="badge badge-success d-inline-block mr-1">5.0</span><span
                                              >6 rating</span>
                                              </li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><span className="mr-1">From</span><span
                                                      className="text-danger font-weight-semibold">$75.00</span></li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><a href="#"
                                                                              className="link-hover-secondary-primary">
                                                  <svg className="icon icon-bag">
                                                      <use xlinkHref="#icon-bag"/>
                                                  </svg>
                                                  <span>Shopping</span>
                                              </a></li>
                                          </ul>
                                          <div className="media">
                                              <a href="#" className="d-inline-block mr-3"><img
                                                      src="images/listing/testimonial-3.png"
                                                      alt="testimonial" className="rounded-circle"/>
                                              </a>
                                              <div className="media-body lh-14 font-size-sm">Established in 1895, these
                                                  style
                                                  merchants have
                                                  set the standard in Sydney suiting for generations...
                                              </div>
                                          </div>
                                      </div>
                                      <ul className="list-inline card-footer rounded-0 border-top pt-3 mt-5 bg-transparent px-0 store-meta d-flex align-items-center">
                                          <li className="list-inline-item">
                      <span
                                                      className="d-inline-block mr-1"><i
                                                      className="fal fa-map-marker-alt">
                    </i>
                      </span>
                                              <a href="#"
                                                 className="text-secondary text-decoration-none address">
                                                  Paris, France</a>
                                          </li>
                                          <li className="list-inline-item separate"></li>
                                          <li className="list-inline-item">
                                              <span className="text-danger">Close now!</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
</div>

<div>
<div className="box">
                                  <div className="store card border-0 rounded-0">
                                      <div className="position-relative store-image">
                                          <a href="listing-details-full-gallery.html">
                                              <img src="images/shop/shop-5.jpg" alt="store 1"
                                                   className="card-img-top rounded-0"/>
                                          </a>
                                          <div className="image-content position-absolute d-flex align-items-center">
                                              <div className="content-left">
                                                  <div className="badge badge-primary">AD</div>
                                              </div>
                                              <div className="content-right ml-auto d-flex show-link">
                                                  <a href="images/shop/full-shop-5.jpg" className="item viewing"
                                                     data-toggle="tooltip"
                                                     data-placement="top" data-gtf-mfp="true"
                                                     title="Quick view">
                                                      <svg className="icon icon-expand">
                                                          <use xlinkHref="#icon-expand"/>
                                                      </svg>
                                                  </a>
                                                  <a href="#" className="item marking" data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body px-0 pb-0 pt-3">
                                          <a href="listing-details-full-image.html"
                                             className="card-title h5 text-dark d-inline-block mb-2"><span
                                                  className="letter-spacing-25">Packing & Delivery Service</span>
                                              <span className="check">
                  <svg className="icon icon-check-circle"><use xlinkHref="#icon-check-circle"/>

                                      </svg>
                </span>
                                          </a>
                                          <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                              <li className="list-inline-item"><span
                                                      className="badge badge-warning d-inline-block mr-1">4.5</span><span
                                              >2 rating</span>
                                              </li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><span
                                                      className="text-danger font-weight-semibold">Get a quote</span>
                                              </li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><a href="#"
                                                                              className="link-hover-secondary-primary">
                                                  <svg className="icon icon-cog">
                                                      <use xlinkHref="#icon-cog"/>
                                                  </svg>
                                                  <span>Service</span>
                                              </a></li>
                                          </ul>
                                          <div className="media">
                                              <a href="#" className="d-inline-block mr-3"><img
                                                      src="images/listing/testimonial-2.png"
                                                      alt="testimonial" className="rounded-circle"/>
                                              </a>
                                              <div className="media-body lh-14 font-size-sm">Most items can be packed
                                                  securely in
                                                  these
                                                  boxes, which are available in several sizes...
                                              </div>
                                          </div>
                                      </div>
                                      <ul className="list-inline card-footer rounded-0 border-top pt-3 mt-5 bg-transparent px-0 store-meta d-flex align-items-center">
                                          <li className="list-inline-item">
                      <span
                                                      className="d-inline-block mr-1"><i
                                                      className="fal fa-map-marker-alt">
                    </i>
                      </span>
                                              <a href="#"
                                                 className="text-secondary text-decoration-none address">New
                                                  York, USA</a>
                                          </li>
                                          <li className="list-inline-item separate"></li>
                                          <li className="list-inline-item">
                                              <span className="text-green">Open now!</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
</div>

<div>
<div className="box">
                                  <div className="store card border-0 rounded-0">
                                      <div className="position-relative store-image">
                                          <a href="listing-details-full-gallery.html">
                                              <img src="images/shop/shop-1.jpg" alt="store 1"
                                                   className="card-img-top rounded-0"/>
                                          </a>
                                          <div className="image-content position-absolute d-flex align-items-center">
                                              <div className="content-left">
                                                  <div className="badge badge-primary">Featured</div>
                                              </div>
                                              <div className="content-right ml-auto d-flex show-link">
                                                  <a href="images/shop/full-shop-1.jpg" className="item viewing"
                                                     data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Quickview" data-gtf-mfp="true">
                                                      <svg className="icon icon-expand">
                                                          <use xlinkHref="#icon-expand"/>
                                                      </svg>
                                                  </a>
                                                  <a href="#" className="item marking" data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body px-0 pb-0 pt-3">
                                          <a href="listing-details-full-gallery.html"
                                             className="card-title h5 text-dark d-inline-block mb-2"><span
                                                  className="letter-spacing-25">Roman
                      Kraft Hotel</span></a>
                                          <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                              <li className="list-inline-item"><span
                                                      className="badge badge-success d-inline-block mr-1">5.0</span><span
                                              >4 rating</span>
                                              </li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><span className="mr-1">From</span><span
                                                      className="text-danger font-weight-semibold">$9.00</span></li>
                                              <li className="list-inline-item separate"></li>
                                              <li className="list-inline-item"><a href="#"
                                                                              className="link-hover-secondary-primary">
                                                  <svg className="icon icon-pizza">
                                                      <use xlinkHref="#icon-pizza"/>
                                                  </svg>
                                                  <span>Food</span>
                                              </a></li>
                                          </ul>

                                          <div className="media">
                                              <a href="#" className="d-inline-block mr-3"><img
                                                      src="images/listing/testimonial-1.png"
                                                      alt="testimonial" className="rounded-circle"/>
                                              </a>
                                              <div className="media-body lh-14 font-size-sm">They specialize in makgeolli
                                                  at this
                                                  Korean-style
                                                  pub in Seorae Village. And they use...
                                              </div>
                                          </div>
                                      </div>
                                      <ul className="list-inline card-footer rounded-0 border-top pt-3 mt-5 bg-transparent px-0 store-meta d-flex align-items-center">
                                          <li className="list-inline-item">
                      <span
                                                      className="d-inline-block mr-1"><i
                                                      className="fal fa-map-marker-alt">
                    </i>
                      </span>
                                              <a href="#"
                                                 className="text-secondary text-decoration-none address py-1">Ubud,
                                                  Indonesia</a>
                                          </li>
                                          <li className="list-inline-item separate"></li>
                                          <li className="list-inline-item">
                                              <span className="text-danger">Close now!</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
</div>
</Carousel>
  );
}
}

