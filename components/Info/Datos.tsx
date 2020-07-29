import {useRouter} from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';
import { PagSearch } from '@components/Apollo/jobs.query';

export const Datos = () => {
	const router = useRouter();
	var datos = Array();
	
	var q =router.query.q;
	var page =router.query.page;
	var show =router.query.show;
	var zipcode =router.query.zipcode;
	var list =router.query.list;

	if(page==undefined){
		page="";
	}

	datos['page'] = page;

	if(q==undefined){
		q="";
	}
	
	if(show==undefined){
		show='4';
	}
	
	if(zipcode==undefined){
		zipcode="";
	}

	

	if(list==undefined){
		list="4";
	}

	datos['q'] = q;
	datos['page'] = page;
	datos['show'] = show;
	datos['zipcode'] = zipcode;
	datos['list'] = list;


	return datos;
}

export const Ruta = (datos) => {
    return `/pag?q=${datos['q']}&zipcode=${datos['zipcode']}&show=${datos['show']}&page=${datos['page']}&list=${datos['list']}`;
}

export const Pages = (id) => {
    let pages;
    var datos = Datos();

    if(id){
        datos['page'] = id;
    }

    const { data } = useQuery(PagSearch, {
        variables: {
			first: datos['show'] , 
			after: datos['page'],
			services_Categoria_Nombre: datos['q'],
			zipCode: datos['zipcode']
			
		},
        client: client
    });
    if(data){
		console.log(data)
        pages = data.allPrestadorServicio.pageInfo.endCursor;
    }else{
        pages = null;
    }

    return pages;
}

export const ImageValidate = (imagen) => {
	let image;
        if(imagen.length > 0){
          image=imagen[0].node.image;
          }else{
          image="media/products/index.jfif";
		  }
	return image; 
}

export const Urlgraph = () => {
	var url = 'http://localhost:8000';
	return url; 
}

export default Datos;