import React from 'react';
import Prod from '@components/Product/Prod';

const StoreDataB = (props) => {
    var data = props.data;

	var state = 0;

return(
<div id="store" className="col-md-9">
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
									<select className="input-select">
										<option value="0">20</option>
										<option value="1">50</option>
									</select>
								</label>
							</div>
							<ul className="store-grid">
								<li className="active"><i className="fa fa-th"></i></li>
								<li><a href="#"><i className="fa fa-th-list"></i></a></li>
							</ul>
						</div>
						<div className="row">

	{data.allProductos.edges.map(
	  product => {if ( state < 4){
		  state++;
		return(  
			<Prod md='3' category={product.node.subcategoria.descripcion} img={product.node.images.edges[0].node.image} idmarca={product.node.id} marca={product.node.descripcion} price={'$450.00'} label={<span className="new">NEW</span>}/>			
		)}else{
			state = 1;
		return(  
			<div>
			<div className="clearfix visible-lg visible-md"></div>
			<Prod md='3' category={product.node.subcategoria.descripcion} img={product.node.images.edges[0].node.image} idmarca={product.node.id} marca={product.node.descripcion} price={'$450.00'} label={<span className="sale">-30%</span>} oldprice={'$990.00'}/>
			</div>
			)

		}
		}
    )}				
						</div>
						<div className="store-filter clearfix">
							<span className="store-qty">Showing 20-100 products</span>
							<ul className="store-pagination">
								<li className="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
							</ul>
						</div>
					</div>
);
};

export default StoreDataB;