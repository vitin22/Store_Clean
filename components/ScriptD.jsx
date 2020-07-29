import React from 'react';
import Head from 'next/head';

const registry = () => (
	<Head>

		
		<script
		dangerouslySetInnerHTML={{
			__html: `
					let a = 1;
					functionCall();
				`,
		  }} src="vendors/jquery.min.js"></script>

		  <script
		dangerouslySetInnerHTML={{
			__html: `
					let a = 1;
					functionCall();
				`,
		  }} src="vendors/jquery-ui/jquery-ui.min.js"></script>

	<script 
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }}src="vendors/popper/popper.js"></script>

	<script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="vendors/bootstrap/js/bootstrap.js"></script>

	<script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="vendors/hc-sticky/hc-sticky.js"></script>

	<script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="vendors/isotope/isotope.pkgd.js"></script>
	
    <script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="vendors/slick/slick.js"></script>

    <script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="vendors/waypoints/jquery.waypoints.js"></script>

	<script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="vendors/magnific-popup/jquery.magnific-popup.js"></script>
	
    <script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="vendors/air-datepicker/js/datepicker.min.js"></script>

<script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="vendors/air-datepicker/js/i18n/datepicker.en.js"></script>

<script
	dangerouslySetInnerHTML={{
		__html: `
				let a = 1;
				functionCall();
			`,
	  }} src="js/app.js"></script>
	




    <meta httpEquiv="content-type" content="text/html; charset=utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>Dashboard - HTML Ecommerce</title>
	
	<link rel="stylesheet" type="text/css" href="vendors/font-awesome/css/fontawesome.css"/>
	<link rel="stylesheet" type="text/css" href="vendors/magnific-popup/magnific-popup.css"/>
	<link rel="stylesheet" type="text/css" href="vendors/slick/slick.css"/>
	<link rel="stylesheet" type="text/css" href="vendors/animate.css"/>
	<link rel="stylesheet" type="text/css" href="vendors/air-datepicker/css/datepicker.min.css"/>
	<link rel="stylesheet" type="text/css" href="vendors/jquery-ui/jquery-ui.min.css"/>
	<link rel="stylesheet" type="text/css" href="style.css"/>

	</Head>
);

export default registry;