import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useRouter} from 'next/router';
import { client } from '@components/MyApollo/MyApollo';
import { All_CATSERV } from '@components/Apollo/jobs.query';
import {Datos,  Ruta } from '@components/Store/Datos';


const bond = () => {
		
	const route = useRouter();
	const { loading, data } = useQuery(All_CATSERV, {
	client: client
	});

	const router = useRouter();
	var datos = Datos();

	const [rango, setRango] = useState('null');

	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
	}
	
	return(

<div className="sidebar col-lg-4 order-1 order-lg-0 mb-8 mb-lg-0">
                        <div className="card search bg-white mb-6 border-0 rounded-0 px-6">
                            <div className="card-header bg-transparent border-0 pt-4 pb-0 px-0">
                                <h5 className="card-title mb-0">Search</h5>
                            </div>
                            <div className="card-body px-0 pb-42">
                                <div className="form-search form-search-style-03">
                                    <div className="form-group">
                                        <div className="input-group d-flex align-items-center">
                                            <label htmlFor="what"
                                                   className="input-group-prepend text-dark font-weight-semibold">What</label>
                                            <input type="text" autoComplete="off" className="form-control bg-transparent"
                                                   id="what"
                                                   placeholder="Any keywords..."/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group d-flex align-items-center">
                                            <label htmlFor="where"
                                                   className="input-group-prepend text-dark font-weight-semibold">Where</label>
                                            <input type="text" autoComplete="off" className="form-control bg-transparent"
                                                   id="where"
                                                   placeholder="City, postcode..."/>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            className="btn btn-primary btn-block btn-icon-left">
                                        <i className="fal fa-search"></i>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card widget-filter bg-white mb-6 border-0 rounded-0 px-6">
                            <div className="card-header bg-transparent border-0 pt-4 pb-0 px-0">
                                <h5 className="card-title mb-0">Filter</h5>
                            </div>
                            <div className="card-body px-0">
                                <div className="form-filter">
                                    <form>
                                        <div className="form-group category">
                                            <div className="select-custom">
                                                <select className="form-control bg-transparent">
                                                    <option value="0">Categories</option>
                                                    <option value="1">New York</option>
                                                    <option value="1">LA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group price-range">
                                            <label className="form-label">
                                                Price Range
                                            </label>
                                            <div id="price" data-slider="true"
                                                 data-slider-options='{"min":0,"max":4000,"values":[0,2000]}'></div>
                                            <div className="description">
                                                From <input type="text" readOnly className="amount border-0" name="rango" value={rango} onChange={e => setRango(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" value="Open Now" className="form-control bg-transparent"/>
                                                <span className="input-group-append"><i className="fal fa-clock"></i></span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" value="Highest Rated"
                                                       className="form-control bg-transparent"/>
                                                <span className="input-group-append"><i className="fas fa-star"></i></span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" value="Most Reviewed"
                                                       className="form-control bg-transparent"/>
                                                <span className="input-group-append"><i className="fal fa-comment"></i></span>
                                            </div>
                                        </div>


                                        <div className="form-group filter-tags">
                                            <label className="form-label">Filter by tags</label>
											
											{data.allCategoriaServicio.edges.map(
	  allcat => (  
		<div className="custom-control custom-checkbox lh-19">
				<input className="custom-control-input" type="checkbox" id={allcat.node.id}
				
				onClick={e => {
					datos['subcat']=allcat.node.id;
					var ruta = Ruta(datos);
					router.push(ruta);
				}}
				checked={allcat.node.id == router.query.subcat}
				/>
				<label className="custom-control-label" htmlFor={allcat.node.id}>
					
					{allcat.node.nombre}
					
				</label>
			</div>
			)
		)
		}





                                           
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                       {/* <div className="campaign">
                            <img src="images/other/campaign.jpg" alt="Campaign"/>
                        </div>
                        */}
                    </div>

	
);
	};
export default bond;