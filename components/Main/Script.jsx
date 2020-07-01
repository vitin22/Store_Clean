import React from 'react';
import Head from 'next/head';

const Script = () => (
	<Head>
	<script
	dangerouslySetInnerHTML={{
	  __html: `
			  let a = 1;
			  functionCall();
		  `,
	}}
	src="js/jquery.min.js"></script>
<script
	dangerouslySetInnerHTML={{
	  __html: `
			  let a = 1;
			  functionCall();
		  `,
	}}
	src="js/bootstrap.min.js"></script>
<script
	dangerouslySetInnerHTML={{
	  __html: `
			  let a = 1;
			  functionCall();
		  `,
	}}
	src="js/slick.min.js"></script>
<script
	dangerouslySetInnerHTML={{
	  __html: `
			  let a = 1;
			  functionCall();
		  `,
	}}
	src="js/nouislider.min.js"></script>
<script
	dangerouslySetInnerHTML={{
	  __html: `
			  let a = 1;
			  functionCall();
		  `,
	}}
	src="js/jquery.zoom.min.js"></script>
<script
	dangerouslySetInnerHTML={{
	  __html: `
			  let a = 1;
			  functionCall();
		  `,
	}}
	src="js/main.js"></script>
	{/* <script>
		var x = document.getElementsByClassName("products-slick-nav")[0].id; 
		alert(x);
	</script> */}
		<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>Kaypi - HTML Ecommerce</title>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet"/>
	<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css"/>
	<link type="text/css" rel="stylesheet" href="css/slick.css"/>
	<link type="text/css" rel="stylesheet" href="css/slick-theme.css"/>
	<link type="text/css" rel="stylesheet" href="css/nouislider.min.css"/>
	<link rel="stylesheet" href="css/font-awesome.min.css"/>
	<link type="text/css" rel="stylesheet" href="css/style.css"/>
	</Head>
);

export default Script;