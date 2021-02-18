import React from 'react';
import { useRouter } from 'next/router';
import Probador from '@components/probador';

const HomePage = () => {
        const router = useRouter();
        return(
                <Probador id={`${router.query.id}`}/>
        );
};
  
  
  export default HomePage