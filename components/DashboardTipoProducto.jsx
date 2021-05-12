import React, { useState } from 'react';
import Estilo from './ScriptD'

import { ADD_TIPOPRODUCTO } from '@components/Apollo/jobs.mutations';
import { ALL_TYPEPROD, PagProduc} from '@components/Apollo/jobs.query';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';
import gql from 'graphql-tag';
import {useRouter, Router} from 'next/router'
import HeaderAdd from './HeaderAdd'
import DashboardSidebar from './DashboardSidebar'
import TipoProductoContent from './TipoProductoContent'
import Logout from './Logout'


//import { newRegistery, Registery } from './Type';
import withApollo from './Apollo/apollo';
import Link from 'next/link';






const DashboardTipoProducto = () => {
    const [nombre, setnombre] = useState('');
    const [hasVariants, sethasVariants] = useState('');
    const [isShippingRequired, setisShippingRequired] = useState('');
    
    const [createTipoProducto, { error,data }] = useMutation(ADD_TIPOPRODUCTO, {
        variables: { hasVariants, isShippingRequired, nombre},
        client:client
      });

     
    
   // const { loading: loader, data: datero , error: errore} = useQuery(PagProduc,
    //     {client: client}
    //     );


      const handleSubmit = async (event,createTipoProducto) => {
  
        event.preventDefault();
        await createTipoProducto().then(res => {
        console.log("sirvio")
        console.log(error.message)  
        }).catch(error => {
          console.log('error de registro')
      });
        
      };


     

    //if(loader) return <text>Cargando....</text>;
    //if (errore) return (
    //<text>Error! ${errore.message}</text>
    //);
      console.log("sopa")
    return(
        <div>
<Estilo/>
{/*<!-- #site-wrapper start -->*/}
    <div id="site-wrapper" className="site-wrapper panel dashboards">
        {/*<!-- #header start -->*/}
        <HeaderAdd/>
        {/*<!-- #header end -->*/}
        {/*<!-- #wrapper-content start -->*/}
        <div id="wrapper-content" className="wrapper-content pt-0 pb-0">
            <div className="page-wrapper d-flex flex-wrap flex-xl-nowrap">
                <DashboardSidebar/>
              
<TipoProductoContent/>
        </div>
        {/*<!-- #wrapper-content end -->*/}
    </div>
    {/*<!-- #site-wrapper end-->*/}
   <Logout/>
    <div id="search-popup" className="mfp-hide">
        <div className="search-popup text-center">
            <h2 className="mb-8">Search</h2>
            <div className="form-search">
                <form>
                    <div className="row align-items-end">
                        <div className="form-search-item col-md-7 mb-4 mb-md-0 text-left bg-white">
                            <label htmlFor="key-word-02" className="pt-4 mb-0 text-dark font-weight-semibold font-size-lg lh-1">What</label>
                            <div className="input-group dropdown show pr-0 bg-transparent align-items-start">
                                <input type="text" autoComplete="off" id="key-word-02"
                                       className="form-control bg-transparent border-0 p-0 font-size-md lh-1"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       placeholder="Ex: food, service, barber, hotel"/>
                                <button type="submit"
                                        className="btn text-dark btn-link input-group-append font-weight-normal p-0">
                                    <i className="fal fa-search"></i>
                                </button>
                                <ul className="dropdown-menu form-search-ajax" aria-labelledby="key-word-02">
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            <svg className="icon icon-pizza">
                                                <use xlinkHref="#icon-pizza"></use>
                                            </svg>
                                            <span className="font-size-md">Foods & Restaurants</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            <svg className="icon icon-bed">
                                                <use xlinkHref="#icon-bed"></use>
                                            </svg>
                                            <span className="font-size-md">Hotels & Resorts</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            <svg className="icon icon-pharmaceutical">
                                                <use xlinkHref="#icon-pharmaceutical"></use>
                                            </svg>
                                            <span className="font-size-md">Healths & Medicals</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            <svg className="icon icon-cog">
                                                <use xlinkHref="#icon-cog"></use>
                                            </svg>
                                            <span className="font-size-md">Services</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            <svg className="icon icon-car">
                                                <use xlinkHref="#icon-car"></use>
                                            </svg>
                                            <span className="font-size-md">Automotive</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-search-item col-md-5 mb-4 mb-md-0 text-left bg-white">
                            <label htmlFor="region-02" className="pt-4 mb-0 text-dark font-weight-semibold font-size-lg lh-1">Where</label>
                            <div className="input-group dropdown show pr-0 bg-transparent align-items-start">
                                <input type="text" autoComplete="off" id="region-02"
                                       className="form-control bg-transparent border-0 p-0 font-size-md lh-1"
                                       data-toggle="dropdown"
                                       aria-haspopup="true" placeholder="San Francisco"/>
                                <button type="submit"
                                        className="btn text-dark btn-link input-group-append font-weight-normal p-0">
                                    <i className="fal fa-chevron-down"></i>
                                </button>
                                <ul className="dropdown-menu form-search-ajax" aria-labelledby="region-02">
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            Austin
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            Boston
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            Chicago
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            Denver
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            Los Angeles
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            New York
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            San Francisco
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            Seattle
                                        </a>
                                    </li>
                                    <li className="dropdown-item item">
                                        <a href="#" className="link-hover-dark-white">
                                            Washington
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <div className="heading mb-4">
                <div className="pt-8 font-size-lg mb-5">
                    Or browse the highlights
                </div>
            </div>
            <div className="list-inline flex-wrap my-n2">
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card icon-box-style-01 link-hover-dark-white">
                        <div className="card-body p-0">
                            <svg className="icon icon-pizza">
                                <use xlinkHref="#icon-pizza"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Foods
										</span>
                        </div>
                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card icon-box-style-01 link-hover-dark-white">
                        <div className="card-body p-0">
                            <svg className="icon icon-bed">
                                <use xlinkHref="#icon-bed"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block ">
											Hotels
										</span>
                        </div>

                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card icon-box-style-01 link-hover-dark-white">
                        <div className="card-body p-0">
                            <svg className="icon icon-brush2">
                                <use xlinkHref="#icon-brush2"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Jobs
										</span>
                        </div>
                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card link-hover-dark-white icon-box-style-01">
                        <div className="card-body p-0">
                            <svg className="icon icon-pharmaceutical">
                                <use xlinkHref="#icon-pharmaceutical"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Medicals
										</span>
                        </div>
                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card link-hover-dark-white icon-box-style-01">
                        <div className="card-body p-0">
                            <svg className="icon icon-cog">
                                <use xlinkHref="#icon-cog"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Services
										</span>
                        </div>

                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card link-hover-dark-white icon-box-style-01">
                        <div className="card-body p-0">
                            <svg className="icon icon-bag">
                                <use xlinkHref="#icon-bag"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Shopping
										</span>
                        </div>

                    </a>
                </div>
                <div className="list-inline-item py-2">
                    <a href="explore-sidebar-grid.html"
                       className="card link-hover-dark-white icon-box-style-01">
                        <div className="card-body p-0">
                            <svg className="icon icon-car">
                                <use xlinkHref="#icon-car"></use>
                            </svg>
                            <span className="card-text font-size-md font-weight-semibold mt-2 d-block">
											Automotive
										</span>
                        </div>
                    </a>
                </div>
            </div>
            <a href="#"
               className="d-inline-block button-close mt-11 pt-1 text-dark font-size-lg font-weight-semibold text-decoration-none">
                <span className="d-block"><i className="fal fa-times"></i></span>
                <span className="d-block">Close</span>
            </a>
        </div>
    </div>









<div id="add-popup" className="mfp-hide">
        <div className="form-login-register">
            <div className="tabs mb-8">
                <ul className="nav nav-pills tab-style-01 text-capitalize justify-content-center"
                    role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="login-tab" data-toggle="tab"
                           href="#login"
                           role="tab"
                           aria-controls="login" aria-selected="true"><h3>Crear Tipo de Producto</h3></a>
                    </li>
                   
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="login" role="tabpanel"
                     aria-labelledby="login-tab">
                    <div className="form-login">
                        <form onSubmit={event => handleSubmit(event,createTipoProducto)}>
                            <div className="form-group mb-2">
                                <label htmlFor="username" className="sr-only">Name</label>
                                <input id="username" type="text" className="form-control" value={nombre} onChange={e => setnombre(e.target.value)} placeholder="Name"/>
                            </div>
                       
                            <button type="submit"
                                    className="btn btn-primary btn-block font-weight-bold text-uppercase font-size-lg rounded-sm mb-8" onClick={()=> createTipoProducto()}>
                                Add
                            </button>
                        </form>
                        
                        
                    </div>


                </div>
                
            </div>
            <form>

            </form>
        </div>
    </div>


    {/*<!-- External JavaScripts -->*/}
    <script src="vendors/jquery.min.js"></script>
    <script src="vendors/jquery-ui/jquery-ui.min.js"></script>
    <script src="vendors/popper/popper.js"></script>
    <script src="vendors/bootstrap/js/bootstrap.js"></script>
    <script src="vendors/hc-sticky/hc-sticky.js"></script>
    <script src="vendors/isotope/isotope.pkgd.js"></script>
    <script src="vendors/magnific-popup/jquery.magnific-popup.js"></script>
    <script src="vendors/slick/slick.js"></script>
    <script src="vendors/waypoints/jquery.waypoints.js"></script>
    <script src="vendors/air-datepicker/js/datepicker.min.js"></script>
    <script src="vendors/air-datepicker/js/i18n/datepicker.en.js"></script>

    {/*<!-- Site Javascript -->*/}
    <script src="js/app.js"></script>
    <svg aria-hidden="true" contentStyleType="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <symbol id="icon-bed" viewBox="0 0 32 32">
                <title>bed</title>
                <path d="M28 28.8h-1.6c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h1.6c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM4 28.8h-1.6c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h1.6c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM29.853 18.229l-3.789-11.365c-0.318-0.954-1.229-1.738-2.221-1.984-0.035-0.152-0.074-0.298-0.118-0.432-0.363-1.088-0.986-1.25-1.325-1.25h-6.4c-0.203 0-0.509 0.059-0.8 0.341-0.291-0.282-0.597-0.341-0.8-0.341h-6.4c-0.339 0-0.962 0.163-1.325 1.25-0.045 0.134-0.085 0.278-0.118 0.432-0.994 0.246-1.904 1.029-2.221 1.984l-3.789 11.365c-0.307 0.92-0.547 2.402-0.547 3.371v3.2c0 1.323 1.077 2.4 2.4 2.4h25.6c1.323 0 2.4-1.077 2.4-2.4v-3.2c0-0.97-0.24-2.451-0.547-3.371zM16.251 4.8h5.898c0.112 0.251 0.251 0.822 0.251 1.6s-0.139 1.349-0.251 1.6h-5.898c-0.112-0.251-0.251-0.822-0.251-1.6s0.139-1.349 0.251-1.6zM8.251 4.8h5.898c0.112 0.251 0.251 0.822 0.251 1.6s-0.139 1.349-0.251 1.6h-5.898c-0.112-0.251-0.251-0.822-0.251-1.6s0.139-1.349 0.251-1.6zM5.853 7.371c0.086-0.259 0.296-0.507 0.552-0.686 0.022 0.621 0.115 1.203 0.27 1.666 0.363 1.088 0.986 1.25 1.325 1.25h6.4c0.203 0 0.509-0.059 0.8-0.341 0.291 0.282 0.597 0.341 0.8 0.341h6.4c0.339 0 0.962-0.163 1.325-1.25 0.154-0.462 0.248-1.046 0.27-1.666 0.256 0.181 0.466 0.427 0.552 0.686l1.277 3.829h-21.246l1.277-3.829zM4.043 12.8h22.314l1.978 5.934c0.051 0.152 0.099 0.326 0.146 0.514-0.155-0.032-0.315-0.048-0.48-0.048h-25.6c-0.165 0-0.325 0.016-0.48 0.048 0.046-0.187 0.094-0.362 0.146-0.514l1.979-5.934zM28.8 24.8c0 0.442-0.358 0.8-0.8 0.8h-25.6c-0.442 0-0.8-0.358-0.8-0.8v-3.2c0-0.442 0.358-0.8 0.8-0.8h25.6c0.442 0 0.8 0.358 0.8 0.8v3.2z"></path>
            </symbol>
            <symbol id="icon-brush2" viewBox="0 0 32 32">
                <title>brush2</title>
                <path d="M5.6 27.2c-0.211 0-0.418-0.085-0.565-0.235s-0.235-0.355-0.235-0.565 0.085-0.416 0.235-0.565c0.149-0.149 0.355-0.235 0.565-0.235s0.416 0.085 0.565 0.235c0.149 0.149 0.235 0.355 0.235 0.565s-0.085 0.418-0.235 0.565c-0.149 0.149-0.355 0.235-0.565 0.235zM29.834 15.102l-12.938-12.938c-0.453-0.453-1.054-0.701-1.698-0.701s-1.245 0.25-1.698 0.701l-8.138 8.138c-0.862 0.862-1.112 2.394-0.566 3.486l2.57 5.138c0.078 0.158 0.093 0.309 0.038 0.424s-0.178 0.203-0.35 0.243c-0.138 0.034-3.406 0.834-5.418 2.845-1.058 1.058-1.64 2.464-1.64 3.96s0.582 2.902 1.64 3.96c1.058 1.058 2.464 1.64 3.96 1.64 0 0 0 0 0 0 1.496 0 2.902-0.582 3.96-1.64 2.011-2.011 2.813-5.28 2.845-5.418 0.034-0.142 0.131-0.382 0.398-0.382 0.085 0 0.176 0.024 0.27 0.072l5.138 2.57c0.381 0.19 0.827 0.291 1.293 0.291 0.837 0 1.656-0.32 2.192-0.856l8.138-8.138c0.936-0.936 0.936-2.458 0-3.394zM20.566 25.502c-0.235 0.235-0.653 0.387-1.061 0.387-0.219 0-0.419-0.042-0.578-0.122l-5.138-2.57c-0.318-0.16-0.651-0.24-0.986-0.24-0.938 0-1.723 0.646-1.954 1.61-0.006 0.029-0.733 2.973-2.421 4.659-0.755 0.755-1.76 1.171-2.829 1.171s-2.074-0.416-2.829-1.171c-0.755-0.755-1.171-1.76-1.171-2.829s0.416-2.074 1.171-2.829c1.688-1.688 4.63-2.414 4.659-2.421 0.646-0.155 1.166-0.565 1.427-1.123s0.24-1.221-0.058-1.816l-2.57-5.138c-0.24-0.478-0.112-1.261 0.266-1.638l1.502-1.502 14.069 14.069-1.502 1.502zM28.702 17.366l-5.502 5.502-14.069-14.069 5.502-5.502c0.15-0.15 0.35-0.232 0.566-0.232s0.416 0.083 0.566 0.232l12.938 12.938c0.312 0.312 0.312 0.819 0 1.131z"></path>
            </symbol>
            <symbol id="icon-cog" viewBox="0 0 32 32">
                <title>cog</title>
                <path d="M12.21 31.523c-0.066 0-0.133-0.008-0.2-0.026-1.437-0.37-2.818-0.939-4.102-1.694-0.373-0.219-0.504-0.694-0.298-1.074 0.254-0.467 0.389-0.995 0.389-1.531 0-1.765-1.435-3.2-3.2-3.2-0.534 0-1.064 0.134-1.531 0.389-0.379 0.206-0.854 0.075-1.074-0.298-0.755-1.286-1.325-2.666-1.694-4.102-0.104-0.406 0.123-0.824 0.52-0.957 1.302-0.438 2.179-1.658 2.179-3.032s-0.875-2.594-2.179-3.032c-0.397-0.134-0.624-0.55-0.52-0.957 0.37-1.437 0.939-2.818 1.694-4.102 0.219-0.373 0.694-0.504 1.074-0.298 0.466 0.254 0.995 0.389 1.531 0.389 1.765 0 3.2-1.435 3.2-3.2 0-0.534-0.134-1.064-0.389-1.531-0.206-0.379-0.075-0.854 0.298-1.074 1.286-0.755 2.666-1.325 4.102-1.694 0.406-0.104 0.824 0.123 0.957 0.52 0.438 1.302 1.658 2.179 3.032 2.179s2.594-0.875 3.032-2.179c0.134-0.397 0.552-0.624 0.957-0.52 1.437 0.37 2.818 0.939 4.102 1.694 0.373 0.219 0.504 0.694 0.298 1.074-0.254 0.467-0.389 0.995-0.389 1.531 0 1.765 1.435 3.2 3.2 3.2 0.534 0 1.064-0.134 1.531-0.389 0.379-0.206 0.854-0.075 1.074 0.298 0.755 1.286 1.325 2.666 1.694 4.102 0.104 0.406-0.123 0.824-0.52 0.957-1.302 0.438-2.179 1.658-2.179 3.032s0.875 2.594 2.179 3.032c0.397 0.134 0.624 0.55 0.52 0.957-0.37 1.437-0.939 2.818-1.694 4.102-0.219 0.373-0.694 0.504-1.074 0.298-0.467-0.254-0.995-0.389-1.531-0.389-1.765 0-3.2 1.435-3.2 3.2 0 0.534 0.134 1.064 0.389 1.531 0.206 0.379 0.075 0.854-0.298 1.074-1.286 0.755-2.666 1.325-4.102 1.694-0.406 0.104-0.824-0.123-0.957-0.52-0.438-1.302-1.658-2.179-3.032-2.179s-2.594 0.875-3.032 2.179c-0.112 0.331-0.422 0.546-0.758 0.546zM16 27.2c1.803 0 3.427 1.005 4.248 2.563 0.832-0.258 1.642-0.59 2.416-0.995-0.173-0.502-0.262-1.034-0.262-1.568 0-2.646 2.154-4.8 4.8-4.8 0.534 0 1.066 0.090 1.568 0.262 0.405-0.774 0.739-1.582 0.995-2.416-1.558-0.819-2.563-2.443-2.563-4.248s1.005-3.427 2.563-4.248c-0.258-0.832-0.59-1.642-0.995-2.416-0.502 0.173-1.034 0.262-1.568 0.262-2.646 0-4.8-2.154-4.8-4.8 0-0.534 0.090-1.066 0.262-1.568-0.774-0.405-1.582-0.739-2.416-0.995-0.819 1.558-2.443 2.563-4.248 2.563s-3.427-1.005-4.248-2.563c-0.832 0.256-1.642 0.59-2.416 0.995 0.173 0.502 0.262 1.034 0.262 1.568 0 2.646-2.154 4.8-4.8 4.8-0.534 0-1.066-0.090-1.568-0.262-0.405 0.774-0.739 1.582-0.995 2.416 1.558 0.819 2.563 2.443 2.563 4.248s-1.005 3.427-2.563 4.248c0.256 0.832 0.59 1.642 0.995 2.416 0.502-0.173 1.034-0.262 1.568-0.262 2.646 0 4.8 2.154 4.8 4.8 0 0.534-0.090 1.066-0.262 1.568 0.774 0.405 1.582 0.739 2.416 0.995 0.819-1.558 2.443-2.563 4.248-2.563zM16 20.8c-2.646 0-4.8-2.154-4.8-4.8s2.154-4.8 4.8-4.8 4.8 2.154 4.8 4.8-2.154 4.8-4.8 4.8zM16 12.8c-1.765 0-3.2 1.435-3.2 3.2s1.435 3.2 3.2 3.2c1.765 0 3.2-1.435 3.2-3.2s-1.435-3.2-3.2-3.2z"></path>
            </symbol>
            <symbol id="icon-bag" viewBox="0 0 32 32">
                <title>bag</title>
                <path d="M13.6 27.2c-0.349 0-0.669-0.229-0.77-0.581-0.122-0.426 0.125-0.867 0.549-0.989l11.2-3.2c0.426-0.122 0.867 0.125 0.989 0.549s-0.125 0.867-0.549 0.989l-11.2 3.2c-0.074 0.021-0.147 0.030-0.221 0.030zM28.797 26.333l-1.6-19.2c-0.022-0.274-0.186-0.523-0.438-0.65l-3.2-1.6c-0.395-0.197-0.875-0.037-1.074 0.358s-0.037 0.875 0.358 1.074l1.115 0.557-2.013 0.403c-0.046-0.331-0.099-0.669-0.155-1.006-0.712-4.277-1.79-6.269-3.389-6.269-0.638 0-1.238 0.269-1.731 0.778-1.125 1.158-1.822 3.624-2.133 7.536-0.013 0.152-0.022 0.301-0.034 0.45l-3.933 0.787-2.965-1.976 6.17-1.371c0.432-0.096 0.704-0.523 0.608-0.955s-0.523-0.702-0.955-0.608l-1.64 0.365c0.442-2.154 1.096-3.406 1.813-3.406 0.086 0 0.262 0.115 0.475 0.438 0.243 0.37 0.739 0.472 1.107 0.229s0.472-0.739 0.229-1.107c-0.63-0.96-1.333-1.16-1.813-1.16-0.734 0-1.774 0.355-2.566 2.043-0.39 0.834-0.709 1.955-0.946 3.339l-4.662 1.035c-0.314 0.069-0.554 0.318-0.613 0.634-0.005 0.029-0.008 0.058-0.011 0.085v0l-1.6 20.8c-0.026 0.325 0.149 0.632 0.44 0.778l6.4 3.2c0.112 0.056 0.235 0.085 0.358 0.085 0.070 0 0.141-0.010 0.211-0.029l17.6-4.8c0.373-0.101 0.619-0.454 0.587-0.838zM17.816 1.893c0.254-0.262 0.454-0.293 0.584-0.293s0.482 0.261 0.882 1.246c0.354 0.872 0.666 2.109 0.926 3.674 0.059 0.358 0.114 0.717 0.163 1.070l-4.242 0.848c0.363-4.557 1.213-6.058 1.686-6.546zM6.293 8.624l3.307 2.205v19.077l-4.762-2.381 1.454-18.902zM11.2 30.152v-19.096l3.214-0.643c-0.067 1.803-0.029 3.136-0.027 3.211 0.013 0.434 0.368 0.776 0.798 0.776 0.008 0 0.016 0 0.024 0 0.442-0.013 0.789-0.382 0.776-0.824 0-0.019-0.045-1.53 0.043-3.486l4.539-0.907c0.173 1.614 0.234 2.837 0.234 2.856 0.021 0.442 0.395 0.782 0.837 0.762s0.782-0.395 0.762-0.837c-0.003-0.078-0.067-1.382-0.256-3.094l3.534-0.707 1.47 17.643-15.947 4.349z"></path>
            </symbol>
            <symbol id="icon-pizza" viewBox="0 0 32 32">
                <title>pizza</title>
                <path d="M31.92 14.931c-0.072-0.2-0.219-0.363-0.411-0.454l-4.338-2.058c0 0 0 0 0 0s0 0 0 0l-26.029-12.342c-0.306-0.146-0.669-0.082-0.909 0.157s-0.302 0.603-0.157 0.909l12.342 26.029c0 0 0 0 0 0s0 0 0 0l2.056 4.338c0.091 0.192 0.254 0.339 0.454 0.411 0.086 0.030 0.178 0.046 0.269 0.046 0.118 0 0.235-0.026 0.344-0.077 7.146-3.395 12.95-9.2 16.346-16.346 0.091-0.192 0.102-0.411 0.030-0.611zM22.4 12.8c0 0.882-0.718 1.6-1.6 1.6s-1.6-0.718-1.6-1.6 0.718-1.6 1.6-1.6c0.019 0 0.038-0.002 0.058-0.003l1.138 0.539c0.262 0.293 0.405 0.666 0.405 1.064zM18.866 10.253c-0.768 0.586-1.266 1.509-1.266 2.547 0 1.765 1.435 3.2 3.2 3.2s3.2-1.435 3.2-3.2c0-0.038-0.003-0.077-0.010-0.117l1.762 0.835c-2.682 5.25-6.984 9.552-12.234 12.234l-3.139-6.621c0.269 0.046 0.544 0.070 0.822 0.070 2.646 0 4.8-2.154 4.8-4.8s-2.154-4.8-4.8-4.8c-1.261 0-2.451 0.485-3.354 1.365-0.331 0.323-0.608 0.686-0.83 1.078l-4.533-9.56 16.382 7.768zM8.011 14.139c0.131-1.661 1.499-2.939 3.189-2.939 1.765 0 3.2 1.435 3.2 3.2s-1.435 3.2-3.2 3.2c-0.658 0-1.282-0.195-1.816-0.565l-1.373-2.896zM15.576 30.091l-1.373-2.894c5.582-2.84 10.154-7.411 12.994-12.994l2.894 1.373c-3.158 6.246-8.269 11.358-14.515 14.515zM7.2 8h1.6c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-1.6c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8zM18.4 20.8c0.442 0 0.8-0.358 0.8-0.8v-1.6c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v1.6c0 0.442 0.358 0.8 0.8 0.8z"></path>
            </symbol>
            <symbol id="icon-car" viewBox="0 0 32 32">
                <title>car</title>
                <path d="M32.002 24.816c0-0.018 0-0.037-0.002-0.054-0.010-0.413-0.15-2.933-2.042-3.878-0.274-0.136-0.84-0.419-6.213-0.838-0.195-0.448-0.523-1.17-0.922-1.925-1.246-2.365-2.032-2.907-2.515-3.109-1.691-0.707-6.787-0.867-10.102-0.038-2.075 0.518-3.934 1.741-5.376 3.534-0.821 1.021-1.291 1.957-1.478 2.373-0.475 0.374-0.904 0.81-1.285 1.307-1.371 1.784-2.066 4.277-2.066 7.411 0 0.213 0.085 0.416 0.234 0.566s0.354 0.234 0.566 0.234h1.656c0.398 0 0.736-0.293 0.792-0.686 0.045-0.315 0.122-0.621 0.226-0.912 0.661 1.862 2.44 3.2 4.525 3.2s3.864-1.338 4.525-3.2c0.104 0.293 0.181 0.597 0.226 0.912 0.056 0.394 0.394 0.686 0.792 0.686h9.714c0.398 0 0.736-0.293 0.792-0.686 0.027-0.19 0.067-0.378 0.117-0.56 0.498 1.645 2.027 2.846 3.832 2.846 2.208 0 4.003-1.795 4.003-4.003 0-0.888-0.29-1.714-0.786-2.382 0.435-0.008 0.786-0.362 0.786-0.8zM10.594 16.526c3.062-0.766 7.837-0.565 9.098-0.038 0.061 0.026 0.624 0.307 1.71 2.368 0.195 0.368 0.373 0.733 0.525 1.056-0.968-0.067-2.056-0.138-3.28-0.211-4.95-0.298-9.766-0.499-9.814-0.501-0.011 0-0.022 0-0.034 0-0.994 0-1.91 0.115-2.747 0.344 0.933-1.168 2.403-2.483 4.542-3.018zM8 30.4c-1.765 0-3.2-1.435-3.2-3.2 0-0.131 0.010-0.261 0.024-0.39 0.854-0.754 1.971-1.21 3.176-1.21s2.322 0.456 3.176 1.21c0.016 0.13 0.024 0.259 0.024 0.39 0 1.765-1.435 3.2-3.2 3.2zM22.602 28.8h-8.405c-0.288-1.117-0.877-2.139-1.704-2.955-0.008-0.008-0.018-0.018-0.026-0.026-0.083-0.082-0.17-0.162-0.258-0.238-1.165-1.019-2.661-1.579-4.211-1.579s-3.045 0.562-4.211 1.579c-0.069 0.061-0.136 0.122-0.202 0.186-0.046 0.037-0.088 0.077-0.125 0.123-0.803 0.808-1.378 1.814-1.659 2.912h-0.186c0.168-3.819 1.621-7.992 7.166-8 0.315 0.013 4.933 0.21 9.693 0.494 9.090 0.544 10.541 0.92 10.765 1.021 0.637 0.318 0.923 1.083 1.053 1.685h-1.494c-0.16 0-0.32 0.006-0.478 0.018-0.010 0-0.019 0.002-0.029 0.002-1.042 0.083-2.045 0.418-2.922 0.976-0.010 0.005-0.018 0.011-0.027 0.018-0.264 0.17-0.517 0.358-0.755 0.566-0.976 0.854-1.667 1.979-1.987 3.219zM27.997 30.4c-1.325 0-2.403-1.078-2.403-2.403 0-0.629 0.238-1.216 0.67-1.666 0.621-0.389 1.333-0.64 2.091-0.71 1.171 0.174 2.045 1.182 2.045 2.376 0 1.325-1.078 2.403-2.403 2.403z"></path>
            </symbol>
            <symbol id="icon-pharmaceutical" viewBox="0 0 32 32">
                <title>pharmaceutical</title>
                <path d="M25.003 17.956c-3.858 0-6.997 3.139-6.997 6.997s3.139 6.997 6.997 6.997 6.997-3.139 6.997-6.997c-0-3.858-3.139-6.997-6.997-6.997zM25.003 30.588c-3.107 0-5.634-2.528-5.634-5.634s2.528-5.634 5.634-5.634 5.634 2.528 5.634 5.634c-0 3.107-2.528 5.634-5.634 5.634z"></path>
                <path d="M27.133 21.498c-0.32-0.197-0.74-0.098-0.938 0.223l-3.545 5.751c-0.198 0.32-0.098 0.74 0.223 0.938 0.111 0.069 0.235 0.102 0.357 0.102 0.229 0 0.452-0.115 0.581-0.324l3.545-5.751c0.198-0.321 0.098-0.74-0.223-0.938z"></path>
                <path d="M5.541 27.145l-0.104-0.065c-0.565-0.354-0.959-0.907-1.109-1.559s-0.038-1.322 0.316-1.887c0.2-0.319 0.103-0.74-0.216-0.939s-0.74-0.103-0.939 0.216c-0.547 0.874-0.72 1.909-0.489 2.916s0.84 1.862 1.714 2.409l0.104 0.065c0.112 0.070 0.237 0.104 0.361 0.104 0.227 0 0.449-0.113 0.578-0.32 0.2-0.319 0.103-0.74-0.216-0.939z"></path>
                <path d="M19.45 4.692l0.104 0.065c1.169 0.732 1.525 2.278 0.793 3.446-0.2 0.319-0.103 0.74 0.216 0.939 0.112 0.070 0.237 0.104 0.361 0.104 0.227 0 0.449-0.113 0.578-0.32 1.13-1.806 0.581-4.195-1.225-5.325l-0.104-0.065c-0.319-0.2-0.74-0.103-0.939 0.216s-0.103 0.74 0.216 0.939z"></path>
                <path d="M18.279 19.538c0-0 0-0 0-0l5.679-9.074c0.958-1.531 1.263-3.343 0.858-5.103s-1.471-3.257-3.002-4.215l-0.104-0.065c-1.077-0.674-2.316-1.031-3.581-1.031-2.348 0-4.493 1.187-5.737 3.175l-11.359 18.148c-0.958 1.531-1.263 3.343-0.858 5.103s1.471 3.257 3.002 4.215l0.104 0.065c1.077 0.674 2.316 1.031 3.582 1.031 2.348 0 4.493-1.187 5.737-3.175l5.679-9.074c0 0 0 0 0 0zM13.547 3.947c0.994-1.587 2.706-2.535 4.582-2.535 1.009 0 1.998 0.285 2.858 0.823l0.104 0.065c1.222 0.765 2.073 1.96 2.397 3.365s0.080 2.852-0.685 4.074l-5.318 8.496-9.256-5.793 5.318-8.496zM11.444 27.889c-0.994 1.587-2.706 2.535-4.582 2.535-1.009 0-1.998-0.285-2.858-0.823l-0.104-0.065c-1.222-0.765-2.073-1.96-2.397-3.365s-0.080-2.852 0.685-4.075l5.318-8.496 9.256 5.793-5.318 8.496z"></path>
            </symbol>
            <symbol id="icon-checkmark-circle" viewBox="0 0 32 32">
                <title>checkmark-circle</title>
                <path d="M15.2 32c-4.061 0-7.877-1.581-10.749-4.451s-4.451-6.688-4.451-10.747c0-4.061 1.581-7.877 4.451-10.749s6.688-4.453 10.749-4.453c4.061 0 7.877 1.581 10.749 4.453s4.451 6.688 4.451 10.749-1.581 7.877-4.451 10.747c-2.87 2.87-6.688 4.451-10.749 4.451zM15.2 3.2c-7.499 0-13.6 6.101-13.6 13.6s6.101 13.6 13.6 13.6 13.6-6.101 13.6-13.6-6.101-13.6-13.6-13.6zM12 23.2c-0.205 0-0.41-0.078-0.566-0.234l-4.8-4.8c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l4.234 4.234 10.634-10.634c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-11.2 11.2c-0.157 0.157-0.362 0.234-0.566 0.234z"></path>
            </symbol>
            <symbol id="icon-user-circle-o" viewBox="0 0 28 28">
                <title>user-circle-o</title>
                <path d="M14 0c7.734 0 14 6.266 14 14 0 7.688-6.234 14-14 14-7.75 0-14-6.297-14-14 0-7.734 6.266-14 14-14zM23.672 21.109c1.453-2 2.328-4.453 2.328-7.109 0-6.609-5.391-12-12-12s-12 5.391-12 12c0 2.656 0.875 5.109 2.328 7.109 0.562-2.797 1.922-5.109 4.781-5.109 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c2.859 0 4.219 2.312 4.781 5.109zM20 11c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6z"></path>
            </symbol>
            <symbol id="icon-expand" viewBox="0 0 32 32">
                <title>expand</title>
                <path d="M12.566 11.434l-9.834-9.834h6.069c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-8c-0.442 0-0.8 0.358-0.8 0.8v8c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-6.069l9.834 9.834c0.157 0.157 0.362 0.234 0.566 0.234s0.41-0.078 0.566-0.234c0.312-0.312 0.312-0.819 0-1.131zM31.2 0h-8c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h6.069l-9.834 9.834c-0.312 0.312-0.312 0.819 0 1.131 0.157 0.157 0.362 0.234 0.565 0.234s0.41-0.078 0.565-0.234l9.835-9.834v6.069c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-8c0-0.442-0.358-0.8-0.8-0.8zM12.566 19.435c-0.312-0.312-0.819-0.312-1.131 0l-9.834 9.834v-6.069c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v8c0 0.442 0.358 0.8 0.8 0.8h8c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-6.069l9.834-9.835c0.312-0.312 0.312-0.819 0-1.131zM31.2 22.4c-0.442 0-0.8 0.358-0.8 0.8v6.069l-9.835-9.834c-0.312-0.312-0.819-0.312-1.131 0s-0.312 0.819 0 1.131l9.835 9.834h-6.069c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h8c0.442 0 0.8-0.358 0.8-0.8v-8c0-0.442-0.358-0.8-0.8-0.8z"></path>
            </symbol>
            <symbol id="icon-quote" viewBox="0 0 20 20">
                <title>quote</title>
                <path d="M5.315 3.401c-1.61 0-2.916 1.343-2.916 3s1.306 3 2.916 3c2.915 0 0.972 5.799-2.916 5.799v1.4c6.939 0.001 9.658-13.199 2.916-13.199zM13.715 3.401c-1.609 0-2.915 1.343-2.915 3s1.306 3 2.915 3c2.916 0 0.973 5.799-2.915 5.799v1.4c6.938 0.001 9.657-13.199 2.915-13.199z"></path>
            </symbol>
            <symbol id="icon-google-plus-symbol" viewBox="0 0 32 32">
                <title>google-plus-symbol</title>
                <path d="M18.413 20.375c-0.34-0.455-0.715-0.879-1.125-1.269s-0.821-0.747-1.231-1.067c-0.41-0.32-0.785-0.628-1.125-0.923s-0.615-0.602-0.827-0.923-0.317-0.647-0.317-0.981c0-0.462 0.148-0.894 0.442-1.298s0.654-0.795 1.077-1.173c0.423-0.378 0.846-0.792 1.269-1.24s0.782-1.042 1.077-1.779c0.295-0.737 0.442-1.58 0.442-2.529 0-1.128-0.25-2.212-0.75-3.25s-1.205-1.846-2.115-2.423h2.596l2.596-1.519h-8.403c-1.192 0-2.391 0.128-3.596 0.385-1.782 0.397-3.282 1.305-4.5 2.721s-1.827 3.022-1.827 4.817c0 1.897 0.683 3.474 2.048 4.731s3.003 1.884 4.913 1.884c0.385 0 0.833-0.032 1.346-0.096-0.026 0.102-0.070 0.24-0.134 0.413s-0.116 0.311-0.154 0.414c-0.038 0.102-0.071 0.227-0.096 0.375s-0.038 0.298-0.038 0.452c0 0.846 0.41 1.801 1.231 2.865-0.974 0.026-1.936 0.112-2.884 0.26s-1.942 0.378-2.981 0.692c-1.038 0.314-1.968 0.769-2.788 1.365s-1.436 1.304-1.846 2.125c-0.474 0.949-0.712 1.814-0.712 2.596 0 0.859 0.192 1.638 0.577 2.337s0.878 1.269 1.481 1.711c0.603 0.443 1.298 0.814 2.087 1.116s1.57 0.516 2.346 0.644c0.776 0.128 1.542 0.192 2.298 0.192 3.436 0 6.128-0.84 8.077-2.519 1.795-1.564 2.692-3.372 2.692-5.423 0-0.731-0.106-1.413-0.317-2.048s-0.487-1.18-0.827-1.635zM11 13.385c-0.654 0-1.276-0.167-1.865-0.5s-1.090-0.766-1.5-1.298c-0.41-0.532-0.769-1.131-1.077-1.798s-0.535-1.333-0.683-2c-0.147-0.666-0.221-1.301-0.221-1.904 0-1.231 0.327-2.288 0.981-3.173s1.577-1.327 2.769-1.327c0.846 0 1.612 0.263 2.298 0.788s1.224 1.192 1.615 2c0.391 0.808 0.692 1.644 0.904 2.509s0.317 1.683 0.317 2.452c0 1.282-0.279 2.311-0.836 3.087s-1.458 1.163-2.702 1.163zM16.317 27.826c-0.352 0.603-0.83 1.074-1.432 1.413s-1.247 0.59-1.933 0.75c-0.686 0.161-1.407 0.241-2.163 0.241-0.821 0-1.635-0.096-2.442-0.289s-1.58-0.484-2.317-0.875c-0.737-0.391-1.333-0.929-1.788-1.615s-0.683-1.465-0.683-2.337c0-0.769 0.173-1.455 0.519-2.058s0.789-1.083 1.327-1.442c0.538-0.359 1.167-0.654 1.885-0.884s1.41-0.391 2.077-0.481c0.666-0.090 1.346-0.134 2.038-0.134 0.423 0 0.744 0.013 0.962 0.038 0.077 0.052 0.272 0.186 0.587 0.404s0.526 0.366 0.635 0.443c0.109 0.077 0.308 0.224 0.596 0.442s0.493 0.381 0.615 0.49c0.121 0.109 0.298 0.272 0.529 0.49s0.401 0.407 0.51 0.567c0.109 0.16 0.244 0.356 0.404 0.586s0.272 0.452 0.337 0.664c0.064 0.212 0.125 0.442 0.182 0.692s0.086 0.51 0.086 0.779c0 0.807-0.176 1.513-0.529 2.115z"></path>
                <path d="M27.077 4.923v-4.923h-2.462v4.923h-4.923v2.462h5.923v4.923h2.462v-4.923h5.923v-2.462z"></path>
            </symbol>
            <symbol id="icon-instagram" viewBox="0 0 20 20">
                <title>instagram</title>
                <path d="M17 1h-14c-1.1 0-2 0.9-2 2v14c0 1.101 0.9 2 2 2h14c1.1 0 2-0.899 2-2v-14c0-1.1-0.9-2-2-2zM9.984 15.523c3.059 0 5.538-2.481 5.538-5.539 0-0.338-0.043-0.664-0.103-0.984h1.581v7.216c0 0.382-0.31 0.69-0.693 0.69h-12.614c-0.383 0-0.693-0.308-0.693-0.69v-7.216h1.549c-0.061 0.32-0.104 0.646-0.104 0.984 0 3.059 2.481 5.539 5.539 5.539zM6.523 9.984c0-1.912 1.55-3.461 3.462-3.461s3.462 1.549 3.462 3.461-1.551 3.462-3.462 3.462c-1.913 0-3.462-1.55-3.462-3.462zM16.307 6h-1.615c-0.382 0-0.692-0.312-0.692-0.692v-1.617c0-0.382 0.31-0.691 0.691-0.691h1.615c0.384 0 0.694 0.309 0.694 0.691v1.616c0 0.381-0.31 0.693-0.693 0.693z"></path>
            </symbol>
            <symbol id="icon-bag-1" viewBox="0 0 32 32">
                <title>bag-1</title>
                <path d="M26.832 7.898h-5.174v-1.684c0-3.426-2.787-6.214-6.214-6.214s-6.213 2.787-6.213 6.214v1.684h-4.458c-0.376 0-0.681 0.305-0.681 0.681l-3.827 22.74c0 0.376 0.305 0.681 0.681 0.681h30.107c0.376 0 0.681-0.305 0.681-0.681l-4.221-22.74c0-0.376-0.305-0.681-0.681-0.681zM10.593 6.214c0-2.675 2.177-4.852 4.852-4.852s4.852 2.177 4.852 4.852v1.684h-9.704v-1.684zM30.373 30.638h-28.746l3.826-21.379h3.777v2.998c-0.329 0.22-0.544 0.594-0.544 1.019 0 0.677 0.548 1.226 1.225 1.226s1.226-0.548 1.226-1.226c0-0.425-0.217-0.799-0.545-1.019v-2.998h9.705v2.998c-0.328 0.22-0.545 0.594-0.545 1.019 0 0.677 0.548 1.226 1.226 1.226s1.226-0.548 1.226-1.226c0-0.425-0.217-0.799-0.545-1.019v-2.998h4.494l4.222 21.379z"></path>
            </symbol>
            <symbol id="icon-check-circle" viewBox="0 0 24 24">
                <title>check-circle</title>
                <path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z"></path>
            </symbol>
            <symbol id="icon-layers" viewBox="0 0 32 32">
                <title>layers</title>
                <path d="M16 19.2c-0.106 0-0.211-0.021-0.31-0.062l-15.2-6.4c-0.296-0.125-0.49-0.416-0.49-0.738s0.194-0.613 0.49-0.738l15.2-6.4c0.198-0.083 0.422-0.083 0.621 0l15.2 6.4c0.296 0.125 0.49 0.416 0.49 0.738s-0.194 0.613-0.49 0.738l-15.2 6.4c-0.099 0.042-0.205 0.062-0.31 0.062zM2.861 12l13.139 5.531 13.139-5.531-13.139-5.531-13.139 5.531zM16 24c-0.106 0-0.211-0.021-0.31-0.062l-15.2-6.4c-0.406-0.171-0.598-0.64-0.427-1.048s0.64-0.598 1.048-0.427l14.89 6.269 14.89-6.269c0.406-0.171 0.877 0.019 1.048 0.427s-0.019 0.877-0.427 1.048l-15.2 6.4c-0.099 0.042-0.205 0.062-0.31 0.062zM16 28.8c-0.106 0-0.211-0.021-0.31-0.062l-15.2-6.4c-0.406-0.171-0.598-0.64-0.427-1.048s0.64-0.598 1.048-0.427l14.89 6.269 14.89-6.269c0.406-0.171 0.877 0.019 1.048 0.427s-0.019 0.877-0.427 1.048l-15.2 6.4c-0.099 0.042-0.205 0.062-0.31 0.062z"></path>
            </symbol>
            <symbol id="icon-receipt" viewBox="0 0 32 32">
                <title>receipt</title>
                <path d="M28 32c-0.122 0-0.245-0.027-0.358-0.085l-2.842-1.421-2.842 1.421c-0.226 0.112-0.49 0.112-0.715 0l-2.842-1.421-2.842 1.421c-0.226 0.112-0.49 0.112-0.715 0l-2.842-1.421-2.842 1.421c-0.226 0.112-0.49 0.112-0.715 0l-2.842-1.421-2.842 1.421c-0.248 0.123-0.542 0.11-0.778-0.035s-0.379-0.403-0.379-0.68v-28.8c0-0.302 0.171-0.581 0.442-0.715l3.2-1.6c0.226-0.112 0.49-0.112 0.715 0l2.842 1.421 2.842-1.421c0.226-0.112 0.49-0.112 0.715 0l2.842 1.421 2.842-1.421c0.226-0.112 0.49-0.112 0.715 0l2.842 1.421 2.842-1.421c0.226-0.112 0.49-0.112 0.715 0l3.2 1.6c0.27 0.136 0.442 0.413 0.442 0.715v28.8c0 0.277-0.144 0.534-0.379 0.68-0.128 0.080-0.274 0.12-0.421 0.12zM18.4 28.8c0.123 0 0.245 0.029 0.358 0.085l2.842 1.421 2.842-1.421c0.226-0.112 0.49-0.112 0.715 0l2.042 1.021v-27.011l-2.4-1.2-2.842 1.421c-0.226 0.112-0.49 0.112-0.715 0l-2.842-1.421-2.842 1.421c-0.226 0.112-0.49 0.112-0.715 0l-2.842-1.421-2.842 1.421c-0.226 0.112-0.49 0.112-0.715 0l-2.842-1.421-2.4 1.2v27.011l2.042-1.021c0.226-0.112 0.49-0.112 0.715 0l2.842 1.421 2.842-1.421c0.226-0.112 0.49-0.112 0.715 0l2.842 1.421 2.842-1.421c0.112-0.056 0.235-0.085 0.358-0.085zM18.4 20.8h-5.6v-1.6h5.6c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-2.4v-0.8c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v0.8h-2.4c-0.442 0-0.8 0.358-0.8 0.8v3.2c0 0.442 0.358 0.8 0.8 0.8h5.6v1.6h-5.6c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h2.4v0.8c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-0.8h2.4c0.442 0 0.8-0.358 0.8-0.8v-3.2c0-0.442-0.358-0.8-0.8-0.8zM20 8h-9.6c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h9.6c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM23.2 11.2h-16c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h16c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM23.2 14.4h-16c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h16c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8z"></path>
            </symbol>
            <symbol id="icon-calendar-empty" viewBox="0 0 32 32">
                <title>calendar-empty</title>
                <path d="M29.6 3.2h-4v-0.8c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v0.8h-16v-0.8c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v0.8h-4c-1.323 0-2.4 1.077-2.4 2.4v22.4c0 1.323 1.077 2.4 2.4 2.4h27.2c1.323 0 2.4-1.077 2.4-2.4v-22.4c0-1.323-1.077-2.4-2.4-2.4zM2.4 4.8h4v2.4c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-2.4h16v2.4c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-2.4h4c0.442 0 0.8 0.358 0.8 0.8v4h-28.8v-4c0-0.442 0.358-0.8 0.8-0.8zM29.6 28.8h-27.2c-0.442 0-0.8-0.358-0.8-0.8v-16.8h28.8v16.8c0 0.442-0.358 0.8-0.8 0.8z"></path>
            </symbol>
            <symbol id="icon-document" viewBox="0 0 32 32">
                <title>document</title>
                <path d="M26.4 32h-20.8c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h20.8c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM5.6 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h20.8c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-20.8zM20 8h-11.2c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h11.2c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM23.2 11.2h-14.4c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h14.4c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM23.2 14.4h-14.4c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h14.4c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM16.8 17.6h-8c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h8c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM23.2 24h-14.4c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h14.4c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM20 27.2h-11.2c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h11.2c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8z"></path>
            </symbol>
            <symbol id="icon-user" viewBox="0 0 32 32">
                <title>user</title>
                <path d="M15.2 17.6c-4.853 0-8.8-3.947-8.8-8.8s3.947-8.8 8.8-8.8 8.8 3.947 8.8 8.8-3.947 8.8-8.8 8.8zM15.2 1.6c-3.97 0-7.2 3.23-7.2 7.2s3.23 7.2 7.2 7.2c3.97 0 7.2-3.23 7.2-7.2s-3.23-7.2-7.2-7.2zM28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4 0-0.109 0.022-2.696 1.96-5.28 1.128-1.504 2.672-2.699 4.59-3.55 2.342-1.042 5.253-1.57 8.65-1.57s6.307 0.528 8.65 1.57c1.918 0.853 3.462 2.046 4.59 3.55 1.938 2.584 1.96 5.171 1.96 5.28 0 1.323-1.077 2.4-2.4 2.4zM15.2 20.8c-5.579 0-9.696 1.525-11.906 4.41-1.656 2.162-1.693 4.371-1.694 4.394 0 0.438 0.358 0.797 0.8 0.797h25.6c0.442 0 0.8-0.358 0.8-0.8 0-0.019-0.037-2.229-1.694-4.39-2.211-2.885-6.328-4.41-11.906-4.41z"></path>
            </symbol>
            <symbol id="icon-exit" viewBox="0 0 32 32">
                <title>exit</title>
                <path d="M18.4 12.8c0.442 0 0.8-0.358 0.8-0.8v-6.4c0-1.323-1.077-2.4-2.4-2.4h-14.4c-1.323 0-2.4 1.077-2.4 2.4v19.2c0 1.194 0.859 2.496 1.955 2.965l8.259 3.539c0.285 0.122 0.574 0.182 0.851 0.182 0.341 0 0.666-0.093 0.942-0.275 0.502-0.331 0.792-0.92 0.792-1.613v-2.4h4c1.323 0 2.4-1.077 2.4-2.4v-6.4c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v6.4c0 0.442-0.358 0.8-0.8 0.8h-4v-15.2c0-1.194-0.859-2.496-1.955-2.965l-6.147-2.635h12.102c0.442 0 0.8 0.358 0.8 0.8v6.4c0 0.442 0.358 0.8 0.8 0.8zM10.214 8.906c0.515 0.221 0.986 0.934 0.986 1.494v19.2c0 0.166-0.045 0.259-0.072 0.277s-0.13 0.022-0.283-0.043l-8.259-3.539c-0.515-0.221-0.986-0.933-0.986-1.494v-19.2c0-0.126 0.029-0.245 0.082-0.352l8.533 3.658zM29.366 14.634l-4.8-4.8c-0.312-0.312-0.819-0.312-1.131 0s-0.312 0.819 0 1.131l3.434 3.434h-10.069c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h10.069l-3.434 3.434c-0.312 0.312-0.312 0.819 0 1.131 0.157 0.157 0.362 0.234 0.566 0.234s0.41-0.078 0.566-0.234l4.8-4.8c0.312-0.312 0.312-0.819 0-1.131z"></path>
            </symbol>
            <symbol id="icon-eye" viewBox="0 0 32 32">
                <title>eye</title>
                <path d="M31.795 16.266c-0.075-0.085-1.891-2.088-4.73-4.115-1.675-1.197-3.36-2.15-5.008-2.837-2.088-0.87-4.126-1.312-6.058-1.312s-3.97 0.442-6.058 1.312c-1.648 0.686-3.333 1.642-5.008 2.837-2.838 2.027-4.654 4.032-4.73 4.115-0.274 0.304-0.274 0.766 0 1.070 0.075 0.085 1.891 2.088 4.73 4.115 1.675 1.197 3.36 2.15 5.008 2.837 2.088 0.87 4.126 1.312 6.058 1.312s3.97-0.442 6.058-1.312c1.648-0.686 3.333-1.642 5.008-2.837 2.838-2.027 4.654-4.032 4.73-4.115 0.274-0.304 0.274-0.766 0-1.070zM20.118 10.301c1.451 1.221 2.282 2.997 2.282 4.899 0 3.53-2.87 6.4-6.4 6.4s-6.4-2.87-6.4-6.4c0-1.901 0.83-3.678 2.282-4.899 1.315-0.429 2.706-0.701 4.118-0.701s2.803 0.272 4.118 0.701zM26.107 20.17c-2.453 1.747-6.197 3.83-10.107 3.83s-7.654-2.083-10.107-3.83c-1.851-1.318-3.267-2.653-3.982-3.37 0.715-0.717 2.131-2.050 3.982-3.37 0.848-0.605 1.85-1.248 2.96-1.832-0.555 1.101-0.853 2.328-0.853 3.602 0 4.411 3.589 8 8 8s8-3.589 8-8c0-1.274-0.298-2.501-0.853-3.602 1.11 0.584 2.112 1.229 2.96 1.832 1.851 1.318 3.267 2.653 3.982 3.37-0.715 0.717-2.131 2.050-3.982 3.37z"></path>
            </symbol>
            <symbol id="icon-headset" viewBox="0 0 32 32">
                <title>headset</title>
                <path d="M29.6 20.845c-0.442 0-0.8-0.358-0.8-0.8v-5.645c0-8.134-4.666-12.8-12.8-12.8s-12.8 4.666-12.8 12.8v5.645c0 0.442-0.358 0.8-0.8 0.8s-0.8-0.358-0.8-0.8v-5.645c0-2.422 0.379-4.598 1.126-6.472 0.712-1.786 1.763-3.309 3.125-4.525 2.491-2.227 6-3.403 10.15-3.403s7.659 1.178 10.15 3.403c1.36 1.216 2.411 2.739 3.125 4.525 0.747 1.872 1.126 4.050 1.126 6.472v5.645c0 0.442-0.358 0.8-0.8 0.8zM10.4 12.8c-1.051 0-1.946 0.678-2.269 1.621-1.765 0.109-3.030 0.662-3.854 1.683-0.734 0.912-1.077 2.15-1.077 3.896s0.342 2.984 1.077 3.896c0.824 1.022 2.088 1.574 3.854 1.683 0.325 0.942 1.219 1.621 2.269 1.621 1.323 0 2.4-1.077 2.4-2.4v-9.6c0-1.323-1.077-2.4-2.4-2.4zM4.8 20c0-2.258 0.56-3.73 3.2-3.966v7.933c-2.64-0.237-3.2-1.709-3.2-3.966zM11.2 24.8c0 0.442-0.358 0.8-0.8 0.8s-0.8-0.358-0.8-0.8v-9.6c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v9.6zM27.723 16.104c-0.824-1.022-2.088-1.574-3.853-1.683-0.325-0.942-1.219-1.621-2.269-1.621-1.323 0-2.4 1.077-2.4 2.4v9.6c0 1.323 1.077 2.4 2.4 2.4 1.051 0 1.946-0.678 2.269-1.621 1.427-0.088 2.526-0.467 3.331-1.149v1.968c0 1.323-1.077 2.4-2.4 2.4h-5.738c-0.33-0.931-1.219-1.6-2.262-1.6-1.323 0-2.4 1.077-2.4 2.4s1.077 2.4 2.4 2.4c1.043 0 1.933-0.669 2.262-1.6h5.738c2.205 0 4-1.795 4-4v-6.4c0-1.746-0.342-2.984-1.077-3.896zM16.8 30.4c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8 0.8 0.358 0.8 0.8-0.358 0.8-0.8 0.8zM21.6 25.6c-0.442 0-0.8-0.358-0.8-0.8v-9.6c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v9.6c0 0.442-0.358 0.8-0.8 0.8zM24 23.966v-7.933c2.64 0.237 3.2 1.709 3.2 3.966s-0.56 3.73-3.2 3.966z"></path>
            </symbol>
        </defs>
    </svg>

        </div>
</div>
    );

}

export default DashboardTipoProducto;