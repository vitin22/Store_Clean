import React, { useState } from 'react';
import Login from './Login'



 function Testing() {
    const [count, setCount] = useState(0);

   
    return (
<div>
 
 {/*<!-- #header start -->*/}
 <p>You clicked {count} times</p>
 <button onClick={() => setCount(1)}>Click me</button>
</div> 
    );
 };
    
 export default Testing;   