import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';
import {  PagProd } from '@components/Apollo/jobs.query';
import { useRouter } from 'next/router';
import Show from './Show';
import Paginate from './Paginate';
import Datos, { ImageValidate } from '@components/Store/Datos';
import Cuadros from './Cuadros';
import List from './List';
import PanelI from './PanelI';
import Estilo from '@components/ScriptD'

const InfoData = (props) => {
	let image;

	const router = useRouter();
	var datos = Datos();
	
    const { loading, data } = useQuery(PagProd, {
        variables: {
			first: datos['show'] , 
			after: datos['page'],
			services_Categoria_Nombre: datos['q'],
			zipCode: datos['zipcode']
		},
        client: client
    });

	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
	}

	if(datos['list']=="4"){
		console.log(datos['list']);
	}
return(
<div id="store" className="page-container row">
	<div className="sidebar col-lg-4 order-l order-lg-0 mb-8 mb-lg-0">
	<PanelI/>
	</div>
	<div className="page-content col-12 col-lg-8 order-0 order-lg-1">
	<Show />
		<div className="row">
			{(() => {
				if(datos['list']=="4"){
					return(
					<Cuadros datos={data}/>	
					)
				}else{
					return(
					<List datos={data}/>	 
					)
				}
			})()}			
		</div>
		</div>
	<Paginate/>
</div>
);
};

export default InfoData;