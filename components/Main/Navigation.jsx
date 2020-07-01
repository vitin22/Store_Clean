import { useQuery } from '@apollo/react-hooks';
import withApollo from '../Apollo/apollo';
import { AllCategories } from '../Apollo/jobs.query';
import {useRouter, Router} from 'next/router'

const Index = () => {
	const route = useRouter();
	const { loading, data } = useQuery(AllCategories, {});
	
	  if (loading || !data) {
		return <img src="img/giphy.gif"/>;
	  }
	  return (
<nav id="navigation">
	<link type="text/css" rel="stylesheet" href="css/nav.css"/>
	<div className="container">
		<div id="responsive-nav">
			<ul className="main-nav nav navbar-nav">
				<li className="active">
					<a href="/"
					data-toggle="tab" 
					onClick={(e) => {
					e.preventDefault();
						route.push('/')
					}}
					>Home</a></li>
				<li><a href="/store">Categories</a>
					<ul>
						{data.allCategorias.edges.map(
						link => (
							<li><a href={`/store?cat=${link.node.id}`}>{link.node.descripcion}</a></li>  
						)
						)}
					</ul>
				</li>  
				{data.allCategorias.edges.map(
				link => {
					if(link.node.id == link.node.categoriaPadre.id){
						return(
							<li><a href={`/store?cat=${link.node.id}`}>{link.node.descripcion}</a>
							</li>)
					}  
				}
				)}
			</ul>
		</div>
	</div>
</nav>
  );
};
 
export default withApollo(Index);