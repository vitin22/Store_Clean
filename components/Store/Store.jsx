import React from 'react';
import Newletter from '@components/Main/NewLetter';
import Footer from '@components/Main/Footer';
import Breadcrumb from '@components/Main/Breadcrumb';
import Aside from '@components/Store/Aside';
import StoreData from '@components/Store/StoreData';
import Header from '@components/Main/Header';
import Nav from '@components/Main/Navigation';
import Script from '@components/Main/Script';

const registry = (props) => (
<div>	
	<Script/>
	<div>
		<Header />
		<Nav/>
		<Breadcrumb/>
		<div className="section">
			<div className="container">
				<div className="row">
					<Aside/>
					<StoreData id={props.id}/>
				</div>
			</div>
		</div>
		<Newletter/>
		<Footer />
		<Script/>

	</div>
</div>
);

export default registry;