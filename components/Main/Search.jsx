import React, { useState } from 'react';
import {useRouter, Router} from 'next/router';
import ClearFix from '@components/Main/ClearFix';
import { useQuery } from '@apollo/react-hooks';
import { PROD_QUERY } from '@components/Apollo/jobs.query';
import { client } from '@components/MyApollo/MyApollo';
import Select from '@components/Main/Select';
import { Datos, Ruta} from '@components/Store/Datos';

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
		variables: {marca_Descripcion},
		client: client
	  });
	  
	return(
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
);
	};

export default Search;