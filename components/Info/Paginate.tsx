import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';
import { PagSearch } from '@components/Apollo/jobs.query';
import { Datos, Ruta, Pages} from '@components/Info/Datos';
import {useRouter} from 'next/router';

const Paginate = () => {
	const router = useRouter();

	var datos = Datos();

	const { loading, data } = useQuery(PagSearch, {
        variables: {
			first: datos['show'], 
			after: datos['page'],
			//services_Categoria_Nombre: datos['q'],
			zipCode: datos['zipcode']
		},
        client: client
	});
	
	// for (let index = 0; index < array.length; index++) {
	// 	const element = array[index];
		
	// }


	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
	}
	
	let pdata;
	var state = 0;
	var pli = Array();

	pdata = datos['page'];
	pli[state]=pdata;
	// console.log('pdata');

	 while (state!= 3) {
		state++;
		 pdata = Pages(pdata);
		//  if(pdata == null){
		//  	 state = 3;
		//  }else{
		// 	pli[state]=pdata;
		//  }

		 pli[state]=pdata;
	  }
	  
	  let estado = -1;
	  let numb = 1;

	return(
		<div className="store-filter clearfix">
			<span className="store-qty">Showing 20-100 products</span>
			<ul className="store-pagination">
				<li className="active">1</li>
				{pli.map(
					li => {
						estado++;
						numb++;
						datos['page'] = Pages(pli[estado]);

						var ruta = Ruta(datos);
						return(
						<li>			<a href={ruta}
						onClick={e => {
							e.preventDefault();
							router.push(ruta);
						}}
						>{numb}</a></li>
						);
					}
				)}
				<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
			</ul>
		</div>
);
	};
export default Paginate;