import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useRouter} from 'next/router';
import { client } from '@components/MyApollo/MyApollo';
import { All_Categories, AllMarcas } from '@components/Apollo/jobs.query';
import { Datos, Ruta} from '@components/Store/Datos';

const Show = () => {

	const router = useRouter();
	var datos = Datos();

	var show = Array();

	show=[4,12,20];
	
	return(
		<div className="store-filter clearfix">
							<div className="store-sort">
								<label>
									Sort By:
									<select className="input-select">
										<option value="0">Popular</option>
										<option value="1">Position</option>
									</select>
								</label>

								<label>
									Show:
									<select className="input-select"
										onChange={e => {
											datos['show']=e.target.value;
											var ruta = Ruta(datos);
											router.push(ruta);
										}}
									>
										{show.map(
											mostrar =>(
												<option value={mostrar}
												selected={mostrar == router.query.show}>{mostrar}</option>
											)
										)}
									</select>
								</label>
							</div>
							<ul className="store-grid">
								{(() => {
									if(datos['list']== 4){
										return(<li className="active" 
										onClick={
											e => {
												datos['list']=4;
												var ruta = Ruta(datos);
												router.push(ruta);
											}
										}
										><i className="fa fa-th"></i></li>)
									}else{
										return(
										<li className=""><a href="#"
											 
										onClick={
											e => {
												datos['list']=4;
												var ruta = Ruta(datos);
												router.push(ruta);
											}
										}
										><i className="fa fa-th"></i></a></li>
										)
									}
								})()}
								{(()=> {
									if(datos['list'] == 2){
										return(
										<li className="active"><i className="fa fa-th-list"></i></li>)
									}else{
										return(<li><a href="#" 
										onClick={
											e => {
												e.preventDefault();
												datos['list']=2;
												var ruta = Ruta(datos);
												router.push(ruta);
											}
										}><i className="fa fa-th-list"></i></a></li>)
									}
								})()}
							</ul>
						</div>
);
	};
export default Show;