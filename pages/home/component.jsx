import React from 'react';
import Home from '../../components/Home'
import { useScript } from '../../components/useScript'

/*
const HomePage = () => (
        
        <Home />
);
  */
  
  export function Component() {
        const [loaded, error] = useScript([
            "vendors/jquery.min.js",
            "vendors/popper/popper.js",
            "vendors/bootstrap/js/bootstrap.js",
            "vendors/hc-sticky/hc-sticky.js",
            "vendors/isotope/isotope.pkgd.js",
            "vendors/slick/slick.js",
            "vendors/waypoints/jquery.waypoints.js",
            "vendors/magnific-popup/jquery.magnific-popup.js",
            "js/app.js"
            ])

        React.useEffect(() => {
            if (!loaded) return
        }, [loaded, error])
    
        return (
            <Home size={"100%"}>
                {loaded && !error ? <div /> : <b>Something went wrong!</b>}
            </Home>
        )
  }