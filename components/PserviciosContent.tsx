import React, { useState, useEffect } from 'react';
import Estilo from './ScriptD'

import { ADD_CATEGORIA, DEL_SERVICIO, LOGIN_MUTATION } from './Apollo/jobs.mutations';
import {  PagServ } from './Apollo/jobs.query';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {useRouter, Router} from 'next/router'
import Header from './Header'
import DashboardSidebar from './DashboardSidebar'
import Datos, { ImageValidate } from './Store/Datos';
import withApollo from './Apollo/apollo';



const ProductoContent = () =>{


    var datos = Datos();
    const [rango, setRango] = useState('null');

    const [categoria, setcategoria] = useState('');
    const [servicioId, setservicioId] = useState('');
    const route = useRouter()

    const [deleteServicio, { error: erro,data: dat }] = useMutation(DEL_SERVICIO, {
        variables: { servicioId },
        
      });

        const { loading, error: error1, data: dato } = useQuery(PagServ, 
           
            );
    
      if(loading) return <text>Cargando....</text>;
    if (error1) return (
    <text>Error! ${error1.message}</text>
    );
    return(
        <div>

<div className="page-container">
                    <div className="container-fluid">
                        <div className="page-content-wrapper d-flex flex-column">
                            <h1 className="font-size-h4 mb-4 font-weight-normal">My Listings</h1>
                            <div className="page-content">
                                <div className="tabs">
                                    <ul className="nav nav-pills tab-style-01 font-size-lg" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all"
                                               role="tab"
                                               aria-controls="all" aria-selected="true">All Listings (15) </a>
                                        </li>
                                        
                                        
                                       
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="all" role="tabpanel"
                                         aria-labelledby="all-tab">
                                        <div className="store-listing-style-04">
                                        {dato.allServicio.edges.map(prestador => {
                                return (
                                            <div className="store-listing-item">
                                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap border-bottom py-4 py-lg-0">
                                                    <div className="store media align-items-stretch py-4">
                                                        <a href="listing-details-full-image.html" className="store-image">
                                                            <img src="images/shop/favourite-01.jpg" alt="Favourite 1"/>
                                                        </a>
                                                        <div className="media-body px-0 pt-4 pt-md-0">
                                                            <a href="listing-details-image.html"
                                                               className="font-size-lg font-weight-semibold text-dark d-inline-block mb-2 lh-1"><span
                                                                    className="letter-spacing-25">{prestador.node.nombre}</span>
                                                            </a>
                                                            <ul className="list-inline store-meta mb-3 font-size-sm d-flex align-items-center flex-wrap">
                                                                <li className="list-inline-item"><span
                                                                        className="badge badge-success d-inline-block mr-1">5.0</span><span
                                                                        className="number">4 rating</span>
                                                                </li>
                                                                <li className="list-inline-item separate"></li>
                                                                <li className="list-inline-item"><span
                                                                        className="mr-1">From</span><span
                                                                        className="text-danger font-weight-semibold">$56.00</span>
                                                                </li>
                                                                <li className="list-inline-item separate"></li>
                                                                <li className="list-inline-item"><a href="#"
                                                                                                className="link-hover-secondary-primary">
                                                                    <svg className="icon icon-cog">
                                                                        <use xlinkHref="#icon-cog"></use>
                                                                    </svg>
                                                                    <span>Service</span>
                                                                </a></li>
                                                            </ul>
                                                            <div className="border-top pt-2 d-flex">
															<span
                                                                    className="d-inline-block mr-1"><i
                                                                    className="fal fa-map-marker-alt">
															</i>
																</span>
                                                                <a href="#"
                                                                   className="text-secondary text-decoration-none address">San
                                                                    Francisco,
                                                                    CA</a>
                                                                <div className="ml-0 ml-sm-auto">
                                                                    <span className="label">Status:</span>
                                                                    <span className="status active">Active</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="action ml-0 ml-lg-auto mt-3 mt-lg-0 align-items-center flex-wrap flex-sm-nowrap w-100 w-lg-auto">
                                                        <a href="page-submit-listing.html"
                                                           className="btn btn-light btn-icon-left mb-2 mb-sm-0 font-size-md">
                                                            <i className="fal fa-edit"></i>
                                                            Edit
                                                        </a>
                                                        

                                                        <button type="submit"
                                    className="btn btn-primary btn-icon-left mb-2 mb-sm-0 px-5 font-size-md" onClick={()=> setservicioId(prestador.node.servicioId) && deleteServicio()}>
                                Delete
                            </button>


                                                    </div>
                                                </div>
                                            </div>
                                            
                                            )
}
)}
                                            
                                        </div>



                                        
                                        <ul className="pagination pagination-style-02">
                                            <li className="page-item"><a href="#" className="page-link bg-gray"><i
                                                    className="fal fa-chevron-left"></i></a>
                                            </li>
                                            <li className="page-item"><a href="#" className="page-link current bg-gray">1</a>
                                            </li>
                                            <li className="page-item"><a href="#" className="page-link bg-gray">2</a></li>
                                            <li className="page-item"><a href="#" className="page-link bg-gray">3</a></li>
                                            <li className="page-item"><a href="#" className="page-link bg-gray">...</a></li>
                                            <li className="page-item"><a href="#" className="page-link bg-gray">5</a></li>
                                            <li className="page-item"><a href="#" className="page-link bg-gray"><i
                                                    className="fal fa-chevron-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>


                                   
                                    
                                   
                                </div>

                            </div>
                            <div className="mt-5">
                                &copy; 2020 Thedir. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>

    );

}

export default withApollo(ProductoContent);