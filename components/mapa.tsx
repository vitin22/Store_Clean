import Rreact, { useState } from 'react'
import { useIpCoords } from 'use-ipcoords'
import usZips from 'us-zips'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import geo2zip from 'geo2zip'


  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoidml0aW4yMiIsImEiOiJja2R5cjRxM3YzZ2dtMnpxcXltcmNhZ21jIn0.YriEgQ-ZxlXeAUP1KP2oow'
  });
  
  const Mapbox = () => {
    const [latitudeIp, setlatitudeIp] = useState('null');
    const [longitudeIp, setlongitudeIp] = useState('null');
    const [latitudeZip, setlatitudeZip] = useState('null');
    const [longitudeZip, setlongitudeZip] = useState('null');
    const [zipcode, setzipcode] = useState('');




//para detectar por la ip la geolocalizacion del cliente
    const Ip = () => {
        const {
            latitud,
            longitud
        } = useIpCoords();
     setlatitudeIp(latitud)
     setlongitudeIp(longitud)
     console.log(latitudeIp)
     console.log(longitudeIp)

    }
    

    //para saber las coordenadas del zipcode
    const Zip = () =>{
        var zipco = `'${zipcode}'`;    
      
        const x =  usZips[zipco];
        console.log(x.latitude);
        
      
      }
    

      //saber el zipcode mediente las coordenadas de la geolocalizacion
      const Zipo = () =>{
        const location = {
          latitude: latitudeIp,
          longitude: longitudeIp
        };
      
        const closestZip =  geo2zip(location);
        closestZip.then((value) =>{
           console.log(value[0])
           setzipcode(value[0])
        });
        
      
      }




  return (
  <Map
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: '100vh',
      width: '100vw'
    }}
  >
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
    </Layer>
  </Map>
  )
  }

  export default Mapbox;





