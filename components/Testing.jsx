import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_TYPEPROD, ALL_ZIP } from '@components/Apollo/jobs.query';
//import { client } from '@components/MyApollo/MyApollo';
import withApollo from './Apollo/apollo';
import { ALL_USER} from '@components/Apollo/jobs.query';

 function Testing() {
    const [count, setCount] = useState(0);
    const [condado, setcondado] = useState(0);

    const { loading,error,called,client } = useQuery(ALL_USER, {
        
        //,
        //refetchQueries: ['getRegistry']
        });
   
    
    return (
<div>
 
 {/*<!-- #header start -->*/}
 <p>You clicked {count} times</p>
 <button onClick={() => setCount(1)}>Click me</button>
 <button onClick={() => client.resetStore()}>logout</button>
</div> 
    );
 };
    
 export default withApollo(Testing);   