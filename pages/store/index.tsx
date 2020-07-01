import React from 'react';
import { useRouter } from 'next/router';
import Store from '@components/Store/Store'

const HomePage = () => {
        const router = useRouter();
        return(
                <Store id={`${router.query.id}`}/>
        );
};
  
  
  export default HomePage