import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useRouter} from 'next/router';
import { client } from '@components/MyApollo/MyApollo';
import { AllSubcat } from '@components/Apollo/jobs.query';
import { Datos, Ruta} from '@components/Store/Datos';

const Category = () => {

	const router = useRouter();
	var datos = Datos();

	const { loading, data } = useQuery(AllSubcat, {
	client: client
	});

	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
	}
	
	return(
		<div className="checkbox-filter">

		{data.allSubcategorias.edges.map(
	  allcat => (  
				<div className="input-radio">
				<input type="radio" name="category" id={allcat.node.id}
				
				onClick={e => {
					datos['subcat']=allcat.node.id;
					var ruta = Ruta(datos);
					router.push(ruta);
				}}
				checked={allcat.node.id == router.query.subcat}
				/>
				<label htmlFor={allcat.node.id}>
					<span></span>
					{allcat.node.descripcion}
					<small>(120)</small>
				</label>
			</div>
			)
		)
		}	
			
		</div>
);
	};
export default Category;