import React from 'react';
import {useRouter} from 'next/router'
import { Urlgraph } from '@components/Store/Datos';

const ProdS = (props) => {

	const router = useRouter();
	var url = Urlgraph();

		
    console.log(props);
	return(
	<div className={`col-md-${props.md}`}>
<div className="product">
	<div className="product-img">
		<div className="product-label">
			{props.label}			
		</div>
	</div>
	<div className="product-body">
		<p className="product-category">{props.category}</p>
		<h3 className="product-name"><a href={`product?id=${props.idmarca}`}>
										{props.marca}</a></h3>
		<h4 className="product-price">
			{props.price} 
		</h4>
		<div className="product-rating">
		</div>
		<div className="product-btns">
			<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
			<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
			<button className="quick-view" ><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
		</div>
	</div>
	<div className="add-to-cart">
		<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
	</div>
</div>
</div>
)
									};

export default ProdS;