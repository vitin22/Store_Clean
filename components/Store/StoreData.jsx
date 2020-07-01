import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';
import { All_Product, AllProduct } from '@components/Apollo/jobs.query';
import { useRouter } from 'next/router';
import Show from './Show';
import Paginate from './Paginate';
import Datos, { ImageValidate } from '@components/Store/Datos';
import Cuadros from './Cuadros';
import List from './List';

const StoreData = (props) => {
	let image;

	const router = useRouter();
	var datos = Datos();
	
    const { loading, data } = useQuery(AllProduct, {
        variables: {
			first: datos['show'] , 
			after: datos['page'],
			descripcion: datos['q'],
			subcat: datos['subcat'],
			marca: datos['brand']
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
<div id="store" className="col-md-9">
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
	<Paginate/>
</div>
);
};

export default StoreData;