import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';
import { ID_PRODUCT } from '@components/Apollo/jobs.query';
import Carousel from "react-multi-carousel";
import { Urlgraph } from '@components/Store/Datos';

const CustomDot = ({ onClick, ...rest }) => {
    const { onMove, index, active, carouselState: { currentSlide, deviceType }  } = rest;
    const carouselItems = [
      <img src="./img/thumbnail_product05.png" alt="" style={{width: 20% + 'em'}}/>];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button className={active ? 'active' : 'inactive'} onClick={() => onClick()}>
        {React.Children.toArray(carouselItems)[index]}
      </button>
      )
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

const Tiny = (props) => {
  
    const { loading, data } = useQuery(ID_PRODUCT, {
        variables: {id: props.id },
        client: client
    });
	
	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
    }

    var url = Urlgraph();
	  return(
        <div className="col-md-6">
            <link type="text/css" rel="stylesheet" href="css/styles.css"/>
  <Carousel 
  swipeable={false}
  draggable={false}
  showDots={true}
  //customDot={<CustomDot onClick/>}
  //arrows={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
                {data.productos.images.edges.map(
                    link => (
                        <div className="product-preview">
                            <img src={`${url}/media/${link.node.image}`} alt=""/>
                        </div>
                            )
                        )}
</Carousel>
		</div>
	  );
};

export default Tiny;