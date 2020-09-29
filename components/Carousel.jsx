import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class SliderMio extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    
    return (
      
      <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
      
                                <div className="card border-0">
                                    <a className="hover-scale" href="explore-sidebar-grid.html">
                                        <img src="images/listing/feature-detination-1.jpg" alt="San Francisco"
                                             className="image"/>
                                    </a>
                                    <div className="card-body px-0 pt-4">
                                        <h5 className="card-title mb-0">
                                            <a href="explore-sidebar-grid.html"
                                               className="font-size-h5 link-hover-dark-primary">
                                                San Francisco</a>
                                        </h5>
    
                                        <span className="card-text font-size-md">
                        20 Listing
                      </span>
                                    </div>
    
                                
      </div>
      </div>
    
      <div>
      
                                <div className="card border-0">
                                    <a className="hover-scale" href="explore-sidebar-grid.html">
                                        <img src="images/listing/feature-detination-2.jpg" alt="London" className="image"/>
                                    </a>
                                    <div className="card-body px-0 pt-4">
                                        <h5 className="mb-0 card-title">
                                            <a href="explore-sidebar-grid.html"
                                               className="font-size-h5 link-hover-dark-primary">
                                                London
                                            </a>
                                        </h5>
    
                                        <span className="card-text font-size-md">
                        6 Listing
                      </span>
                                    </div>
    
                                </div>
                            
      </div>
    
      <div>
    
                                <div className="card border-0">
                                    <a className="hover-scale" href="explore-sidebar-grid.html">
                                        <img src="images/listing/feature-detination-3.jpg" alt="Tokyo" className="image"/>
                                    </a>
                                    <div className="card-body px-0 pt-4">
                                        <h5 className="mb-0 card-title">
                                            <a href="explore-sidebar-grid.html"
                                               className="font-size-h5 link-hover-dark-primary">
                                                Tokyo
                                            </a>
                                        </h5>
                                        <span className="card-text font-size-md">
                        12 Listing
                      </span>
                                    </div>
                                </div>
                            
      </div>
    
      <div>
      
                                <div className="card border-0">
                                    <a className="hover-scale" href="explore-sidebar-grid.html">
                                        <img src="images/listing/feature-detination-4.jpg" alt="Miami" className="image"/>
                                    </a>
                                    <div className="card-body px-0 pt-4">
                                        <h5 className="mb-0 card-title">
                                            <a href="explore-sidebar-grid.html"
                                               className="font-size-h5 link-hover-dark-primary">
                                                Miami
                                            </a>
                                        </h5>
                                        <span className="card-text font-size-md">
                        4 Listing
                      </span>
                                    </div>
    
                                </div>
                            
      </div>
    </Carousel>
      
    );
  }
}