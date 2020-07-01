import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ID_PRODUCT , All_Product } from '@components/Apollo/jobs.query'
import { client } from '@components/MyApollo/MyApollo';
import { useRouter } from 'next/router';

const Breadcrumb = (props) => {
	const { loading, data } = useQuery(All_Product, {
		client: client
	});	
	
	let product = "";
	let subcategoria = "";
	let categoria = "";
	
	const router = useRouter();
	let id = router.query.id;
	
	if(id){
		
    const { loading, data } = useQuery(ID_PRODUCT, {
        variables: {id: id },
        client: client
	});
	

	if(data){
		product = data.productos.descripcion;
		subcategoria = data.productos.subcategoria.descripcion;
		categoria = data.productos.subcategoria.categoria.descripcion;
	}
	
	}else{
		const { loading, data } = useQuery(ID_PRODUCT, {
			variables: {id: props.id },
			client: client
		});	
	}

	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
	}
	
	return(
	<div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="/"
						onClick={e => {
							e.preventDefault();
							router.push("/");
						}}
								>Home</a></li>
							<li><a href="/store"
						onClick={e => {
							e.preventDefault();
							router.push("/store");
						}}
						>All Categories</a></li>
							{categoria ?(<li><a href="#">{categoria}</a></li>):(<p/>)}	
							{subcategoria ?(<li><a href="#">{subcategoria}</a></li>):(<p/>)}	
							{product ?(<li><a href="#">{product}</a></li>):(<p/>)}							
						</ul>
					</div>
				</div>
			</div>
		</div>
);
};

export default Breadcrumb;