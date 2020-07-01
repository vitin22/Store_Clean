import React, { useState } from 'react';
import {useRouter, Router} from 'next/router';
import ClearFix from './Main/ClearFix';
import { useQuery } from '@apollo/react-hooks';
import { PROD_QUERY } from './Apollo/jobs.query';
import { client } from './MyApollo/MyApollo';
import Select from './Main/Select';
import { Datos, Ruta} from './Store/Datos';
import { AllMarcas } from '@components/Apollo/jobs.query';
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

	const [marca_Descripcion, setmarca_Descripcion] = useState('null');
    const [marca, setmarca] = useState('');
	
	const router = useRouter();
	var datos = Datos();
		

	{if ((bandera!=1) && (route.pathname==ruta)){
		setmarca_Descripcion(marca)
		bandera=1
	}
	
	}
    
    const { loading, data,error } = useQuery(PROD_QUERY, {
		variables: {marca_Descripcion}
	  });

	  const { loading: load, data: dato } = useQuery(AllMarcas, {
	});

	  const displayCategoria = () => {

		if(load){
		  return( <option disabled>Loading Marca</option>);
		}
		else
		{
		  
		  return dato.allMarcas.edges.map(link => {
			
			  return(
			<option value={link.node.descripcion}>{link.node.descripcion}</option>
			  )
			
		  }         );
		}
	  }
	  
	return(



		<div className="form-search form-search-style-02 pb-9" >
		<form className="formInput" onSubmit={(e) => {
									e.preventDefault();
									setmarca_Descripcion(marca);
									datos['q']=marca;
									var ruta = Ruta(datos);
									router.push(ruta);
									}
									}>
			<div className="row align-items-end no-gutters">
				<div className="col-xl-6 mb-4 mb-xl-0 py-3 px-4 bg-white border-right-0 border-right-xl position-relative rounded form-search-item">
					<label htmlFor="key-word"
						   className="font-size-md font-weight-semibold text-dark mb-0 lh-1">What</label>
					<div className="input-group dropdown show">
					
					<select 
       onChange={e => (setmarca(e.target.value))}
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
					
				
			
					</div>
				</div>
				<div className="col-xl-2 button">
					<button type="submit" className="btn btn-primary btn-lg btn-icon-left btn-block"><i
							className="fal fa-search"></i>Search
					</button>
				</div>
			</div>

		</form>
		<ClearFix />
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