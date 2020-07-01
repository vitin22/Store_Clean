import React from 'react';
import Slide from '@components/Slide/Slide';
import Nav from '@components/Slide/Nav';
import { useQuery } from '@apollo/react-hooks';
import { AllProdSub } from '@components/Apollo/jobs.query';
import { useRouter } from 'next/router';
import { client } from '@components/MyApollo/MyApollo';

let subcat;

const bond = (props) => {
  
	const router = useRouter();
	
	
  
	if(router.query.subcat){
	   subcat = router.query.subcat;
   }
  
  
  
	   if(!router.query.subcat){
		 subcat = "";
	   }
	
	const { loading, data } = useQuery(AllProdSub, {
	  variables:{ 
		subcategoria: subcat
	  },
	  client: client
	});
  
	if (loading || !data) {
	  return <img src="img/giphy.gif"/>;
	}

	return(
	<div className="section">
	<div className="container">
		<div className="row">

			<div className="col-md-12">
				<div className="section-title">
					<h3 className="title">{props.title}</h3>
					<Nav/>
				</div>
			</div>
			{/* <!-- /section title --> */}


			<div className="col-md-12">
				<div className="row">
					<div className="products-tabs">
						<div id="tab2" className="tab-pane fade in active">
							<div className="products-slick" data-nav="#slick-nav-2">
							<Slide datos={data.allProductos}/>
								
							</div>
							<div id="slick-nav-2" className="products-slick-nav"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
};

export default bond;