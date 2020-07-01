import React from 'react';

const Comment = (props) => {
	var comentarios = props.comentarios;
	return(
	<div className="col-md-6">
	<div id="reviews">
		<ul className="reviews">
			{
				comentarios.edges.map(
					comment => (
						<li>
							<div className="review-heading">
								<h5 className="name">{comment.node.cliente.username}</h5>
								<p className="date">{comment.node.fechamodificado}</p>
								<div className="review-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o empty"></i>
								</div>
							</div>
							<div className="review-body">
								<p>{comment.node.text}</p>
							</div>
						</li>

					)
				)
			}
		</ul>
		<ul className="reviews-pagination">
			<li className="active">1</li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
			<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
		</ul>
	</div>
</div>
)
};

export default Comment;