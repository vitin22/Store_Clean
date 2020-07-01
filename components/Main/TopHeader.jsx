import React from 'react';

const TopHeader = () => (
	<div id="top-header">
		<div className="container">
			<ul className="header-links pull-left">
				<li><a href="#"><i className="fa fa-phone"></i> +021-15-51-94</a></li>
				<li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
				<li><a href="#"><i className="fa fa-map-marker"></i> Kaypi address</a></li>
			</ul>
			<ul className="header-links pull-right">
				<li><a href="#"><i className="fa fa-dollar"></i> USD</a></li>
				<li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
			</ul>
		</div>
	</div>
);

export default TopHeader;