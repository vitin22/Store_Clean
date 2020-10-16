import React, { useState, useEffect, useRef } from 'react';
import {useRouter, Router} from 'next/router';
import ClearFix from './Main/ClearFix';
import { useQuery } from '@apollo/react-hooks';
//import { PROD_QUERY } from './Apollo/jobs.query';
import { client } from './MyApollo/MyApollo';
import Select from './Main/Select';
import { Datos, Ruta} from './Info/Datos';
import { ALL_CONZIP, All_CONDADO, ALL_ZIP } from '@components/Apollo/jobs.query';
import withApollo from './Apollo/apollo';
import { IpCoords } from './IpCoords'
import { Ip } from './Cordenadas'
import usZips from 'us-zips'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import geo2zip from 'geo2zip'
import { empty } from 'apollo-boost';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import axios from 'axios';

mapboxgl.accessToken = 'pk.eyJ1Ijoidml0aW4yMiIsImEiOiJja2R5cjRxM3YzZ2dtMnpxcXltcmNhZ21jIn0.YriEgQ-ZxlXeAUP1KP2oow';

let num
let bandera=1



const Search = () => {
  let input;
  if(num == undefined){
	  num = "";
  }
  
  const ruta = "/store";
  //const route = useRouter();

  let query;
    const [latitudeIp, setlatitudeIp] = useState([]);
    const [longitudeIp, setlongitudeIp] = useState([]);
    const [latitudeZip, setlatitudeZip] = useState('null');
	const [longitudeZip, setlongitudeZip] = useState('null');
    const [countryCode, setcountryCode] = useState('null');
  //  const [catserv, setcatserv] = useState('null');
	const [condado, setcondado] = useState('');
    const [zipcode, setzipcode] = useState('');
	
	const router = useRouter();
	var datos = Datos();
    let bandera = 1;
			
		

	{/*{if ((bandera!=1) && (route.pathname==ruta)){
		setmarca_Descripcion(marca)
		bandera=1
	}
	
	}
*/}

//para detectar por la ip la geolocalizacion del cliente
useEffect(() => {
	console.log("entrando para salir")
    axios
      .get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => setlatitudeIp(response.data.latitude));
    axios
      .get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => setlongitudeIp(response.data.longitude));
    axios
      .get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => setcountryCode(response.data.country_code));
  }, []);
  console.log("saliendo para entrar")


 //const Ip = async () => {
	 
	//const {
	//	latitudeIp,
	//	longitudeIp,
	//	countryCode 
	//} = IpCoords();
	
	//localStorage.setItem("lat",latitud)
	//localStorage.setItem("lon",longitud)
	//localStorage.setItem("coun",countrycode)

 //setlatitudeIp(latitud)
 //setlongitudeIp(longitud)
 //setcountryCode(countrycode)
 console.log(latitudeIp)
 console.log(longitudeIp)
 console.log(countryCode)

/*
const Ipsort = async () =>{
	try {
		await Ip();
	}
	catch (error){
		console.error(error)
	}
}
*/

//useEffect(() => {
	//const {lat, long, count} = Ip();
//	setlatitudeIp(lat)
 //setlongitudeIp(long)
 //setcountryCode(count)

	//console.log(lat)
//},[])






//Ipsort();
//await Promise.all([Ip()]);
 //saber el zipcode mediente las coordenadas de la geolocalizacion
 const Zipo = () =>{
	 
		const location = {
			latitude: latitudeIp,
			longitude: longitudeIp
		  };
		
		  const closestZip =  geo2zip(location);
		  closestZip.then((value) =>{
			 console.log(value[0])
			 setzipcode(value[0])
		  });
		  
  }
  

  //para saber las coordenadas del zipcode
  const Zip = () =>{
	
    
	const x =  usZips[`${zipcode}`];
	console.log(x.latitude);
	setlatitudeZip(x.latitude);
	setlongitudeZip(x.longitude);

  }

  
  
  

	  //const { loading: load, data: dato } = useQuery(All_CATSERV, {
	//});
	const { loading: loade, data: datoe } = useQuery(All_CONDADO, {
	});
	const { loading: loadz, data: datoz } = useQuery(ALL_ZIP, {
		skip: false,
		variables: {condado}
		
	});
	const { loading: loada, data: datoa } = useQuery(ALL_CONZIP, {
		skip: true,
		variables: {zipcode}
		
	});


	const displayZipcode = () => {

		if(loadz){
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


	  /*const displayCategoria = () => {

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
	  */

	  
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



	  const displayCondadoZip = () => {

		
		  
		 let nodo = datoa.allCiudad.edges.map(link => {
			
			  
			{link.node.nombre}
			 
			
		  }         );

		  if(nodo =!undefined){
             setcondado(nodo)
		  }
		}
	  

	  //console.log(catserv)

	 // Ip()
	  

	   

	 /* if(bandera == 2){
	      setlatitudeIp(localStorage.getItem("lat"))
          setlongitudeIp(localStorage.getItem("lon"))
		  setcountryCode(localStorage.getItem("coun"))
		  bandera++;

	  }*/

	  
	 


	  {if(countryCode=="US"){
		Zipo()
		Zip()

		const Map = () => {
			const mapContainerRef = useRef(null);
		  
			//const [lng, setLng] = useState(5);
			//const [lat, setLat] = useState(34);
			const [zoom, setZoom] = useState(9);
		  
			// Initialize map when component mounts
			useEffect(() => {
			  const map = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: 'mapbox://styles/mapbox/streets-v9',
				center: [longitudeZip, latitudeZip],
				zoom: zoom,
				interactive: false
			  });
		  
			  // Add navigation control (the +/- zoom buttons)
			  //map.addControl(new mapboxgl.NavigationControl(), 'top-right');
		  
			  //map.on('move', () => {
				//setLng(map.getCenter().lng.toFixed(4));
				//setLat(map.getCenter().lat.toFixed(4));
				//setZoom(map.getZoom().toFixed(2));
			  //});
		  
			  // Clean up on unmount
			//  return () => map.remove();
			}, []); // eslint-disable-line react-hooks/exhaustive-deps
		  
			return (
			  <div>
				
				<div className='map-container' ref={mapContainerRef} />
			  </div>
			);
		  }




	return(
<div>

<div>
			<Map/>
			</div>
		  
		<div className="heading mb-9">
		<h1 className="mb-7">
			<span className="d-block" >DFiscover</span>
			<span className="font-weight-light d-block"
				  data-animate="fadeInRight">your amazing city</span>
		</h1>
		<p className="h5 font-weight-normal text-secondary mb-0" data-animate="fadeInDown">
			Find great places to stay, eat, shop, or visit from local experts.
		</p>
		 
		
	
	</div>




		<div className="form-search form-search-style-02 pb-9" >
		<form className="formInput" onSubmit={(e) => {
									e.preventDefault();
									datos['zipcode']=zipcode;
									var ruta = Ruta(datos);
									
									router.push(ruta);
									}
									}>


			<div className="row align-items-end no-gutters">
				{/*<div className="col-xl-4 mb-4 mb-xl-0 py-3 px-4 bg-white position-relative rounded form-search-item">
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
					

				</div>*/}
				
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
        <option>Zipcode</option>
        {displayZipcode()}
            </select>

			
					</div>
				</div>

				<div className="col-xl-2 button">
					<button type="submit" className="btn btn-primary btn-lg btn-icon-left btn-block"><i
							className="fal fa-search"></i>Search
					</button>
				</div>
				{/**/}
			</div>

		</form>
		
	</div>
	</div>


);
}
else{


	const Map = () => {
		const mapContainerRef = useRef(null);
	  
		//const [lng, setLng] = useState(5);
		//const [lat, setLat] = useState(34);
		const [zoom, setZoom] = useState(9);
	  
		// Initialize map when component mounts
		useEffect(() => {
		  const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [longitudeIp, latitudeIp],
			zoom: zoom,
			interactive: false
		  });
	  
		  // Add navigation control (the +/- zoom buttons)
		 // map.addControl(new mapboxgl.NavigationControl(), 'top-right');
	  
		 // map.on('move', () => {
			//setLng(map.getCenter().lng.toFixed(4));
			//setLat(map.getCenter().lat.toFixed(4));
			//setZoom(map.getZoom().toFixed(2));
		  //});
	  
		  // Clean up on unmount
		  //return () => map.remove();
		}, []); // eslint-disable-line react-hooks/exhaustive-deps
	  
		return (
		  <div>
			
			<div className='map-container' ref={mapContainerRef} />
		  </div>
		);
	  };

	return(
		<div>
				
				<div>
					<Map/>
					</div>

				<div className="heading mb-9">
				<h1 className="mb-7">
					<span className="d-block" >Discover</span>
					<span className="font-weight-light d-block"
						  data-animate="fadeInRight">your amazing city</span>
				</h1>
				<p className="h5 font-weight-normal text-secondary mb-0" data-animate="fadeInDown">
					Find great places to stay, eat, shop, or visit from local experts.
				</p>
	
				
			
			</div>
		
		
		
		
				<div className="form-search form-search-style-02 pb-9" >
				<form className="formInput" onSubmit={(e) => {
											e.preventDefault();
											datos['zipcode']=zipcode;
											var ruta = Ruta(datos);
											router.push(ruta);
											}
											}>
		
		
					<div className="row align-items-end no-gutters">
						{/*<div className="col-xl-4 mb-4 mb-xl-0 py-3 px-4 bg-white position-relative rounded form-search-item">
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
							
		
						</div>*/}
						
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
				<option>Zipcode</option>
				{displayZipcode()}
					</select>
		
					
							</div>
						</div>
		
						<div className="col-xl-2 button">
							<button type="submit" className="btn btn-primary btn-lg btn-icon-left btn-block"><i
									className="fal fa-search"></i>Search
							</button>
						</div>
						{/**/}
					</div>
		
				</form>
				
			</div>
			</div>
		
		
		);

}
	};
}

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