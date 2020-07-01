import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useRouter, Router} from 'next/router';
import { client } from '@components/MyApollo/MyApollo';
import { All_Categories, AllMarcas } from '@components/Apollo/jobs.query';
import { Datos, Ruta} from '@components/Store/Datos';

const Brand = () => {
	
	const router = useRouter();
	var datos = Datos();


	const { loading, data } = useQuery(AllMarcas, {
	client: client
	});

	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
	}
	
	return(
		<div className="aside">
		<h3 className="aside-title">Brand</h3>
		<div className="checkbox-filter">
			<div className="input-checkbox">
			{data.allMarcas.edges.map(
			product => {  
				return(
						<div className="input-radio">
						<input type="radio" name="brand" id={product.node.id}
						onClick={e => {
							datos['brand'] = product.node.id;
							var ruta = Ruta(datos);
							router.push(ruta);
						}}
						checked={product.node.id == router.query.brand}
						/>
						      
						<label htmlFor={product.node.id}>
							<span></span>
							{product.node.descripcion}
							<small>(120)</small>
						</label>
					</div>
				)
			}
			)
			}	
			</div>
		</div>
	</div>
);
	};
export default Brand;