import React from 'react';
import ProductW from '@components/Slide/ProductW';

const bond = () => (
<div className="section">
<div className="container">
	<div className="row">
		<div className="col-md-4 col-xs-6">
			<div className="section-title">
				<h4 className="title">Top selling</h4>
				<div className="section-nav">
					<div id="slick-nav-3" className="products-slick-nav"></div>
				</div>
			</div>

			<div className="products-widget-slick" data-nav="#slick-nav-3">
					<ProductW />
					<ProductW />
					<ProductW />
			</div>
		</div>

		<div className="col-md-4 col-xs-6">
			<div className="section-title">
				<h4 className="title">Top selling</h4>
				<div className="section-nav">
					<div id="slick-nav-4" className="products-slick-nav"></div>
				</div>
			</div>

			<div className="products-widget-slick" data-nav="#slick-nav-4">
					<ProductW />
			</div>
		</div>

		<div className="clearfix visible-sm visible-xs"></div>

		<div className="col-md-4 col-xs-6">
			<div className="section-title">
				<h4 className="title">Top selling</h4>
				<div className="section-nav">
					<div id="slick-nav-5" className="products-slick-nav"></div>
				</div>
			</div>

			<div className="products-widget-slick" data-nav="#slick-nav-5">
				<div>
					<ProductW />
				</div>
			</div>
		</div>

	</div>
	{/* <!-- /row --> */}
</div>
{/* <!-- /container --> */}
</div>
);

export default bond;