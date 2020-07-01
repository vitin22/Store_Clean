import {useRouter} from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';
import { PagProduct } from '@components/Apollo/jobs.query';

export const Datos = () => {
	const router = useRouter();
	var datos = Array();
	
	var q =router.query.q;
	var page =router.query.page;
	var show =router.query.show;
	var subcat =router.query.subcat;
	var brand =router.query.brand;
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
	
	if(subcat==undefined){
		subcat="";
	}

	if(brand==undefined){
		brand="";
	}

	if(list==undefined){
		list="4";
	}

	datos['q'] = q;
	datos['page'] = page;
	datos['show'] = show;
	datos['subcat'] = subcat;
	datos['brand'] = brand;
	datos['list'] = list;


	return datos;
}

export const Ruta = (datos) => {
    return `/store?q=${datos['q']}&subcat=${datos['subcat']}&brand=${datos['brand']}&show=${datos['show']}&page=${datos['page']}&list=${datos['list']}`;
}

export const Pages = (id) => {
    let pages;
    var datos = Datos();

    if(id){
        datos['page'] = id;
    }

    const { data } = useQuery(PagProduct, {
        variables: {
			first: datos['show'] , 
			after: datos['page'],
			descripcion: datos['q'],
			subcat: datos['subcat'],
			marca: datos['brand']
		},
        client: client
    });
    if(data){
        pages = data.allProductos.pageInfo.endCursor;
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
	var url = 'http://127.0.0.1:8000';
	return url; 
}

export default Datos;