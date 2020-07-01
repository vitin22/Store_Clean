import React from 'react';
import Carousel from "react-multi-carousel";
import { Services } from '@components/Apollo/jobs.query'
import { client } from '@components/MyApollo/MyApollo';
import { useQuery } from '@apollo/react-hooks';
import ProdS from '@components/Services/ProdS';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const SlideS = (props) => {
  
  // var data = props.datos;

  const { loading, data } = useQuery(Services, {
      client: client
  });
  

  if (loading || !data) {
    return <img src="img/giphy.gif"/>;
  }

  return (
    <div>
       {data.allServicios.edges.map(
      product => {
          return(
            <ProdS md='12' 
                  category={product.node.subcategoria.descripcion} 
                  idmarca={product.node.id} 
                  marca={product.node.descripcion} 
                  price={`$${product.node.precio}`} 
                  label={<span className="sale">-30%</span>}  />

          )     
      }
    )}
  <Carousel 
  swipeable={false}
  draggable={false}
  showDots={true}
  //customDot={<CustomDot onClick/>}
  //arrows={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  // autoPlay={props.deviceType !== "mobile" ? true : false}
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

    {data.allServicios.edges.map(
      product => {
          return(
            <ProdS md='12' 
                  category={product.node.subcategoria.descripcion} 
                  idmarca={product.node.id} 
                  marca={product.node.descripcion} 
                  price={`$${product.node.precioventa}`} 
                  label={<span className="sale">-30%</span>}  />

          )     
      }
    )}
    </Carousel>
    </div>
  );
};
 
export default SlideS;
