import React, { useState } from 'react';

import Estilo from './ScriptD'


function DashboardSidebar() {

    return(
        <div>

                
                
                <div className="sidebar">
                    <div className="container-fluid">
                        <div className="user-profile media align-items-center mb-6">
                            <div className="image mr-3"><img src="images/other/account-campaign.png" alt="User image"
                                                         className="rounded-circle"/></div>
                            <div className="media-body lh-14">
                                <span className="text-dark d-block font-size-md">Howdy,</span>
                                <span className="mb-0 h5">Logan Cee!</span>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush list-group-borderless">
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="dashboard"
                                   className="d-flex align-items-center link-hover-dark-primary font-size-md">
                                    <span className="d-inline-block mr-3"><i className="fal fa-cog"></i></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="#listing"
                                   className="d-flex align-items-center link-hover-dark-primary font-size-md"
                                   data-toggle="collapse"
                                   aria-expanded="false">
									<span className="d-inline-block mr-3"><svg className="icon icon-layers"><use
                                            xlinkHref="#icon-layers"></use></svg></span>
                                    <span>Gestionar</span>
                                    <span className=" ml-auto"><i className="fal fa-chevron-down"></i></span>
                                </a>
                               
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="listing">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="dashboardproductos"
                                                                                  className="link-hover-dark-primary font-size-md">Productos
                                                                                  </a></li>
                                </ul>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="listing">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="dashboardservicios"
                                                                                  className="link-hover-dark-primary font-size-md">Servicios
                                                                                  </a></li>
                                </ul>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="listing">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="dashboardgservicios"
                                                                                  className="link-hover-dark-primary font-size-md">Grupo de Servicios
                                                                                  </a></li>
                                </ul>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="listing">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="dashboardtipoproducto"
                                                                                  className="link-hover-dark-primary font-size-md">Tipo de Producto</a></li>
                                </ul>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="listing">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="dashboardvarianteproducto"
                                                                                  className="link-hover-dark-primary font-size-md">Variante de Producto</a></li>
                                </ul>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="listing">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="dashboardpservicios"
                                                                                  className="link-hover-dark-primary font-size-md">Prestador de Servicios</a></li>
                                </ul>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="listing">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="dashboardpserviciosappliance"
                                                                                  className="link-hover-dark-primary font-size-md">Prestador de Servicios Appliance</a></li>
                                </ul>
                            </li>


                            {/*<!-- #header start -->
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="panel-my-favourite.html"
                                   className="d-flex align-items-center link-hover-dark-primary font-size-md">
                                    <span className="d-inline-block mr-3"><i className="fal fa-bookmark"></i></span>
                                    <span>Saved</span>
                                </a>
                            </li>
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="#invoice"
                                   className="d-flex align-items-center link-hover-dark-primary font-size-md"
                                   data-toggle="collapse"
                                   aria-expanded="false">
									<span className="d-inline-block mr-3"><svg className="icon icon-receipt"><use
                                            xlinkHref="#icon-receipt"></use></svg></span>
                                    <span>Invoices</span>
                                    <span className=" ml-auto"><i className="fal fa-chevron-down"></i></span>
                                </a>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="invoice">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="panel-invoice-listing.html"
                                                                                  className="link-hover-dark-primary font-size-md">Invoice
                                        Listing</a></li>
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="panel-invoice-details.html"
                                                                                  className="link-hover-dark-primary font-size-md">Invoice
                                        Details</a></li>
                                </ul>
                            </li>
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="panel-package.html"
                                   className="d-flex align-items-center link-hover-dark-primary font-size-md">
                                    <span className="d-inline-block mr-3"><i className="fal fa-gift"></i></span>
                                    <span>Packages</span>
                                </a>
                            </li>
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="#adcampaign"
                                   className="d-flex align-items-center link-hover-dark-primary font-size-md"
                                   data-toggle="collapse"
                                   aria-expanded="false">
                                    <span className="d-inline-block mr-3"><i className="far fa-bullhorn"></i></span>
                                    <span>Ad Campaigns</span>
                                    <span className=" ml-auto"><i className="fal fa-chevron-down"></i></span>
                                </a>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="adcampaign">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a
                                            href="panel-ad-campaigns-active.html"
                                            className="link-hover-dark-primary font-size-md">Ad
                                        Campaigns Active</a></li>
                                    <li className="list-group-item p-0 mb-2 lh-15"><a
                                            href="panel-ad-campaigns-start-new.html"
                                            className="link-hover-dark-primary font-size-md">Ad
                                        Campaigns Start new</a></li>
                                </ul>
                            </li>
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="#review" className="d-flex align-items-center link-hover-dark-primary font-size-md"
                                   data-toggle="collapse"
                                   aria-expanded="false">
                                    <span className="d-inline-block mr-3"><i className="fal fa-star"></i></span>
                                    <span>Reviews</span>
                                    <span className=" ml-auto"> <i className="fal fa-chevron-down"></i></span>
                                </a>
                                <ul className="submenu collapse list-group list-group-flush list-group-borderless pt-2 mb-0 sidebar-menu"
                                    id="review">
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="panel-review-received.html"
                                                                                  className="link-hover-dark-primary font-size-md">Review
                                        received</a></li>
                                    <li className="list-group-item p-0 mb-2 lh-15"><a href="panel-review-submitted.html"
                                                                                  className="link-hover-dark-primary font-size-md">Review
                                        submitted</a></li>
                                </ul>
                            </li>
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="panel-my-profile.html"
                                   className="d-flex align-items-center link-hover-dark-primary font-size-md">
									<span className="d-inline-block mr-3"><svg className="icon icon-user"><use
                                            xlinkHref="#icon-user"></use></svg></span>
                                    <span>My Profile</span>
                                </a>
                            </li>
                            
                            <li className="list-group-item p-0 mb-2 lh-15">
                                <a href="#login-popup" className="d-flex align-items-center link-hover-dark-primary font-size-md">
									<span className="d-inline-block mr-3"><svg className="icon icon-exit"><use
                                            xlinkHref="#icon-exit"></use></svg></span>
                                    <span>Logout</span>
                                </a>
                            </li>
                            */}
                        </ul>
                    </div>
                </div>
               
               
        </div>
       
    );

}

export default DashboardSidebar;