import React from 'react';
import Script from '@components/Main/Script';
import Header from '@components/Main/Header';
import Nav from '@components/Main/Navigation';
import Breadcrumb from '@components/Main/Breadcrumb';
import SeeProduct from '@components/Product/SeeProduct';
import Newletter from '@components/Main/NewLetter';
import Footer from '@components/Main/Footer';

const Producto = (props) => (
<div>
	
		<Script/>
		<Header />
		<Nav/>
		<Breadcrumb id={props.id} />
		<SeeProduct id={props.id} />	
		<Newletter/>
		<Footer />
</div>
);

export default Producto;