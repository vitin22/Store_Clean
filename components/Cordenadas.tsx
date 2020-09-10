import React from 'react';
import { useIpCoords } from 'use-ipcoords'
 
 
 export const Ip = () => {
    const {
        lat,
        long,
        count 
    } = useIpCoords();

    if(count=="CU"){
        console.log("funciona")
    }
 
    return {lat, long, count}
 
};