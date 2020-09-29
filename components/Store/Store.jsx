import React from 'react';
//import Newletter from '@components/Main/NewLetter';
import Footer from '@components/Footer';
//import Breadcrumb from '@components/Main/Breadcrumb';
//import Aside from '@components/Store/Aside';
import Listado from '@components/Store/Listado';
//import StoreData from '@components/Store/StoreData';
import Header from '@components/Header';
//import Nav from '@components/Main/Navigation';
import Script from '@components/Script';

const registry = (props) => (
<div>	
	<Script/>
	<div>
		<Header />
		
					<Listado id={props.id}/>
				</div>
				<Footer/>
			</div>
		


);

export default registry;