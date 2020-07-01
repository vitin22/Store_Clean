import React from 'react';

const StartRating = (props) => {
	let start = Array();

	start = [0,0,0,0,0];
	
	var real = parseInt(props.real);
	for (let key = 0; key < real; key++) {
		
		start[key]=1;		
	}
	
	// console.log(start);
	return(
		<div className="rating-stars">
			{start.map(
				est => { if(est ==1){
					return(
					<i className="fa fa-star"></i>
					)
				}else{
					return(
					<i className="fa fa-star-o"></i>
					)
				}
				}
			)}
		</div>
)
};

export default StartRating;