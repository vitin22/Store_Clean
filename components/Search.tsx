import React, { useState } from 'react';
import {useRouter, Router} from 'next/router';
import ClearFix from './Main/ClearFix';
import { useQuery } from '@apollo/react-hooks';
//import { PROD_QUERY } from './Apollo/jobs.query';
import { client } from './MyApollo/MyApollo';
import Select from './Main/Select';
import { Datos, Ruta} from './Store/Datos';
import { All_CATSERV, All_CONDADO, ALL_ZIP } from '@components/Apollo/jobs.query';
import withApollo from './Apollo/apollo';

let num
let bandera=1

const Search = () => {
  let input;
  if(num == undefined){
	  num = "";
  }
  
  const ruta = "/store"
  const route = useRouter();

  let query;

	const [catserv, setcatserv] = useState('null');
	const [condado, setcondado] = useState('null');
    const [zipcode, setzipcode] = useState('');
	
	const router = useRouter();
	var datos = Datos();
		

	{/*{if ((bandera!=1) && (route.pathname==ruta)){
		setmarca_Descripcion(marca)
		bandera=1
	}
	
	}
*/}
    

	  const { loading: load, data: dato } = useQuery(All_CATSERV, {
	});
	const { loading: loade, data: datoe } = useQuery(All_CONDADO, {
	});
	const { loading: loadz, data: datoz } = useQuery(ALL_ZIP, {
		variables: {condado}
	});


	const displayZipcode = () => {

		if(load){
		  return( <option disabled>Loading Zipcode</option>);
		}
		else
		{
		  if(datoz!=null){
		  return datoz.allCiudad.edges.map(link => {
			
			  return(
			<option value={link.node.zipCode}>{link.node.zipCode}</option>
			  )
			
		  }         );
		}
		else{
			return null;
		}
		}
	  }


	  const displayCategoria = () => {

		if(load){
		  return( <option disabled>Loading Categoria</option>);
		}
		else
		{
		  
		  return dato.allCategoriaServicio.edges.map(link => {
			
			  return(
			<option value={link.node.id}>{link.node.nombre}</option>
			  )
			
		  }         );
		}
	  }
	  

	  
	  const displayCondado = () => {

		if(loade){
		  return( <option disabled>Loading Condado</option>);
		}
		else
		{
		  
		  return datoe.allCondado.edges.map(link => {
			
			  return(
			<option value={link.node.nombre}>{link.node.nombre}</option>
			  )
			
		  }         );
		}
	  }


	  console.log(catserv)
	return(



		<div className="form-search form-search-style-02 pb-9" >
		<form className="formInput" onSubmit={(e) => {
									e.preventDefault();
									datos['q']=catserv;
									var ruta = Ruta(datos);
									router.push(ruta);
									}
									}>

<div className="col-xl-2 button">
					<button type="submit" className="btn btn-primary btn-lg btn-icon-left btn-block"><i
							className="fal fa-search"></i>Search
					</button>
				</div>


			<div className="row align-items-end no-gutters">
				<div className="col-xl-4 mb-4 mb-xl-0 py-3 px-4 bg-white position-relative rounded form-search-item">
					<label htmlFor="key-word"
						   className="font-size-md font-weight-semibold text-dark mb-0 lh-1">What</label>
					<div className="input-group dropdown show">
					
					<select 
       onChange={e => (setcatserv(e.target.value))}
       className="input-select">
        <option>Categorias</option>
        {displayCategoria()}
            </select>

            </div>
					

				</div>
				
				<div className="col-xl-4 mb-4 mb-xl-0 py-3 px-4 bg-white position-relative rounded form-search-item">
					<label htmlFor="key-word"
						   className="font-size-md font-weight-semibold text-dark mb-0 lh-1">Where</label>
					<div className="input-group dropdown show">
					
					<select 
       onChange={e => (setcondado(e.target.value))}
       className="input-select">
        <option>Condado</option>
        {displayCondado()}
            </select>

			
					</div>
				</div>

				<div className="col-xl-4 mb-4 mb-xl-0 py-3 px-4 bg-white position-relative rounded form-search-item">
					<label htmlFor="key-word"
						   className="font-size-md font-weight-semibold text-dark mb-0 lh-1">Where</label>
					<div className="input-group dropdown show">
					
					<select 
       onChange={e => (setzipcode(e.target.value))}
       className="input-select">
        <option>Condado</option>
        {displayZipcode()}
            </select>

			
					</div>
				</div>


				{/**/}
			</div>

		</form>
		
	</div>



);
	};

export default withApollo(Search);

{/*
			<div id="header">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="header-logo">
								<a href="#" className="logo"
									onClick={(e) => {										
									e.preventDefault();
									router.push("/");
									}}
									>
									<img src="./img/logo.png" alt=""/>
								</a>
							</div>
						</div>
						<div className="col-md-6">
							<div className="header-search">
								<form className="formInput" onSubmit={(e) => {
									e.preventDefault();
									setmarca_Descripcion(marca);
									datos['q']=marca;
									var ruta = Ruta(datos);
									router.push(ruta);
									}
									}>
									<Select/> <input
										className="input"
										placeholder="Introduzca su busqueda"

										value={marca}

										onChange={e => {
											setmarca(e.target.value);
										}}

										ref={n => (input = n)}
									/>
									<button className="search-btn">Buscar <i className="fa fa-search"></i></button>
								</form>
							</div>
						</div>
						
						<ClearFix />
					</div>
				</div>
			</div>
									*/}