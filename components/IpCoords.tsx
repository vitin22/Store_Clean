import {useState, useEffect} from 'react';
import axios from 'axios';




export const IpCoords = () => {
  const [latitudeIp, setLatitudeIp] = useState([]);
  const [longitudeIp, setLongitudeIp] = useState([]);
  const [countryCode, setcountryCode] = useState([]);

  useEffect(() => {
    axios
      .get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => setLatitudeIp(response.data.latitude));
    axios
      .get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => setLongitudeIp(response.data.longitude));
      axios
      .get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => setcountryCode(response.data.country_code));
  }, []);

  return {latitudeIp, longitudeIp, countryCode};
};