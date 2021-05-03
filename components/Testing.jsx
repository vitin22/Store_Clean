import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_TYPEPROD, ALL_ZIP } from '@components/Apollo/jobs.query';
import { client } from '@components/MyApollo/MyApollo';


 function Testing() {
    const [count, setCount] = useState(0);
    const [condado, setcondado] = useState(0);

    
    const { loading: loade, data: datoe , error: erroer} = useQuery(ALL_TYPEPROD, 
        {client: client}
    );

	const { loading: loadz, data: datoz } = useQuery(ALL_ZIP, {
		skip: false,
        variables: {condado},
        client:client
		
    });
    
    return (
<div>
 
 {/*<!-- #header start -->*/}
 <p>You clicked {count} times</p>
 <button onClick={() => setCount(1)}>Click me</button>
</div> 
    );
 };
    
 export default Testing;   