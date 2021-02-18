import React, { useState, useEffect } from 'react';
//import { useQuery } from '@apollo/react-hooks';
//import { client } from '@components/MyApollo/MyApollo';
import { client } from '@components/Apollo/ApolloV';
import { gql, useQuery } from '@apollo/client';
import { PagProd } from '@components/Apollo/jobs.query';
import { useRouter } from 'next/router';
//import Datos, { ImageValidate } from '@components/Store/Datos';
//import Estilo from '@components/ScriptD'

const Probador = (props) => {
	let image;

	const router = useRouter();
    //var datos = Datos();
    const [rango, setRango] = useState('null');

  
    //console.log(datos['zipcode']);
    //console.log("es este de arriba");

    const { loading, error, data } = useQuery(PagProd, {
        variables: {
		//	first: datos['show'], 
		//	after: datos['page'],
		//	services_Categoria_Nombre: datos['q'],
         //   services_Zipcode: datos['zipcode']
            services_Zipcode: 32110
		},
        client: client
    });

	//if (loading || !data) {
	//    return <img src="img/giphy.gif"/>;
    //}
    
    console.log(data);
    console.log(rango)

	/*if(datos['list']=="4"){
        console.log(datos['list']);
        console.log(datos['zipcode']);
    }*/
    

    if(loading) return <text>Cargando....</text>;
    if (error) return (
    <text>Error! ${error.message}</text>
    );

return(
<div >
 
<p>Cosa</p>
<div >
                            
                            
{data.allPrestadorServicio.edges.map(prestador => {
    
                                    return (
                                   <p>{prestador.node.nombre}</p>
                                   )
                                }
                            )}    
                            
                            
                        </div>
</div>
);
};

export default Probador;