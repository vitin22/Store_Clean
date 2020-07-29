import React from 'react';
import { useRouter } from 'next/router';
import Pag from '@components/Pag/Pag'

const HomePage = () => {
        const router = useRouter();
        return(
                <Pag id={`${router.query.id}`}/>
        );
};
  
  
  export default HomePage