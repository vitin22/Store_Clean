import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useRouter} from 'next/router';
import { client } from '@components/MyApollo/MyApollo';
import { Datos, Ruta} from '@components/Info/Datos';

const Show = () => {

	const router = useRouter();
	var datos = Datos();0

	var show = Array();

	show=[4,12,20];
	
	return(
		<div className="explore-filter d-lg-flex align-items-center d-block">
		<div className="text-dark font-weight-semibold font-size-md mb-4 mb-lg-0">56 Results found</div>
		<div className="form-filter d-flex align-items-center ml-auto">
			<div className="form-group row no-gutters align-items-center">
				<label htmlFor="sort-by"
					   className="col-sm-3 text-dark font-size-md font-weight-semibold mb-0">Sort
					by</label>
				<div className="select-custom col-sm-9">
					<select id="sort-by" className="form-control">
						<option value="0">Latest</option>
						<option value="1">New York</option>
						<option value="1">LA</option>
					</select>
				</div>
			</div>
			<div className="format-listing ml-auto">
				<a href="explore-full-map-grid.html"><i className="fas fa-th"></i></a>
				<a href="#" className="active"><i className="fal fa-bars"></i></a>
			</div>
		</div>
	</div>
	
);
	};
export default Show;


	/*
		<div classNameName="store-filter clearfix">
							<div classNameName="store-sort">
								<label>
									Sort By:
									<select classNameName="input-select">
										<option value="0">Popular</option>
										<option value="1">Position</option>
									</select>
								</label>

								<label>
									Show:
									<select classNameName="input-select"
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
							<ul classNameName="store-grid">
								{(() => {
									if(datos['list']== 4){
										return(<li classNameName="active" 
										onClick={
											e => {
												datos['list']=4;
												var ruta = Ruta(datos);
												router.push(ruta);
											}
										}
										><i classNameName="fa fa-th"></i></li>)
									}else{
										return(
										<li classNameName=""><a href="#"
											 
										onClick={
											e => {
												datos['list']=4;
												var ruta = Ruta(datos);
												router.push(ruta);
											}
										}
										><i classNameName="fa fa-th"></i></a></li>
										)
									}
								})()}
								{(()=> {
									if(datos['list'] == 2){
										return(
										<li classNameName="active"><i classNameName="fa fa-th-list"></i></li>)
									}else{
										return(<li><a href="#" 
										onClick={
											e => {
												e.preventDefault();
												datos['list']=2;
												var ruta = Ruta(datos);
												router.push(ruta);
											}
										}><i classNameName="fa fa-th-list"></i></a></li>)
									}
								})()}
							</ul>
						</div>
						*/