import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  })

  return ( 
    <>
      {StarshipDetails.name ?
        <div id='ship-card'>
            <h2>NAME: {starshipDetails.name}</h2>
            <h2>MODEL: {starshipDetails.model}</h2>
            <a href='/'><h2>Return to Starship list</h2></a>
        </div>
        :
        <>
        <h3 className='loading'>Loading Starship Details...</h3>
        </>
        }
    </>
   );
}
 
export default StarshipDetails;