import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useRouter} from 'next/router';
import { client } from '@components/MyApollo/MyApollo';
import { Datos, Ruta} from '@components/Info/Datos';

const PanelI = () => {

	//const router = useRouter();
	//var datos = Datos();0

	//var show = Array();

	//show=[4,12,20];
	
console.log("aki esta")

	return(
		<div>
		<div className="card search bg-white mb-6 border-0 rounded-0 px-6">
		<div className="card-header bg-transparent border-0 pt-4 pb-0 px-0">
			<h5 className="card-title mb-0">Search</h5>
		</div>
		<div className="card-body px-0 pb-42">
			<div className="form-search form-search-style-03">
				<div className="form-group">
					<div className="input-group d-flex align-items-center">
						<label htmlFor="what" className="input-group-prepend text-dark font-weight-semibold">What</label>
						<input type="text" autoComplete="off" className="form-control bg-transparent" id="what" placeholder="Any keywords..."/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group d-flex align-items-center">
						<label htmlFor="where" className="input-group-prepend text-dark font-weight-semibold">Where</label>
						<input type="text" autoComplete="off" className="form-control bg-transparent" id="where" placeholder="City, postcode..."/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary btn-block btn-icon-left">
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
						<div id="price" data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:4000,&quot;values&quot;:[0,2000]}" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" styled="left: 0%; width: 50%;"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" styled="left: 0%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" styled="left: 50%;"></span></div>
						<div className="description">
							From <input type="text" readOnly="" className="amount border-0"/>
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
							<input type="text" value="Highest Rated" className="form-control bg-transparent"/>
							<span className="input-group-append"><i className="fas fa-star"></i></span>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<input type="text" value="Most Reviewed" className="form-control bg-transparent"/>
							<span className="input-group-append"><i className="fal fa-comment"></i></span>
						</div>
					</div>
					<div className="form-group filter-tags">
						<label className="form-label">Filter by tags</label>
						<div className="custom-control custom-checkbox lh-19">
							<input className="custom-control-input" type="checkbox" id="electronics"/>
							<label className="custom-control-label" htmlFor="electronics">
								Electronics
							</label>
						</div>
						<div className="custom-control custom-checkbox lh-19">
							<input className="custom-control-input" type="checkbox" id="books"/>
							<label className="custom-control-label" htmlFor="books">
								Books
							</label>

						</div>
						<div className="custom-control custom-checkbox lh-19">
							<input className="custom-control-input" type="checkbox" id="fashion"/>
							<label className="custom-control-label" htmlFor="fashion">
								Fashion
							</label>

						</div>
						<div className="custom-control custom-checkbox">
							<input className="custom-control-input" type="checkbox" id="vintage"/>
							<label className="custom-control-label" htmlFor="vintage">
								Vintage
							</label>

						</div>
						<div className="custom-control custom-checkbox lh-19">
							<input className="custom-control-input" type="checkbox" id="gift"/>
							<label className="custom-control-label" htmlFor="gift">
								Gift
							</label>

						</div>
						<div className="custom-control custom-checkbox lh-19">
							<input className="custom-control-input" type="checkbox" id="furniture"/>
							<label className="custom-control-label" htmlFor="furniture">
								Furniture
							</label>

						</div>
						<div className="custom-control custom-checkbox">
							<input className="custom-control-input" type="checkbox" id="women-clothing"/>
							<label className="custom-control-label" htmlFor="women-clothing">
								Women Clothing
							</label>

						</div>
						<div className="custom-control custom-checkbox lh-19">
							<input className="custom-control-input" type="checkbox" id="men-clothing"/>
							<label className="custom-control-label" htmlFor="men-clothing">
								Men Clothing
							</label>

						</div>
						<div className="custom-control custom-checkbox lh-19">
							<input className="custom-control-input" type="checkbox" id="shoes"/>
							<label className="custom-control-label" htmlFor="shoes">
								Shoes
							</label>

						</div>
						<div className="custom-control custom-checkbox lh-19">
							<input className="custom-control-input" type="checkbox" id="jewelry"/>
							<label className="custom-control-label" htmlFor="jewelry">
								Jewelry
							</label>

						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div className="campaign">
		<img src="images/other/campaign.jpg" alt="Campaign"/>
	</div>
	</div>
	
);
	};
export default PanelI;

