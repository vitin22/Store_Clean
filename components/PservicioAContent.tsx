import React, { useState, useImperativeHandle } from 'react';
import Estilo from './ScriptD'

import { ADD_PRODUCTO, DEL_GRUPSERVICIO } from '@components/Apollo/jobs.mutations';
import { PagGrupServ} from '@components/Apollo/jobs.query';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Header from './Header'
import DashboardSidebar from './DashboardSidebar'
import { client } from '@components/MyApollo/MyApollo';
import {useRouter, Router} from 'next/router'

//import { newRegistery, Registery } from './Type';
import withApollo from './Apollo/apollo';
import Link from 'next/link';
import { route } from 'next/dist/next-server/server/router';



const GserviciosContent = () =>{
    const route = useRouter()

    const [grupoId, setgrupoId] = useState('');
    const { loading: loader, data: datero , error: errore} = useQuery(PagGrupServ,
         );

         const [deleteGrupoServicio, { error,data }] = useMutation(DEL_GRUPSERVICIO, {
            variables: { grupoId}
           
          });


//console.log(grupoId)

const handleClick = (x) => {
    event.preventDefault();
   setgrupoId(x);
   deleteGrupoServicio();
   route.push('/home')
}
    
    if(loader) return <text>Cargando....</text>;
    if (errore) return (
    <text>Error! ${errore.message}</text>
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
                                            
                                        {datero.allGrupoServicio.edges.map(prestador => {
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
                                                                        className="badge badge-success d-inline-block mr-1">5</span><span
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
                                                        {setgrupoId(prestador.node.id)}
                                                        <button type="submit"
                                    className="btn btn-primary btn-block font-weight-bold text-uppercase font-size-lg rounded-sm mb-8" onClick={()=>  handleClick(prestador.node.id)} >
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
                                    <div className="tab-pane fade" id="active" role="tabpanel" aria-labelledby="active-tab">
                                        <div className="store-listing-style-04">
                                            <div className="store-listing-item">
                                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap border-bottom py-4 py-lg-0">
                                                    <div className="store media align-items-stretch py-4">
                                                        <a href="listing-details-full-image.html" className="store-image">
                                                            <img src="images/shop/favourite-01.jpg" alt="Favourite 1"/>
                                                        </a>
                                                        <div className="media-body px-0 pt-4 pt-md-0">
                                                            <a href="listing-details-image.html"
                                                               className="font-size-lg font-weight-semibold text-dark d-inline-block mb-2 lh-1"><span
                                                                    className="letter-spacing-25">Furniture Assembly</span>
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
                                                        <a href="#"
                                                           className="btn btn-primary btn-icon-left mb-2 mb-sm-0 px-5 font-size-md">
                                                            <i className="fal fa-trash-alt"></i>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="store-listing-item">
                                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap border-bottom py-4 py-lg-0">
                                                    <div className="store media align-items-stretch py-4">
                                                        <a href="listing-details-full-image.html" className="store-image">
                                                            <img src="images/shop/favourite-02.jpg" alt="Favourite 1"/>
                                                        </a>
                                                        <div className="media-body px-0 pt-4 pt-md-0">
                                                            <a href="listing-details-image.html"
                                                               className="font-size-lg font-weight-semibold text-dark d-inline-block mb-2 lh-1"><span
                                                                    className="letter-spacing-25">Roman Kraft Hotel</span>
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
                                                                <li className="list-inline-item">
                                                                    <a href="#"
                                                                       className="link-hover-secondary-primary">
                                                                        <svg className="icon icon-bed">
                                                                            <use xlinkHref="#icon-bed"></use>
                                                                        </svg>
                                                                        Hotel
                                                                    </a>
                                                                </li>
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
                                                        <a href="#"
                                                           className="btn btn-primary btn-icon-left mb-2 mb-sm-0 px-5 font-size-md">
                                                            <i className="fal fa-trash-alt"></i>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pending" role="tabpanel"
                                         aria-labelledby="pending-tab">
                                        <div className="store-listing-style-04">
                                            <div className="store-listing-item">
                                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap border-bottom py-4 py-lg-0">
                                                    <div className="store media align-items-stretch py-4">
                                                        <a href="listing-details-full-image.html" className="store-image">
                                                            <img src="images/shop/favourite-03.jpg" alt="Favourite 1"/>
                                                        </a>
                                                        <div className="media-body px-0 pt-4 pt-md-0">
                                                            <a href="listing-details-image.html"
                                                               className="font-size-lg font-weight-semibold text-dark d-inline-block mb-2 lh-1"><span
                                                                    className="letter-spacing-25">Karly Gomez Cake</span>
                                                            </a>
                                                            <ul className="list-inline store-meta mb-3 font-size-sm d-flex align-items-center flex-wrap">
                                                                <li className="list-inline-item"><span
                                                                        className="mr-1">From</span><span
                                                                        className="text-danger font-weight-semibold">$56.00</span>
                                                                </li>
                                                                <li className="list-inline-item separate"></li>
                                                                <li className="list-inline-item">
                                                                    <a href="#" className="link-hover-secondary-primary">
                                                                        <svg className="icon icon-bed">
                                                                            <use xlinkHref="#icon-bed"></use>
                                                                        </svg>
                                                                        <span>Hotel</span>
                                                                    </a>
                                                                </li>
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
                                                                    <span className="status pending">Pending</span>
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
                                                        <a href="#"
                                                           className="btn btn-primary btn-icon-left mb-2 mb-sm-0 px-5 font-size-md">
                                                            <i className="fal fa-trash-alt"></i>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="expires" role="tabpanel"
                                         aria-labelledby="expires-tab">
                                        <div className="store-listing-style-04">
                                            <div className="store-listing-item">
                                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap border-bottom py-4 py-lg-0">
                                                    <div className="store media align-items-stretch py-4">
                                                        <a href="listing-details-full-image.html" className="store-image">
                                                            <img src="images/shop/favourite-04.jpg" alt="Favourite 1"/>
                                                        </a>
                                                        <div className="media-body px-0 pt-4 pt-md-0">
                                                            <a href="listing-details-image.html"
                                                               className="font-size-lg font-weight-semibold text-dark d-inline-block mb-2 lh-1"><span
                                                                    className="letter-spacing-25">Furniture Assembly</span>
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
                                                                    <span className="status experied">Experied</span>
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
                                                        <a href="#"
                                                           className="btn btn-primary btn-icon-left mb-2 mb-sm-0 px-5 font-size-md">
                                                            <i className="fal fa-trash-alt"></i>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default withApollo(GserviciosContent);