import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class SliderMioTres extends Component {
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
<div className="box">
                                        <div className="card testimonial h-100 border-0 bg-transparent">
                                            <a href="#" className="author-image">
                                                <img src="images/listing/client-1.png" alt="Testimonial"
                                                     className="rounded-circle"/>
                                            </a>
                                            <div className="card-body bg-white">
                                                <div className="testimonial-icon text-right">
                                                    <svg className="icon icon-quote">
                                                        <use xlinkHref="#icon-quote"></use>
                                                    </svg>
                                                </div>
                                                <ul className="list-inline mb-4 d-flex align-items-end flex-wrap">
                                                    <li className="list-inline-item">
                                                        <a href="#"
                                                           className="font-size-lg text-dark font-weight-semibold d-inline-block">Kanye
                                                            West
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span className="h5 font-weight-light mb-0 d-inline-block ml-1 text-gray">/</span>
                                                    </li>
                                                    <li>
                                                    <span className="text-gray">
                                                        CEO at Google INC
                                                    </span>
                                                    </li>
                                                </ul>
                                                <div className="card-text text-gray pr-4">Sed elit quam, iaculis
                                                    sed
                                                    semper sit amet
                                                    udin
                                                    vitae nibh.<br/> at magna akal semperFusce commodo molestie
                                                    luctus.Lorem ipsum Dolor tusima olatiup.
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                    <div className="box">
                                        <div className="card testimonial h-100 border-0 bg-transparent">
                                            <a href="#" className="author-image">
                                                <img src="images/listing/client-2.png" alt="Testimonial"
                                                     className="rounded-circle"/>
                                            </a>
                                            <div className="card-body bg-white">
                                                <div className="testimonial-icon text-right">
                                                    <svg className="icon icon-quote">
                                                        <use xlinkHref="#icon-quote"></use>
                                                    </svg>
                                                </div>
                                                <ul className="list-inline mb-4 d-flex align-items-end flex-wrap">
                                                    <li className="list-inline-item">
                                                        <a href="#"
                                                           className="font-size-lg text-dark font-weight-semibold d-inline-block">Anabella
                                                            Kleva
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span className="h5 font-weight-light mb-0 d-inline-block ml-1 text-gray">/</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                    <span className="text-gray">
                                                        Managerment at Envato
                                                    </span>
                                                    </li>

                                                </ul>
                                                <div className="card-text text-gray pr-4">Sed elit quam, iaculis
                                                    sed
                                                    semper sit amet
                                                    udin
                                                    vitae nibh.<br/> at magna akal semperFusce commodo molestie
                                                    luctus.Lorem ipsum Dolor tusima olatiup.
                                                </div>
                                            </div>
                                        </div>
                                    </div>






<div className="box">
                                        <div className="card testimonial h-100 border-0 bg-transparent">
                                            <a href="#" className="author-image">
                                                <img src="images/listing/client-1.png" alt="Testimonial"
                                                     className="rounded-circle"/>
                                            </a>
                                            <div className="card-body bg-white">
                                                <div className="testimonial-icon text-right">
                                                    <svg className="icon icon-quote">
                                                        <use xlinkHref="#icon-quote"></use>
                                                    </svg>
                                                </div>
                                                <ul className="list-inline mb-4 d-flex align-items-end flex-wrap">
                                                    <li className="list-inline-item">
                                                        <a href="#"
                                                           className="font-size-lg text-dark font-weight-semibold d-inline-block">Kanye
                                                            West
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span className="h5 font-weight-light mb-0 d-inline-block ml-1 text-gray">/</span>
                                                    </li>
                                                    <li>
                                                    <span className="text-gray">
                                                        CEO at Google INC
                                                    </span>
                                                    </li>
                                                </ul>
                                                <div className="card-text text-gray pr-4">Sed elit quam, iaculis
                                                    sed
                                                    semper sit amet
                                                    udin
                                                    vitae nibh.<br/> at magna akal semperFusce commodo molestie
                                                    luctus.Lorem ipsum Dolor tusima olatiup.
                                                </div>
                                            </div>
                                        </div>
                                    </div>






                                    <div className="box">
                                        <div className="card testimonial h-100 border-0 bg-transparent">
                                            <a href="#" className="author-image">
                                                <img src="images/listing/client-2.png" alt="Testimonial"
                                                     className="rounded-circle"/>
                                            </a>
                                            <div className="card-body bg-white">
                                                <div className="testimonial-icon text-right">
                                                    <svg className="icon icon-quote">
                                                        <use xlinkHref="#icon-quote"></use>
                                                    </svg>
                                                </div>
                                                <ul className="list-inline mb-4 d-flex align-items-end flex-wrap">
                                                    <li className="list-inline-item">
                                                        <a href="#"
                                                           className="font-size-lg text-dark font-weight-semibold d-inline-block">Anabella
                                                            Kleva
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span className="h5 font-weight-light mb-0 d-inline-block ml-1 text-gray">/</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                    <span className="text-gray">
                                                        Managerment at Envato
                                                    </span>
                                                    </li>

                                                </ul>
                                                <div className="card-text text-gray pr-4">Sed elit quam, iaculis
                                                    sed
                                                    semper sit amet
                                                    udin
                                                    vitae nibh.<br/> at magna akal semperFusce commodo molestie
                                                    luctus.Lorem ipsum Dolor tusima olatiup.
                                                </div>
                                            </div>
                                        </div>
                                    </div>






</Carousel>
  );
}
}

