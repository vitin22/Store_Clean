import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ID_PRODUCT } from '@components/Apollo/jobs.query'
import { client } from '@components/MyApollo/MyApollo';
import Tiny from './Tiny';
import StartRating from './StartRating';
import Comment from '@components/Product/Comment';
import { useRouter } from 'next/router';

const SeeProduct = (props) => {
	let start = Array();

	start = [0,0,0,0,0,0];

	const router = useRouter();
	let id = router.query.id;

    const { loading, data } = useQuery(ID_PRODUCT, {
        variables: {id: id},
        client: client
    });
		
	if (loading || !data) {
	    return <img src="img/giphy.gif"/>;
	}
	
	let sum = 0;
	var calificacion = data.productos.calificacionSet;
	for (let key = 0; key < calificacion.length; key++) {
		sum = sum + calificacion[key].calificacion;
		start[parseInt(calificacion[key].calificacion)]++;		
	}
	
	console.log(calificacion.length);
	if(calificacion.length != 0){
		start[0]=sum/calificacion.length;
	}
	
	return(
	<div className="section">
			<div className="container">
				<div className="row">
						<Tiny id={id} classess="product-details"/>
					<div className="col-md-5">
						<div className="product-details">
							<h2 className="product-name">{data.productos.descripcion}</h2>
							<div>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</div>
								<a className="review-link" href="#">10 Review(s) | Add your review</a>
							</div>
							<div>
								<h3 className="product-price">${data.productos.precioventa} 
								{/* <del className="product-old-price">$990.00</del> */}
								</h3>
								<span className="product-available">In Stock</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

							<div className="product-options">
								<label>
									Size
									<select className="input-select">
										<option value="0">X</option>
									</select>
								</label>
								<label>
									Color
									<select className="input-select">
										<option value="0">Red</option>
									</select>
								</label>
							</div>

							<div className="add-to-cart">
								<div className="qty-label">
									Qty
									<div className="input-number">
										<input type="number"/>
										<span className="qty-up">+</span>
										<span className="qty-down">-</span>
									</div>
								</div>
								<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
							</div>

							<ul className="product-btns">
								<li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
								<li><a href="#"><i className="fa fa-exchange"></i> add to compare</a></li>
							</ul>

							<ul className="product-links">
								<li>Category:</li>
								<li><a href="#">{data.productos.subcategoria.categoria.descripcion}</a></li>
								<li><a href="#">{data.productos.subcategoria.descripcion}</a></li>
							</ul>

							<ul className="product-links">
								<li>Share:</li>
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-envelope"></i></a></li>
							</ul>

						</div>
					</div>
					
					<div className="col-md-12">
						<div id="product-tab">
							{/* <!-- product tab nav--> */}
							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab3">Reviews ({data.productos.comentarioSet.edges.length})</a></li>
							</ul>
							{/* <!-- /product tab nav--> */}

							{/* <!-- product tab content--> */}
							<div className="tab-content">

								{/* <!-- tab3 --> */}
								<div id="tab3" className="tab-pane fade in active">
									<div className="row">
										{/* <!-- Rating--> */}
										<div className="col-md-3">
											<div id="rating">
												<div className="rating-avg">
													<span>{start[0]}</span>
													<StartRating real={start[0]}/>
												</div>
												<ul className="rating">
													{start.map(
														(est,index) => {
															if(index!=0){
																return(
																<li>
																	<StartRating real={index}/>
																	<div className="rating-progress">
																		<div style={{width: 80% + 'em'}}></div>
																	</div>
																<span className="sum">{est}</span>
																</li>	
																)															
															}
														}
													)}
												</ul>
											</div>
										</div>
										{/* <!-- /Rating--> */}

										<Comment comentarios={data.productos.comentarioSet}/>

										{/* <!-- Review Form--> */}
										<div className="col-md-3">
											<div id="review-form">
												<form className="review-form">
													<input className="input" type="text" placeholder="Your Name"/>
													<input className="input" type="email" placeholder="Your Email"/>
													<textarea className="input" placeholder="Your Review"></textarea>
													<div className="input-rating">
														<span>Your Rating: </span>
														<div className="stars">
															<input id="star5" name="rating" value="5" type="radio"/><label htmlFor="star5"></label>
															<input id="star4" name="rating" value="4" type="radio"/><label htmlFor="star4"></label>
															<input id="star3" name="rating" value="3" type="radio"/><label htmlFor="star3"></label>
															<input id="star2" name="rating" value="2" type="radio"/><label htmlFor="star2"></label>
															<input id="star1" name="rating" value="1" type="radio"/><label htmlFor="star1"></label>
														</div>
													</div>
													<button className="primary-btn">Submit</button>
												</form>
											</div>
										</div>
										{/* <!-- /Review Form--> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
);
	};

export default SeeProduct;