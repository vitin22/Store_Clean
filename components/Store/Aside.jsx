import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useRouter} from 'next/router';
import { client } from '@components/MyApollo/MyApollo';
import { All_Categories, AllMarcas } from '@components/Apollo/jobs.query';
import Category from './Category';
import Brand from './Brand';

const bond = () => {
		
	const route = useRouter();
	const { loading, data } = useQuery(AllMarcas, {
	client: client
	});

	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
	}
	
	return(
	<div id="aside" className="col-md-3">
		
	<div className="aside">
		<h3 className="aside-title">Categories</h3>
		<Category />
	</div>
	{/* <!--/aside Widget -->*/}

	{/* <!--aside Widget -->*/}
	<div className="aside">
		<h3 className="aside-title">Price</h3>
		<div className="price-filter">
			<div id="price-slider"></div>
			<div className="input-number price-min">
				<input id="price-min" type="number"/>
				<span className="qty-up">+</span>
				<span className="qty-down">-</span>
			</div>
			<span>-</span>
			<div className="input-number price-max">
				<input id="price-max" type="number"/>
				<span className="qty-up">+</span>
				<span className="qty-down">-</span>
			</div>
		</div>
	</div>
	{/* <!--/aside Widget -->*/}

	<Brand />

	{/* <!--aside Widget -->*/}
	<div className="aside">
		<h3 className="aside-title">Top selling</h3>
		<div className="product-widget">
			<div className="product-img">
				<img src="./img/product01.png" alt=""/>
			</div>
			<div className="product-body">
				<p className="product-category">Category</p>
				<h3 className="product-name"><a href="#">product name goes here</a></h3>
				<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
			</div>
		</div>

		<div className="product-widget">
			<div className="product-img">
				<img src="./img/product02.png" alt=""/>
			</div>
			<div className="product-body">
				<p className="product-category">Category</p>
				<h3 className="product-name"><a href="#">product name goes here</a></h3>
				<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
			</div>
		</div>

		<div className="product-widget">
			<div className="product-img">
				<img src="./img/product03.png" alt=""/>
			</div>
			<div className="product-body">
				<p className="product-category">Category</p>
				<h3 className="product-name"><a href="#">product name goes here</a></h3>
				<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
			</div>
		</div>
	</div>
	{/* <!--/aside Widget -->*/}
</div>
);
	};
export default bond;